const WP_API_BASE = "https://nicolaprebenna.it/cms/wp-json/wp/v2";

export interface WPPostFromAPI {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string | null;
  imageAlt: string;
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
}

function mapPost(post: WPPostFromAPI): BlogPost {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    date: post.date,
    image: media?.source_url || null,
    imageAlt: media?.alt_text || post.title.rendered,
  };
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${WP_API_BASE}/posts?_embed&per_page=20`);
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const data: WPPostFromAPI[] = await res.json();
  return data.map(mapPost);
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${WP_API_BASE}/posts?_embed&slug=${encodeURIComponent(slug)}`);
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const data: WPPostFromAPI[] = await res.json();
  if (data.length === 0) return null;
  return mapPost(data[0]);
}

export interface WPCommentFromAPI {
  id: number;
  author_name: string;
  date: string;
  content: { rendered: string };
  author_avatar_urls?: Record<string, string>;
}

export interface BlogComment {
  id: number;
  authorName: string;
  date: string;
  content: string;
  avatar: string | null;
}

function mapComment(c: WPCommentFromAPI): BlogComment {
  return {
    id: c.id,
    authorName: c.author_name,
    date: c.date,
    content: c.content.rendered,
    avatar: c.author_avatar_urls?.["48"] || null,
  };
}

export async function fetchComments(postId: number): Promise<BlogComment[]> {
  const res = await fetch(
    `${WP_API_BASE}/comments?post=${postId}&per_page=100&order=asc&orderby=date`,
  );
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const data: WPCommentFromAPI[] = await res.json();
  return data.map(mapComment);
}

export interface NewComment {
  postId: number;
  authorName: string;
  authorEmail: string;
  content: string;
}

/**
 * Invia un nuovo commento a WordPress. Con la moderazione attiva il commento
 * resta in attesa di approvazione (status "hold") e non comparirà subito.
 * Richiede che su WordPress sia abilitato `rest_allow_anonymous_comments`.
 */
export async function postComment(comment: NewComment): Promise<void> {
  const res = await fetch(`${WP_API_BASE}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      post: comment.postId,
      author_name: comment.authorName,
      author_email: comment.authorEmail,
      content: comment.content,
    }),
  });

  if (!res.ok) {
    let message = `WP API error: ${res.status}`;
    try {
      const err = await res.json();
      if (err?.code === "rest_comment_login_required") {
        message = "I commenti anonimi non sono abilitati su WordPress.";
      } else if (err?.message) {
        message = stripHtml(err.message);
      }
    } catch {
      /* ignore parse errors */
    }
    throw new Error(message);
  }
}

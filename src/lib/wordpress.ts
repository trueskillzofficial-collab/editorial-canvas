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

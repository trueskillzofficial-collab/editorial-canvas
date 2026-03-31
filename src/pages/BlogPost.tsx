import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPostBySlug, fetchPosts } from "@/lib/wordpress";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["wp-post", slug],
    queryFn: () => fetchPostBySlug(slug!),
    enabled: !!slug,
  });

  const { data: allPosts } = useQuery({
    queryKey: ["wp-posts"],
    queryFn: fetchPosts,
  });

  const currentIndex = allPosts?.findIndex((p) => p.slug === slug) ?? -1;
  const prevPost = currentIndex > 0 ? allPosts![currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < (allPosts?.length ?? 0) - 1 ? allPosts![currentIndex + 1] : null;

  return (
    <Layout>
      <div className="container-editorial section-padding">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Torna al Blog
        </Link>

        {isLoading && (
          <div className="max-w-3xl mx-auto space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        )}

        {error && (
          <p className="text-center text-muted-foreground py-12">
            Impossibile caricare l'articolo. Riprova più tardi.
          </p>
        )}

        {post === null && !isLoading && (
          <p className="text-center text-muted-foreground py-12">
            Articolo non trovato.
          </p>
        )}

        {post && (
          <article className="max-w-3xl mx-auto">
            <header className="mb-8 space-y-4">
              <h1 className="text-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </header>

            {post.image && (
              <div className="mb-10 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div
              className="prose prose-lg prose-neutral dark:prose-invert max-w-none
                prose-headings:font-display prose-headings:tracking-tight
                prose-a:text-primary prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Navigazione articoli */}
            <nav className="mt-16 pt-8 border-t border-border flex items-stretch justify-between gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-3 text-left max-w-[45%] py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={20} className="shrink-0 group-hover:-translate-x-1 transition-transform" />
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-widest block mb-1">Precedente</span>
                    <span className="text-sm font-medium line-clamp-2">{prevPost.title}</span>
                  </div>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-3 text-right max-w-[45%] py-3 ml-auto text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-widest block mb-1">Successivo</span>
                    <span className="text-sm font-medium line-clamp-2">{nextPost.title}</span>
                  </div>
                  <ArrowRight size={20} className="shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : <div />}
            </nav>
          </article>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;

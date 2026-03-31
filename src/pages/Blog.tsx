import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPosts } from "@/lib/wordpress";

const BlogCardSkeleton = () => (
  <div className="bg-card rounded-lg overflow-hidden border border-border">
    <Skeleton className="w-full aspect-[16/10]" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["wp-posts"],
    queryFn: fetchPosts,
  });

  return (
    <Layout>
      <SectionBlock title="Blog" subtitle="Articoli, riflessioni e aggiornamenti">
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-muted-foreground py-12">
            Impossibile caricare gli articoli. Riprova più tardi.
          </p>
        )}

        {posts && posts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nessun articolo disponibile.
          </p>
        )}

        {posts && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <span className="text-display text-2xl font-semibold text-muted-foreground/40">NP</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("it-IT", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-display text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </SectionBlock>
    </Layout>
  );
};

export default Blog;

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { MessageCircle, Send, Loader2 } from "lucide-react";
import { fetchComments, postComment } from "@/lib/wordpress";

interface CommentsProps {
  postId: number;
}

const Comments = ({ postId }: CommentsProps) => {
  const {
    data: comments,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["wp-comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const [gdprChecked, setGdprChecked] = useState(false);
  const [gdprError, setGdprError] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdprChecked) {
      setGdprError(true);
      return;
    }
    setGdprError(false);
    setResult(null);
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await postComment({
        postId,
        authorName: String(formData.get("author_name") || ""),
        authorEmail: String(formData.get("author_email") || ""),
        content: String(formData.get("content") || ""),
      });
      setResult({
        ok: true,
        message: "Grazie! Il tuo commento è stato pubblicato.",
      });
      form.reset();
      setGdprChecked(false);
      // Ricarica la lista per mostrare subito il nuovo commento.
      refetch();
    } catch (err) {
      setResult({
        ok: false,
        message: err instanceof Error ? err.message : "Errore durante l'invio. Riprova più tardi.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <h2 className="text-display text-2xl font-bold flex items-center gap-2 mb-8">
        <MessageCircle size={22} className="text-gold" />
        Commenti
        {comments && comments.length > 0 && (
          <span className="text-base font-normal text-muted-foreground">({comments.length})</span>
        )}
      </h2>

      {/* Lista commenti */}
      {isLoading && (
        <p className="text-sm text-muted-foreground">Caricamento commenti…</p>
      )}

      {error && (
        <p className="text-sm text-muted-foreground">
          Impossibile caricare i commenti al momento.
        </p>
      )}

      {comments && comments.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Ancora nessun commento. Sii il primo a commentare.
        </p>
      )}

      {comments && comments.length > 0 && (
        <ul className="space-y-6">
          {comments.map((c) => (
            <li key={c.id} className="flex gap-4">
              {c.avatar ? (
                <img
                  src={c.avatar}
                  alt={c.authorName}
                  className="h-10 w-10 rounded-full shrink-0 mt-1"
                  loading="lazy"
                />
              ) : (
                <div className="h-10 w-10 rounded-full shrink-0 mt-1 bg-secondary flex items-center justify-center text-sm font-semibold text-foreground/60">
                  {c.authorName.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-foreground">{c.authorName}</span>
                  <time dateTime={c.date} className="text-xs text-muted-foreground">
                    {new Date(c.date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div
                  className="prose prose-sm prose-neutral dark:prose-invert max-w-none mt-1"
                  dangerouslySetInnerHTML={{ __html: c.content }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Form nuovo commento */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="text-display text-xl font-semibold mb-6">Lascia un commento</h3>
        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="author_name" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Nome
              </label>
              <input
                id="author_name"
                name="author_name"
                type="text"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label htmlFor="author_email" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Email <span className="normal-case text-muted-foreground">(non pubblicata)</span>
              </label>
              <input
                id="author_email"
                name="author_email"
                type="email"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="content" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
              Commento
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          {/* GDPR Checkbox */}
          <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={gdprChecked}
                onChange={(e) => {
                  setGdprChecked(e.target.checked);
                  if (e.target.checked) setGdprError(false);
                }}
                className="mt-1 h-4 w-4 shrink-0 rounded-sm border border-border accent-gold"
              />
              <span className="text-xs text-foreground/70 leading-relaxed">
                Ho letto l'<Link to="/privacy-policy" className="text-gold hover:underline">informativa sulla privacy</Link> e acconsento al trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
              </span>
            </label>
            {gdprError && (
              <p className="text-xs text-red-500">
                Devi accettare l'informativa sulla privacy per inviare il commento.
              </p>
            )}
          </div>

          {result && (
            <div className={`p-3 rounded-sm text-sm ${result.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
              {result.message}
            </div>
          )}

          <button type="submit" disabled={sending} className="btn-editorial-filled justify-center">
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {sending ? "Invio in corso…" : "Pubblica commento"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Comments;

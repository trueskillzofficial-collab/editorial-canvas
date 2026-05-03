import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { Mail, MapPin, Phone, Send, Facebook, Loader2 } from "lucide-react";
import { getSiteSettings } from "@/lib/data";

const Contatti = () => {
  const settings = getSiteSettings();
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
    formData.append("privacy", gdprChecked ? "1" : "0");

    try {
      const res = await fetch("https://nicolaprebenna.it/contact.php", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ ok: true, message: data.message || "Messaggio inviato con successo!" });
        form.reset();
        setGdprChecked(false);
      } else {
        setResult({ ok: false, message: data.message || "Errore durante l'invio." });
      }
    } catch {
      setResult({ ok: false, message: "Errore di connessione. Riprova più tardi." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <SectionBlock title="Contatti">
        <div className="text-center -mt-4 mb-10 max-w-3xl mx-auto space-y-6">
          <p className="text-display text-xl md:text-2xl font-semibold text-gold italic">
            Per informazioni, collaborazioni ecc….
          </p>
          <div className="p-5 md:p-6 bg-gold/10 border border-gold/40 rounded-sm text-left">
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              <span className="font-semibold text-gold">Condizioni per l'acquisto di libri:</span> per i volumi con prezzo inferiore a € 10,00, la spedizione come piego di libri è gratis; per i volumi con prezzo da 10,00 euro in su, si applica lo sconto del 10% e la spedizione come piego di libri è gratis. Per il versamento, sarà data indicazione precisa a seguito di prenotazione.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div>
            <h3 className="text-display text-xl font-semibold text-foreground mb-6">Informazioni</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href={`mailto:${settings.contactEmail}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  {settings.contactEmail}
                </a>
              </div>
              {settings.contactEmail2 && (
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gold shrink-0" />
                  <a href={`mailto:${settings.contactEmail2}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {settings.contactEmail2}
                  </a>
                </div>
              )}
              {settings.contactPhone && (
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <a href={`tel:+39${settings.contactPhone.replace(/-/g, '')}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {settings.contactPhone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ariano+Irpino+AV+Italia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Ariano Irpino (AV), Italia
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook size={18} className="text-gold shrink-0" />
                <a
                  href="https://www.facebook.com/nicola.prebenna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href="https://www.genesi.org/project/prebenna-nicola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Profilo su Genesi Editrice
                </a>
              </div>
            </div>
            <div className="mt-8 p-6 bg-secondary/50 rounded-sm">
              <p className="text-display text-sm italic text-foreground/80 leading-relaxed">
                "Ho dispensato parole al vento, semi lanciati per aria, ho radicato parole nel cuore mio
                e su fogli di carta bianca, disseminando barlumi di speranza e propositi di nuova umanità."
              </p>
              <p className="text-xs text-muted-foreground mt-3">— Nicola Prebenna, "Il Dono del Poeta"</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Oggetto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
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
                  Devi accettare l'informativa sulla privacy per inviare il messaggio.
                </p>
              )}
            </div>

            {result && (
              <div className={`p-3 rounded-sm text-sm ${result.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                {result.message}
              </div>
            )}

            <button type="submit" disabled={sending} className="btn-editorial-filled w-full justify-center">
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Invio in corso…" : "Invia Messaggio"}
            </button>
          </form>
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default Contatti;

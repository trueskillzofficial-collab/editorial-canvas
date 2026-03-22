import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { Mail, MapPin, Phone, Send, Facebook } from "lucide-react";
import { getSiteSettings } from "@/lib/data";

const Contatti = () => {
  const settings = getSiteSettings();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Grazie per il tuo messaggio! Ti risponderemo al più presto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SectionBlock title="Contatti" subtitle="Per informazioni, collaborazioni o per scambiare idee">
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
            </div>
            <div className="mt-8 p-6 bg-secondary/50 rounded-sm">
              <p className="text-display text-sm italic text-foreground/80 leading-relaxed">
                "Ho dispensato parole al vento, semi lanciati per aria, ho radicato parole nel cuore mio
                e su fogli di carta bianca."
              </p>
              <p className="text-xs text-muted-foreground mt-3">— Nicola Prebenna, "Il Dono del Poeta"</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Nome
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium tracking-wider uppercase text-foreground block mb-2">
                Messaggio
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-editorial-filled w-full justify-center">
              <Send size={16} /> Invia Messaggio
            </button>
          </form>
        </div>
      </SectionBlock>
    </Layout>
  );
};

export default Contatti;

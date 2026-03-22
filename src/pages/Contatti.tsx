import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionBlock from "@/components/sections/SectionBlock";
import { Mail, MapPin, Send } from "lucide-react";

const Contatti = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WordPress integration: POST to /wp-json/contact-form-7/v1/contact-forms/{id}/feedback
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
                <Mail size={18} className="text-gold" />
                <span className="text-sm text-muted-foreground">info@nicolaprebenna.it</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <span className="text-sm text-muted-foreground">Ariano Irpino (AV), Italia</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-secondary/50 rounded-sm">
              <p className="text-display text-sm italic text-foreground/80 leading-relaxed">
                "La poesia non è che messaggio, comunicazione, capacità di intessere sentimenti relazionati,
                interagenti all'interno ed all'esterno del mondo dell'io."
              </p>
              <p className="text-xs text-muted-foreground mt-3">— Nicola Prebenna</p>
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

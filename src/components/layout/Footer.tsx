import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, Facebook } from "lucide-react";

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://youtube.com/@nicolaprebenna7632",
    Icon: Youtube,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DFSjjrQcZ/",
    Icon: Facebook,
  },
];

const Footer = () => (
  <footer className="bg-[#0F172A] text-white">
    <div className="container-editorial py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Author */}
        <div>
          <h3 className="text-display text-xl font-semibold mb-3 text-white">Nicola Prebenna</h3>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            Poeta · Scrittore · Critico Letterario
          </p>
          <p className="text-sm text-white/60 leading-relaxed italic">
            Nato ad Ariano Irpino nel 1947, ha dedicato la sua vita alla letteratura, 
            all'insegnamento e alla promozione della cultura italiana nel mondo, 
            portando la poesia dall'Irpinia alle grandi capitali europee.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-gold">Menu</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Biografia", path: "/biografia" },
              { label: "Opere", path: "/opere" },
              { label: "Eventi", path: "/eventi" },
              { label: "Media", path: "/media" },
              { label: "Contatti", path: "/contatti" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-white/50 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-gold">Contatti</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:nicolapreb@gmail.com" className="text-sm text-white/50 hover:text-gold transition-colors">
                nicolapreb@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:nicpreb@libero.it" className="text-sm text-white/50 hover:text-gold transition-colors">
                nicpreb@libero.it
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+393490581538" className="text-sm text-white/50 hover:text-gold transition-colors">
                349-0581538
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gold shrink-0" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ariano+Irpino+AV+Italia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-gold transition-colors"
              >
                Ariano Irpino (AV), Italia
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-16 h-px bg-gold mx-auto mt-12 mb-6" />
      <div className="text-center text-xs text-white/30 space-y-2">
        <p>© {new Date().getFullYear()} Nicola Prebenna. Tutti i diritti riservati.</p>
        <Link to="/privacy-policy" className="text-white/30 hover:text-gold transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

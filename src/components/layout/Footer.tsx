import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container-editorial py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <h3 className="text-display text-xl font-semibold mb-3 text-foreground">Nicola Prebenna</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Poeta · Scrittore · Critico Letterario
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-foreground">Navigazione</h4>
          <div className="flex flex-col gap-2">
            {["Biografia", "Opere", "Poesie", "Eventi", "Media", "Contatti"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-foreground">Contatti</h4>
          <p className="text-sm text-muted-foreground">info@nicolaprebenna.it</p>
        </div>
      </div>
      <div className="divider-gold mt-12 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nicola Prebenna. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

export default Footer;

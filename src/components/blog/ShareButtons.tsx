import { Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: Facebook,
    },
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: Twitter,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: Linkedin,
    },
    {
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      Icon: MessageCircle,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
        Condividi l'articolo
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Condividi su ${label}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copia link"
          className="inline-flex items-center gap-2 px-4 h-10 rounded-full border border-border text-sm text-muted-foreground hover:text-gold hover:border-gold transition-colors"
        >
          <LinkIcon size={16} />
          {copied ? "Link copiato" : "Copia link"}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;

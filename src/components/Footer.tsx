import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold tracking-widest text-foreground">
              ELISION <span className="text-primary">RP</span>
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              A next-generation GTA V roleplay experience.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Discord">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              YouTube
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              TikTok
            </a>
          </div>
        </div>

        <div className="gradient-divider mt-8 mb-6" />

        <p className="font-body text-xs text-muted-foreground text-center">
          © 2026 Elision RP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Gallery", href: "#gallery" },
  { label: "Builds", href: "#builds" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-xl font-bold tracking-widest text-foreground">
          ELISION <span className="text-primary">RP</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:shadow-[0_0_20px_hsl(160_100%_50%/0.4)] transition-shadow duration-300"
          >
            JOIN NOW
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/30 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider"
          >
            JOIN NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

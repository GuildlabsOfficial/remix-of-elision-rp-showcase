import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Elision RP City" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          GTA V Roleplay Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-6"
        >
          <span className="text-foreground">ELISION</span>{" "}
          <span className="text-gradient">RP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A next-generation immersive GTA V roleplay experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#join"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:shadow-[0_0_30px_hsl(160_100%_50%/0.4)] transition-all duration-300"
          >
            JOIN OUR DISCORD
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-display text-sm font-semibold tracking-wider hover:border-primary/50 hover:shadow-[0_0_20px_hsl(160_100%_50%/0.15)] transition-all duration-300"
          >
            VIEW FEATURES
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

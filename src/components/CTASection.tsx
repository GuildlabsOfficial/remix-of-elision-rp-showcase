import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[150px]" />

      <div className="container mx-auto max-w-3xl text-center relative z-10" ref={ref}>
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-wide mb-6">
            JOIN THE <span className="text-gradient">COMMUNITY</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join Elision RP today and become part of a growing roleplay community.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-display text-base font-semibold tracking-wider hover:shadow-[0_0_30px_hsl(160_100%_50%/0.4)] transition-all duration-300"
            >
              JOIN DISCORD
            </a>
            <a
              href="#"
              className="px-10 py-4 rounded-lg border border-border text-foreground font-display text-base font-semibold tracking-wider hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(270_80%_60%/0.15)] transition-all duration-300"
            >
              APPLY FOR WHITELIST
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;

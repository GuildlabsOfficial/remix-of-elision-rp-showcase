import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-wide">
            WELCOME TO ELISION RP
          </h2>
          <div className="gradient-divider mx-auto max-w-xs mb-8" />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Elision RP is a premium GTA V roleplay community focused on immersive storytelling,
            realistic economy systems, and high-quality custom content.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.35}>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Our server features custom vehicles, detailed city builds, active staff, and a welcoming
            roleplay community. Whether you're a seasoned roleplayer or just starting out, Elision RP
            offers an experience like no other.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-wide">
            WELCOME TO ELISION RP
          </h2>
          <div className="gradient-divider mx-auto max-w-xs mb-8" />
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Elision RP is a premium GTA V roleplay community focused on immersive storytelling,
            realistic economy systems, and high-quality custom content.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Our server features custom vehicles, detailed city builds, active staff, and a welcoming
            roleplay community. Whether you're a seasoned roleplayer or just starting out, Elision RP
            offers an experience like no other.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/AnimatedSection";
import SkeletonImage from "@/components/SkeletonImage";
import apartments from "@/assets/mlo-apartments.jpg";
import policeDept from "@/assets/mlo-police.jpg";
import nightclub from "@/assets/mlo-nightclub.jpg";
import garage from "@/assets/mlo-garage.jpg";

const builds = [
  { img: apartments, title: "Luxury Apartments", desc: "High-end penthouses with stunning city views and modern interiors." },
  { img: policeDept, title: "Custom Police Department", desc: "Fully detailed police headquarters with holding cells and briefing rooms." },
  { img: nightclub, title: "Nightclub Interior", desc: "Vibrant nightclub with DJ booth, VIP areas, and neon lighting." },
  { img: garage, title: "Mechanic Garage", desc: "Fully equipped mechanic shop with lifts, tools, and tuning stations." },
];

const BuildsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="builds" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Custom MLOs</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            CUSTOM BUILDS
          </h2>
          <div className="gradient-divider mx-auto max-w-xs mt-6" />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {builds.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="glass-card overflow-hidden group hover:border-neon-purple/30 hover:shadow-[0_0_20px_hsl(270_80%_60%/0.15)] transition-all duration-500"
            >
              <div className="overflow-hidden aspect-video">
                <SkeletonImage
                  src={b.img}
                  alt={b.title}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground tracking-wide mb-1">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuildsSection;

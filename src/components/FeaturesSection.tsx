import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Users, Coins, Briefcase, Home, Code } from "lucide-react";

const features = [
  { icon: Car, title: "Custom Vehicles", desc: "Hundreds of custom vehicles meticulously configured for the best driving experience." },
  { icon: Users, title: "Advanced RP Systems", desc: "Deep roleplay mechanics including injury systems, criminal enterprises, and more." },
  { icon: Coins, title: "Player Economy", desc: "A balanced, player-driven economy with realistic banking, investments, and trading." },
  { icon: Briefcase, title: "Unique Jobs & Businesses", desc: "Run your own business, join the police force, or become an underground kingpin." },
  { icon: Home, title: "Custom Interiors", desc: "Beautifully designed custom MLOs for immersive environments throughout the city." },
  { icon: Code, title: "Active Development", desc: "Constant updates, new content, and a dev team that listens to the community." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            SERVER FEATURES
          </h2>
          <div className="gradient-divider mx-auto max-w-xs mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(160_100%_50%/0.1)] transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-wide">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

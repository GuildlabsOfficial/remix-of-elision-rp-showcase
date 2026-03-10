import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import nightlife from "@/assets/screenshot-nightlife.jpg";
import police from "@/assets/screenshot-police.jpg";
import carmeet from "@/assets/screenshot-carmeet.jpg";
import business from "@/assets/screenshot-business.jpg";
import street from "@/assets/screenshot-street.jpg";
import custom from "@/assets/screenshot-custom.jpg";

const screenshots = [
  { img: nightlife, label: "City Nightlife" },
  { img: police, label: "Police Patrol" },
  { img: carmeet, label: "Car Meet" },
  { img: business, label: "Business Interior" },
  { img: street, label: "Street Roleplay" },
  { img: custom, label: "Custom Locations" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Screenshots</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            IN-GAME MOMENTS
          </h2>
          <div className="gradient-divider mx-auto max-w-xs mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl aspect-video group cursor-pointer"
            >
              <img
                src={s.img}
                alt={s.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end">
                <span className="font-display text-sm tracking-wider text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 uppercase">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

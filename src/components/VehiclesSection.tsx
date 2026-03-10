import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import vehiclePolice from "@/assets/vehicle-police.jpg";
import vehicleLuxury from "@/assets/vehicle-luxury.jpg";
import vehicleTuner from "@/assets/vehicle-tuner.jpg";
import vehicleEmergency from "@/assets/vehicle-emergency.jpg";

const vehicles = [
  { img: vehiclePolice, name: "Custom Police Interceptor", desc: "High-performance pursuit vehicles with realistic lighting and handling." },
  { img: vehicleLuxury, name: "Luxury Sports Collection", desc: "Premium supercars and exotic vehicles for the elite of Los Santos." },
  { img: vehicleTuner, name: "Tuner Cars Pack", desc: "JDM legends and street racers with full customization support." },
  { img: vehicleEmergency, name: "Emergency Vehicles Pack", desc: "Complete emergency fleet including fire trucks and ambulances." },
];

const VehiclesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vehicles" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Vehicle Addons</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-wide">
            CUSTOM VEHICLES
          </h2>
          <div className="gradient-divider mx-auto max-w-xs mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground tracking-wide mb-1">{v.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;

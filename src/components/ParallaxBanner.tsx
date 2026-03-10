import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxBannerProps {
  image: string;
  height?: string;
  overlay?: string;
  children?: React.ReactNode;
}

const ParallaxBanner = ({ image, height = "h-64 md:h-80", overlay, children }: ParallaxBannerProps) => {
  const { ref, y } = useParallax(0.4);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlay || "bg-background/60"}`} />
      {children && (
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxBanner;

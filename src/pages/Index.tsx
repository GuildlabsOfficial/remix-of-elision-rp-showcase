import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import VehiclesSection from "@/components/VehiclesSection";
import GallerySection from "@/components/GallerySection";
import BuildsSection from "@/components/BuildsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxBanner from "@/components/ParallaxBanner";
import LoadingScreen from "@/components/LoadingScreen";
import screenshotStreet from "@/assets/screenshot-street.jpg";
import screenshotNightlife from "@/assets/screenshot-nightlife.jpg";
import screenshotCustom from "@/assets/screenshot-custom.jpg";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <Navbar />
      <HeroSection />
      <div className="gradient-divider" />
      <AboutSection />
      <ParallaxBanner image={screenshotStreet} height="h-48 md:h-64">
        <p className="font-display text-2xl md:text-4xl font-bold tracking-wider text-foreground neon-text">
          YOUR STORY BEGINS HERE
        </p>
      </ParallaxBanner>
      <FeaturesSection />
      <div className="gradient-divider" />
      <VehiclesSection />
      <ParallaxBanner image={screenshotNightlife} height="h-48 md:h-64">
        <p className="font-display text-2xl md:text-4xl font-bold tracking-wider text-foreground neon-text">
          EXPLORE THE CITY
        </p>
      </ParallaxBanner>
      <GallerySection />
      <div className="gradient-divider" />
      <BuildsSection />
      <ParallaxBanner image={screenshotCustom} height="h-48 md:h-64">
        <p className="font-display text-2xl md:text-4xl font-bold tracking-wider text-foreground neon-text">
          JOIN THE COMMUNITY
        </p>
      </ParallaxBanner>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

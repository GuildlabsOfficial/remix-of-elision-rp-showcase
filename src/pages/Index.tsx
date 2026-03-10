import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import VehiclesSection from "@/components/VehiclesSection";
import GallerySection from "@/components/GallerySection";
import BuildsSection from "@/components/BuildsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="gradient-divider" />
      <AboutSection />
      <div className="gradient-divider" />
      <FeaturesSection />
      <div className="gradient-divider" />
      <VehiclesSection />
      <div className="gradient-divider" />
      <GallerySection />
      <div className="gradient-divider" />
      <BuildsSection />
      <div className="gradient-divider" />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

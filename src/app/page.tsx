import WebGLBackground from "@/components/WebGLBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BentoGrid1 from "@/components/BentoGrid1";
import BentoGrid2 from "@/components/BentoGrid2";
import LiquidTimeline from "@/components/LiquidTimeline";
import {
  FloatingGallery,
  DimensionalColumns,
} from "@/components/ClientSections";
import {
  OrbitalSection,
  MarqueeSection,
  CTASection,
  Footer,
} from "@/components/StaticSections";

export default function Home() {
  return (
    <>
      <WebGLBackground />
      <Header />
      <HeroSection />
      <main style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <BentoGrid1 />
        <BentoGrid2 />
        <OrbitalSection />
        <LiquidTimeline />
        <FloatingGallery />
        <MarqueeSection />
        <DimensionalColumns />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

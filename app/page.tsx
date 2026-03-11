import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import BeforeAfter from "@/components/ui/BeforeAfter";
import HowItWorksTabs from "@/components/sections/HowItWorksTabs";
import Scope from "@/components/sections/Scope";
import VideoSection from "@/components/sections/VideoSection";
import Differentiation from "@/components/sections/Differentiation";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorksTabs />
      <BeforeAfter />
      <Scope />
      <VideoSection />
      <Differentiation />
      <About />
      <FinalCTA />
    </>
  );
}

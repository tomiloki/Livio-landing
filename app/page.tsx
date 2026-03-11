import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import BeforeAfter from "@/components/ui/BeforeAfter";
import HowItWorksTabs from "@/components/sections/HowItWorksTabs";
import Scope from "@/components/sections/Scope";
// import VideoSection from "@/components/sections/VideoSection"; // TODO: reactivar cuando tengamos video
import Differentiation from "@/components/sections/Differentiation";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";
import LlmoText from "@/components/sections/LlmoText";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorksTabs />
      <BeforeAfter />
      <Scope />
      {/* <VideoSection /> TODO: reactivar cuando tengamos video */}
      <Differentiation />
      <About />
      <FinalCTA />
      <LlmoText />
    </>
  );
}

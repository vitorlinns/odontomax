import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Treatments from "@/components/sections/Treatments";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Treatments />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}

import { Metadata } from "next";
import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
// import Feature from "@/components/Features";
// import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/lamp";
import { Feature } from "@/components/Features";
export const metadata: Metadata = {
  title: "Legally",
  description: "A legal webapp, which is always ready to guide you with all the legal related issues.",
  keywords: "automation solutions, custom chat bots, zero latency call handling",
};
export default function Home() {
  return (
    <main>
      <LampDemo />
      {/* <Hero /> */}
      {/* <Brands /> */}
      <div className="lato"> 
      <Feature />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      <Integration />
      <CTA />
      {/* <FAQ /> */}
      <Testimonial  />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
      {/* <Blog /> */}
      </div>
    </main>
  );
}

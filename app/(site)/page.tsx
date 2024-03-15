import { Metadata } from "next";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/lamp";
import { Feature } from "@/components/Features";

export const metadata: Metadata = {
  title: "Transform Your Business with Lumiora's Automation Solutions",
  description: "Discover Lumiora's cutting-edge automation services. From custom chat bots to zero-latency call handling, elevate your productivity today.",
  keywords: "automation solutions, custom chat bots, zero latency call handling, Lumiora",
};

export default function Home() {
  return (
    <main>
      <LampDemo />

      <div className="lato"> 
        <Feature />
        <div>

        </div>
        <Integration />
        <CTA />

        <Testimonial  />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

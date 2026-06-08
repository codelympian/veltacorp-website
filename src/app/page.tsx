import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { Certifications } from "@/components/sections/Certifications";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <Gallery />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

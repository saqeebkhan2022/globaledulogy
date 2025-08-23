import AboutSection from "./components/about-section";
import Hero from "./components/hero";
import Programs from "./components/programs";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/why-choose-us";
import CounsellingSection from "./components/CounsellingSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Programs />
      <AboutSection />
      <CounsellingSection />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}

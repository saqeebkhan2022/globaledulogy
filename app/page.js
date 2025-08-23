import AboutSection from "./components/about-section";
import Hero from "./components/hero";
import Programs from "./components/programs";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/why-choose-us";
import CounsellingSection from "./components/CounsellingSection";
import PaidCounselling from "./components/PaidCounselling";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Programs />
      <AboutSection />
      <CounsellingSection />
      <Stats />
      <WhyChooseUs />
      <PaidCounselling />
      <Testimonials />
    </main>
  );
}

import AboutSection from "./components/about-section";
import Hero from "./components/hero";
import Programs from "./components/programs";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/why-choose-us";
import CounsellingSection from "./components/CounsellingSection";
import PaidCounselling from "./components/PaidCounselling";
import SocialFloat from "./components/SocialFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Programs />
      <AboutSection />
      <CounsellingSection />
      <Stats />
      <SocialFloat />
      <WhyChooseUs />
      <PaidCounselling />
      <Testimonials />
    </main>
  );
}

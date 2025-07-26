import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import ImpactSection from "./ImpactSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ImpactSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;

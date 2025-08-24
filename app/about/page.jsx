"use client";
import React from "react";
import Header from "../Medical/utils/Header";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us - EduGlobe Overseas"
        description="Learn more about EduGlobe Overseas, our mission, vision, and the team helping students achieve their dream of studying abroad."
      />

      {/* Header */}
      <Header
        title="About Us"
        subtitle="Empowering Students to Achieve Global Dreams"
      />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Who We Are */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#EA4E14]">Who We Are</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-bold text-[#003366] text-lg">
              Global Edulogy
            </span>
            , we are passionate about guiding students to pursue their higher
            education in india and abroad. With years of experience, strong
            partnerships with leading colleges and universities, and a
            student-first approach, we have become one of the most trusted names
            in national and international education consultancy.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">🎯 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide transparent, reliable, and comprehensive guidance to
              students aspiring to study in india and abroad, ensuring they make
              informed decisions that align with their career goals and personal
              ambitions.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3">🌍 Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading global education consultancy, recognized for our
              integrity, innovation, and student-centric approach, helping
              students unlock opportunities across the world.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-[#EA4E14]">
            Why Choose Global Edulogy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Guidance",
                desc: "Our experienced counselors provide personalized advice for course, college, and university selection.",
              },
              {
                icon: "🤝",
                title: "Trusted Partners",
                desc: "We work with top colleges and universities worldwide to offer students diverse and quality options.",
              },
              {
                icon: "📑",
                title: "End-to-End Support",
                desc: "From applications and visa assistance to pre-departure guidance, we’re with you every step.",
              },
              {
                icon: "🌟",
                title: "Proven Success",
                desc: "Hundreds of students have successfully started their global education journey with us.",
              },
              {
                icon: "💡",
                title: "Tailored Solutions",
                desc: "Every student is unique; our advice is customized to your strengths and aspirations.",
              },
              {
                icon: "🔒",
                title: "Transparency",
                desc: "No hidden charges, no false promises – just honest guidance for your future.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;

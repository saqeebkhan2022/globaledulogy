"use client";

import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Lottie from "lottie-react";
import studyAbroadAnimation from "../../public/lotties/StudyAbroad.json";

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-float");
    elements.forEach((el, index) => {
      el.setAttribute("style", `animation-delay: ${index * 0.3}s`);
    });
  }, []);

  return (
    <section className="relative flex items-center min-h-screen bg-gradient-to-br from-[#fff7f3] via-[#fef0ec] to-[#ffece6] overflow-hidden py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 bg-white shadow-md text-[#EA4E14] rounded-full text-sm font-semibold tracking-wide">
              ⭐ Ranked #1 Career Counsellor 2025
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Shape Your <span className="text-[#EA4E14]">Future Today</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Join thousands of graduates who advanced their careers with our
              globally recognized programs, industry mentors, and flexible
              options.
            </p>

            {/* CTA Button */}
            <a href="#contact">
              <button className="bg-[#EA4E14] hover:bg-[#d63f0f] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 mx-auto lg:mx-0 transition-all shadow-lg">
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "100%", label: "Guaranteed Admissions" },
                { value: "50+", label: "Programs" },
                { value: "25K+", label: "Graduates" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EA4E14]">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center w-full h-full">
            {/* Lottie Animation Container */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl animate-float h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
              <Lottie animationData={studyAbroadAnimation} loop autoplay />
            </div>

            {/* Floating Emojis */}
            <div className="absolute top-8 right-8 animate-float">
              <div className="bg-white p-4 sm:p-5 rounded-full shadow-md text-4xl sm:text-5xl">
                ✈️
              </div>
            </div>
            <div className="absolute bottom-25 right-6 animate-float">
              <div className="bg-white p-4 sm:p-5 rounded-full shadow-md text-4xl sm:text-5xl">
                🎓
              </div>
            </div>
            <div className="absolute bottom-24 left-3 animate-float ">
              <div className="bg-white p-4 sm:p-5 rounded-full shadow-md text-4xl sm:text-5xl">
                🩺
              </div>
            </div>

            {/* Decorative Background Blobs */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute top-1/4 left-1/4 w-36 h-36 bg-red-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-200 rounded-full opacity-30 blur-2xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

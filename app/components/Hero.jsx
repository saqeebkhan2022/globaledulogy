"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import studyAbroadAnimation from "../../public/lotties/StudyAbroad.json";

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-float");
    elements.forEach((el, index) => {
      el.setAttribute("style", `animation-delay: ${index * 0.2}s`);
    });
  }, []);

  return (
    <section className="relative flex items-center min-h-screen bg-gradient-to-br from-[#fff7f3] via-[#fef0ec] to-[#ffece6] overflow-hidden  mt-[-100px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/grid.svg')] bg-repeat"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="text-center lg:text-left w-full lg:w-1/2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center justify-center bg-[#EA4E14]/10 text-[#EA4E14] px-4 py-2 rounded-full text-sm font-medium">
              🏆 Ranked #1 Career College 2024
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shape Your
                <br />
                <span className="text-[#EA4E14]">Future Today</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join thousands of graduates who advanced their careers with our
                globally recognized programs, industry mentors, and flexible
                options.
              </p>
            </div>

            <button className="bg-[#EA4E14] text-white px-8 py-4 rounded-lg  font-semibold text-lg flex items-center group">
              Start Your Journey
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <div className="flex space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">95%</div>
                <div className="text-gray-600 text-sm">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-gray-600 text-sm">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">25k+</div>
                <div className="text-gray-600 text-sm">Graduates</div>
              </div>
            </div>
          </div>

          {/* Right Content - Lottie Animation + Floating Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Lottie Animation */}
              <div className="animate-float w-full max-w-md mx-auto">
                <Lottie
                  animationData={studyAbroadAnimation}
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Icons */}
              <div
                className="absolute top-10 right-10 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="bg-white p-3 rounded-full shadow-lg">✈️</div>
              </div>

              <div
                className="absolute top-32 left-8 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="bg-red-100 p-2 rounded-lg shadow-md">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    📍
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-20 right-16 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="bg-white p-3 rounded-full shadow-lg">🎓</div>
              </div>

              <div
                className="absolute bottom-32 left-12 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="bg-blue-100 p-2 rounded-lg shadow-md">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-100 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

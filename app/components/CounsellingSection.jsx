"use client";
import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import "animate.css";

export default function CounsellingSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const courses = ["MBBS", "BDS", "BAMS", "BHMS", "BUMS", "Veterinary"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              entry.target.dataset.animation
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={leftRef} data-animation="animate__fadeInLeft">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#EA4E14]">Get Free</span> Counselling
              <br />
              <span className="text-2xl md:text-3xl font-normal">
                For Your Dream Medical Career
              </span>
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Connect with our experts to get personalized guidance, college
              selection help, and step-by-step admission support.
            </p>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-1">
                  Call Now For Counselling
                </div>
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-[#EA4E14] mt-2">
                  <Phone className="h-6 w-6" /> +91 8448599015
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div
            ref={rightRef}
            data-animation="animate__fadeInRight"
            className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Select Course
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA4E14] focus:border-transparent">
                  <option value="">-- Select Course --</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA4E14] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA4E14] focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA4E14] focus:border-transparent"
                />
              </div>

              <button className="w-full bg-[#EA4E14] hover:bg-[#d63f0f] text-white py-3 text-lg font-semibold rounded-lg transition-colors duration-200">
                Get Free Counselling
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyCTA() {
  return (
    <a
      href="#contact-form" // <-- Replace with actual contact form ID or route
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-red-600 text-white px-5 py-3 shadow-lg hover:bg-red-700 transition-all duration-300"
    >
      <FaWhatsapp className="text-xl" />
      Book Free Counselling
    </a>
  );
}

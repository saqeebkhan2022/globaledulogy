"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { MdOutlineOpenWith } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faFacebookF, url: "https://facebook.com", color: "#3b5998" },
  { icon: faXTwitter, url: "https://twitter.com", color: "black" },
  {
    icon: faInstagram,
    url: "https://instagram.com",
    color: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
  },
  { icon: faYoutube, url: "https://youtube.com", color: "#FF0000" },
  { icon: faTelegramPlane, url: "https://t.me/YourTelegram", color: "#0088cc" },
  { icon: faLinkedinIn, url: "https://linkedin.com", color: "#0077B5" },
];

const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop: Vertical Right Bar */}
      <div className="hidden sm:flex fixed top-1/2 right-[-1] flex-col gap-3 z-50 transform -translate-y-1/2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center text-xl justify-center rounded-full text-white shadow-md hover:scale-110 transition-transform"
            style={{
              background: social.color.includes("gradient")
                ? social.color
                : undefined,
              backgroundColor: !social.color.includes("gradient")
                ? social.color
                : undefined,
            }}
          >
            <FontAwesomeIcon
              icon={social.icon}
              className={`${
                social.icon === faTelegramPlane ? "text-3xl" : "text-xl"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Mobile: Slide-up Menu */}
      <div className="sm:hidden fixed bottom-38 right-5 flex flex-col items-center z-50">
        {/* Social Buttons Container */}
        <div
          className={`flex flex-col items-center mb-3 space-y-3 transition-all duration-300 ${
            isOpen
              ? "opacity-100 max-h-80"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center  text-2xl justify-center rounded-full shadow-md text-white transform hover:scale-110 transition-transform"
              style={{
                background: social.color.includes("gradient")
                  ? social.color
                  : undefined,
                backgroundColor: !social.color.includes("gradient")
                  ? social.color
                  : undefined,
              }}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#003366] rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform relative z-50"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MdOutlineOpenWith />}
        </button>
      </div>
    </>
  );
};

export default SocialFloat;

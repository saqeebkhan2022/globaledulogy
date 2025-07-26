"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, X, Menu } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown(
      activeSubDropdown === subDropdown ? null : subDropdown
    );
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setMobileMenuOpen(false);
  };

  const medicalDropdownItems = [
    {
      title: "NEET UG",
      icon: "🎓",
      children: ["MBBS", "BDS", "BAMS", "BHMS", "BUMS", "Veterinary"],
    },
    {
      title: "NEET PG",
      icon: "🎓",
      children: ["MD", "MS", "MDS", "Diploma"],
    },
    {
      title: "NURSING",
      icon: "👩‍⚕️",
      children: ["B.Sc Nursing", "GNM", "ANM", "M.Sc Nursing"],
    },
    {
      title: "PHARMACY",
      icon: "💊",
      children: ["B.Pharm", "D.Pharm", "M.Pharm", "Pharm.D"],
    },
    {
      title: "ALLIED HEALTH",
      icon: "🏥",
      children: [
        "Physiotherapy",
        "Occupational Therapy",
        "Medical Lab Technology",
        "Radiology",
      ],
    },
  ];

  const engineeringDropdownItems = [
    {
      title: "B.Tech",
      icon: "⚙️",
      children: [
        "Computer Science",
        "Mechanical",
        "Electrical",
        "Civil",
        "Electronics",
        "Chemical",
      ],
    },
    {
      title: "M.Tech",
      icon: "🔧",
      children: [
        "Computer Science",
        "Mechanical",
        "Electrical",
        "Civil",
        "Electronics",
      ],
    },
    {
      title: "Diploma",
      icon: "📜",
      children: [
        "Mechanical",
        "Electrical",
        "Civil",
        "Computer Science",
        "Electronics",
      ],
    },
  ];

  const renderDropdown = (items, keyPrefix, hoverColor = "red") =>
    items.map((item, index) => (
      <div key={index} className="relative">
        <button
          onClick={() => toggleSubDropdown(`${keyPrefix}-${index}`)}
          className={`w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-${hoverColor}-50 hover:text-${hoverColor}-600`}
        >
          <div className="flex items-center space-x-3">
            <span>{item.icon}</span>
            <span className="font-medium">{item.title}</span>
          </div>
          <ChevronRight className="h-4 w-4" />
        </button>
        {activeSubDropdown === `${keyPrefix}-${index}` && (
          <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
            {item.children.map((child, i) => (
              <a
                key={i}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {child}
              </a>
            ))}
          </div>
        )}
      </div>
    ));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/images/logo.png" alt="Logo" className="h-14" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="active text-black font-medium hover:text-red-600"
              >
                HOME
              </a>

              {/* MEDICAL Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("medical")}
                  className="flex font-medium text-black hover:text-[#EA4E14]"
                >
                  MEDICAL
                  <ChevronDown
                    className={`mt-1 ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "medical" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "medical" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    {renderDropdown(medicalDropdownItems, "medical", "red")}
                  </div>
                )}
              </div>

              {/* ENGINEERING Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("engineering")}
                  className="flex font-medium text-black hover:text-[#EA4E14]"
                >
                  ENGINEERING
                  <ChevronDown
                    className={`mt-1 ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "engineering" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "engineering" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    {renderDropdown(
                      engineeringDropdownItems,
                      "engineering",
                      "blue"
                    )}
                  </div>
                )}
              </div>
              <a
                href="#"
                className="block text-black font-medium hover:text-red-600"
              >
                ABOUT
              </a>

              <a
                href="#"
                className="bg-[#EA4E14] text-white px-6 py-2 rounded-md hover:bg-red-700 font-medium"
              >
                Get Counselling
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black hover:text-red-600"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#"
                className="block text-black font-medium hover:text-red-600"
              >
                HOME
              </a>

              {/* Mobile Medical */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown("medical")}
                  className="flex w-full justify-between items-center text-black font-medium hover:text-red-600"
                >
                  MEDICAL
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "medical" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "medical" &&
                  medicalDropdownItems.map((item, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() =>
                          toggleSubDropdown(`mobile-medical-${idx}`)
                        }
                        className="flex justify-between w-full pl-4 text-sm text-gray-700 hover:text-red-600"
                      >
                        {item.title}
                        <ChevronRight className="h-3 w-3" />
                      </button>
                      {activeSubDropdown === `mobile-medical-${idx}` && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child, i) => (
                            <a
                              key={i}
                              href="#"
                              className="block text-sm text-gray-600 hover:text-red-600"
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {/* Mobile Engineering */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown("engineering")}
                  className="flex w-full justify-between items-center text-black font-medium hover:text-blue-600"
                >
                  ENGINEERING
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "engineering" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "engineering" &&
                  engineeringDropdownItems.map((item, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => toggleSubDropdown(`mobile-engg-${idx}`)}
                        className="flex justify-between w-full pl-4 text-sm text-gray-700 hover:text-blue-600"
                      >
                        {item.title}
                        <ChevronRight className="h-3 w-3" />
                      </button>
                      {activeSubDropdown === `mobile-engg-${idx}` && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child, i) => (
                            <a
                              key={i}
                              href="#"
                              className="block text-sm text-gray-600 hover:text-blue-600"
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <a
                href="#"
                className="block text-black font-medium hover:text-red-600"
              >
                ABOUT
              </a>

              <a
                href="#"
                className="block w-full text-center bg-[#EA4E14] text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Get Counselling
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-28"></div>

      {/* Backdrop Click Closer */}
      {(activeDropdown || activeSubDropdown) && (
        <div className="fixed inset-0 z-10" onClick={closeAllDropdowns} />
      )}
    </>
  );
}

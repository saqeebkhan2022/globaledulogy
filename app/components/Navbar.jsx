"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, X, Menu } from "lucide-react";
import Link from "next/link";
import { FaStethoscope } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      title: "UNDERGRADUATE",
      icon: "🎓",
      children: [
        { icon: <FaStethoscope />, label: "MBBS", href: "/medical/ug/mbbs" },
        { icon: <FaStethoscope />, label: "BDS", href: "/medical/ug/bds" },
        { icon: <FaStethoscope />, label: "BAMS", href: "/medical/ug/bams" },
        { icon: <FaStethoscope />, label: "BHMS", href: "/medical/ug/bhms" },
        { icon: <FaStethoscope />, label: "BUMS", href: "/medical/ug/bums" },
        {
          icon: <FaStethoscope />,
          label: "Veterinary",
          href: "/medical/ug/veterinary",
        },
      ],
    },
    {
      title: "POSTGRADUATE",
      icon: "🎓",
      children: [
        { icon: <FaStethoscope />, label: "MD", href: "/medical/pg/md" },
        { icon: <FaStethoscope />, label: "MS", href: "/medical/pg/ms" },
        { icon: <FaStethoscope />, label: "MDS", href: "/medical/pg/mds" },
        {
          icon: <FaStethoscope />,
          label: "Diploma",
          href: "/medical/pg/diploma",
        },
      ],
    },
    // {
    //   title: "NURSING",
    //   icon: "👩‍⚕️",
    //   children: [
    //     { label: "B.Sc Nursing", href: "/courses/medical/nursing/bsc" },
    //     { label: "GNM", href: "/courses/medical/nursing/gnm" },
    //     { label: "ANM", href: "/courses/medical/nursing/anm" },
    //     { label: "M.Sc Nursing", href: "/courses/medical/nursing/msc" },
    //   ],
    // },
    // {
    //   title: "PHARMACY",
    //   icon: "💊",
    //   children: [
    //     { label: "B.Pharm", href: "/courses/medical/pharmacy/bpharm" },
    //     { label: "D.Pharm", href: "/courses/medical/pharmacy/dpharm" },
    //     { label: "M.Pharm", href: "/courses/medical/pharmacy/mpharm" },
    //     { label: "Pharm.D", href: "/courses/medical/pharmacy/pharmd" },
    //   ],
    // },
    // {
    //   title: "ALLIED HEALTH",
    //   icon: "🏥",
    //   children: [
    //     {
    //       label: "Physiotherapy",
    //       href: "/courses/medical/allied-health/physiotherapy",
    //     },
    //     {
    //       label: "Occupational Therapy",
    //       href: "/courses/medical/allied-health/occupational-therapy",
    //     },
    //     {
    //       label: "Medical Lab Technology",
    //       href: "/courses/medical/allied-health/mlt",
    //     },
    //     {
    //       label: "Radiology",
    //       href: "/courses/medical/allied-health/radiology",
    //     },
    //   ],
    // },
  ];

  const engineeringDropdownItems = [
    {
      title: "B.Tech",
      icon: <FaTools />,
      children: [
        {
          icon: <FaTools />,
          label: "Computer Science",
          href: "/courses/engineering/btech/cse",
        },
        {
          icon: <FaTools />,
          label: "Mechanical",
          href: "/courses/engineering/btech/me",
        },
        {
          icon: <FaTools />,
          label: "Electrical",
          href: "/courses/engineering/btech/ee",
        },
        {
          icon: <FaTools />,
          label: "Civil",
          href: "/courses/engineering/btech/ce",
        },
        {
          icon: <FaTools />,
          label: "Electronics",
          href: "/courses/engineering/btech/ec",
        },
        {
          icon: <FaTools />,
          label: "Chemical",
          href: "/courses/engineering/btech/che",
        },
      ],
    },
    {
      title: "M.Tech",
      icon: <FaTools />,
      children: [
        {
          icon: <FaTools />,
          label: "Computer Science",
          href: "/courses/engineering/mtech/cse",
        },
        {
          icon: <FaTools />,
          label: "Mechanical",
          href: "/courses/engineering/mtech/me",
        },
        {
          icon: <FaTools />,
          label: "Electrical",
          href: "/courses/engineering/mtech/ee",
        },
        {
          icon: <FaTools />,
          label: "Civil",
          href: "/courses/engineering/mtech/ce",
        },
        {
          icon: <FaTools />,
          label: "Electronics",
          href: "/courses/engineering/mtech/ec",
        },
      ],
    },
    {
      title: "Diploma",
      icon: <FaTools />,
      children: [
        {
          icon: <FaTools />,
          label: "Mechanical",
          href: "/courses/engineering/diploma/me",
        },
        {
          icon: <FaTools />,
          label: "Electrical",
          href: "/courses/engineering/diploma/ee",
        },
        {
          icon: <FaTools />,
          label: "Civil",
          href: "/courses/engineering/diploma/ce",
        },
        {
          icon: <FaTools />,
          label: "Computer Science",
          href: "/courses/engineering/diploma/cse",
        },
        {
          icon: <FaTools />,
          label: "Electronics",
          href: "/courses/engineering/diploma/ec",
        },
      ],
    },
  ];

  const renderDropdown = (items, keyPrefix, colorClass) =>
    items.map((item, index) => (
      <div key={index} className="relative">
        <button
          onClick={() => toggleSubDropdown(`${keyPrefix}-${index}`)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700"
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
              <Link
                key={i}
                href={child.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeAllDropdowns}
              >
                {child.icon}
                {child.label}
              </Link>
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
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="h-14" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-black font-medium hover:text-red-600"
              >
                HOME
              </Link>

              {/* MEDICAL */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("medical")}
                  className="flex font-medium text-black hover:text-[#EA4E14]"
                >
                  MEDICAL
                  <ChevronDown
                    className={`ml-1 h-4 w-4 mt-1 transition-transform ${
                      activeDropdown === "medical" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "medical" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    {renderDropdown(
                      medicalDropdownItems,
                      "medical",
                      "hover:text-red-600"
                    )}
                  </div>
                )}
              </div>

              {/* ENGINEERING */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("engineering")}
                  className="flex font-medium text-black hover:text-[#EA4E14]"
                >
                  ENGINEERING
                  <ChevronDown
                    className={`ml-1 h-4 w-4 mt-1 transition-transform ${
                      activeDropdown === "engineering" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "engineering" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    {renderDropdown(
                      engineeringDropdownItems,
                      "engineering",
                      "hover:text-blue-600"
                    )}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-black font-medium hover:text-red-600"
              >
                ABOUT
              </Link>

              <Link
                href="/counselling"
                className="bg-[#EA4E14] text-white px-6 py-2 rounded-md hover:bg-red-700 font-medium"
              >
                Get Counselling
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-black"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-black font-medium hover:text-red-600"
                onClick={closeAllDropdowns}
              >
                HOME
              </Link>

              {[
                ["medical", medicalDropdownItems],
                ["engineering", engineeringDropdownItems],
              ].map(([type, items]) => (
                <div key={type} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(type)}
                    className="flex w-full justify-between items-center text-black font-medium"
                  >
                    {type.toUpperCase()}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === type ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === type &&
                    items.map((item, idx) => (
                      <div key={idx}>
                        <button
                          onClick={() => toggleSubDropdown(`${type}-${idx}`)}
                          className="flex justify-between w-full pl-4 text-sm text-gray-700"
                        >
                          {item.title}
                          <ChevronRight className="h-3 w-3" />
                        </button>
                        {activeSubDropdown === `${type}-${idx}` && (
                          <div className="pl-6 space-y-1">
                            {item.children.map((child, i) => (
                              <Link
                                key={i}
                                href={child.href}
                                onClick={closeAllDropdowns}
                                className="block text-sm text-gray-600 hover:text-red-600"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}

              <Link
                href="/about"
                className="block text-black font-medium hover:text-red-600"
                onClick={closeAllDropdowns}
              >
                ABOUT
              </Link>

              <Link
                href="/counselling"
                className="block w-full text-center bg-[#EA4E14] text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={closeAllDropdowns}
              >
                Get Counselling
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="h-28" />
      {(activeDropdown || activeSubDropdown) && (
        <div className="fixed inset-0 z-10" onClick={closeAllDropdowns} />
      )}
    </>
  );
}

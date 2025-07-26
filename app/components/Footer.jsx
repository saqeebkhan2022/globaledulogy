"use client";

import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* College Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              Empowering students with industry-relevant skills and knowledge to
              build successful careers in today's competitive market.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5 text-black hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#EA4E14]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="about"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Career Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Alumni Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#EA4E14]">
              Popular Programs
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Computer Science
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Business Administration
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Healthcare Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#EA4E14] transition-colors"
                >
                  Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#EA4E14]">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#EA4E14] mt-1 flex-shrink-0" />
                <div>
                  <p>123 Education Street</p>
                  <p>Career City, CC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#EA4E14]" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#EA4E14]" />
                <p>info@globaledulogy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 py-6 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Global Edulogy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#EA4E14] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#EA4E14] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

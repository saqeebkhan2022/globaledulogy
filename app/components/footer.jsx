import {
  Facebook,
  X,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Send, // we'll use Send for Telegram
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Global Edulogy"
                className="ml-2 h-12 w-30"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students worldwide with quality education and career
              opportunities since 2010.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white hover:text-[#EA4E14] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white hover:text-[#EA4E14] cursor-pointer transition-colors" />
              <Send className="h-5 w-5 text-white hover:text-[#EA4E14] cursor-pointer transition-colors" />{" "}
              <FontAwesomeIcon
                icon={faXTwitter}
                className="h-5 w-5 text-white hover:text-[#EA4E14] cursor-pointer transition-colors"
              />
              <Linkedin className="h-[25px] w-5 text-white hover:text-[#EA4E14] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-white hover:text-[#EA4E14] cursor-pointer transition-colors" />
              {/* Telegram */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EA4E14] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EA4E14] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EA4E14] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EA4E14] transition-colors"
                >
                  Medical
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EA4E14] transition-colors"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EA4E14] transition-colors"
                >
                  Study Abroad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-[#EA4E14] mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Near Southend Circle Metro Station,
                  <br />
                  R.V. Road, Basavanagudi,
                  <br />
                  Bangalore, Karnataka - 560004
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-[#EA4E14] mr-2" />
                <span className="text-gray-300">
                  +919380862065 , +918447374123
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-[#EA4E14] mr-2" />
                <span className="text-gray-300">info@globaledulogy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Global Edulogy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[#EA4E14] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#EA4E14] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import Image from "next/image";
// import logo from "../../public/images/logo.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [medicalOpen, setMedicalOpen] = useState(false);
//   const [engineeringOpen, setEngineeringOpen] = useState(false);
//   const [ugOpen, setUgOpen] = useState(false);
//   const [pgOpen, setPgOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Image
//               src={logo}
//               alt="Global Edulogy"
//               className="ml-2 h-12 w-30"
//               priority
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="/"
//               className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
//                 isScrolled
//                   ? "text-gray-900 hover:text-[#EA4E14]"
//                   : "text-black hover:text-[#EA4E14]"
//               }`}
//             >
//               HOME
//             </a>

//             {/* Medical */}
//             <div
//               className="relative"
//               onMouseEnter={() => setMedicalOpen(true)}
//               onMouseLeave={() => {
//                 setMedicalOpen(false);
//                 setUgOpen(false);
//                 setPgOpen(false);
//               }}
//             >
//               <button
//                 className={`px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300 ${
//                   isScrolled
//                     ? "text-gray-900 hover:text-[#EA4E14]"
//                     : "text-black hover:text-[#EA4E14]"
//                 }`}
//               >
//                 Medical
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>

//               {medicalOpen && (
//                 <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
//                   {/* UG */}
//                   <div
//                     className="relative"
//                     onMouseEnter={() => setUgOpen(true)}
//                     onMouseLeave={() => setUgOpen(false)}
//                   >
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
//                       UNDER GRADUATE
//                       <ChevronDown className="h-4 w-4" />
//                     </button>
//                     {ugOpen && (
//                       <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
//                         <div className="py-1">
//                           <a
//                             href="/Medical/UG/Mbbs"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             MBBS
//                           </a>
//                           <a
//                             href="/Medical/UG/Bds"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             BDS
//                           </a>
//                           <a
//                             href="/Medical/UG/Bams"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             BAMS
//                           </a>
//                           <a
//                             href="/Medical/UG/Bhms"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             BHMS
//                           </a>
//                           <a
//                             href="/Medical/UG/Bums"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             BUMS
//                           </a>
//                           <a
//                             href="/Medical/UG/Veterinary"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             Veterinary
//                           </a>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* PG */}
//                   <div
//                     className="relative"
//                     onMouseEnter={() => setPgOpen(true)}
//                     onMouseLeave={() => setPgOpen(false)}
//                   >
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
//                       POST GRADUATE
//                       <ChevronDown className="h-4 w-4" />
//                     </button>
//                     {pgOpen && (
//                       <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
//                         <div className="py-1">
//                           <a
//                             href="/Medical/pg/md"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             MD
//                           </a>
//                           <a
//                             href="/Medical/pg/ms"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             MS
//                           </a>
//                           <a
//                             href="/Medical/pg/mds"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             MDS
//                           </a>
//                           <a
//                             href="/Medical/pg/diploma"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                           >
//                             Diploma
//                           </a>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Engineering */}
//             <div
//               className="relative"
//               onMouseEnter={() => setEngineeringOpen(true)}
//               onMouseLeave={() => setEngineeringOpen(false)}
//             >
//               <button
//                 className={`px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300 ${
//                   isScrolled
//                     ? "text-gray-900 hover:text-[#EA4E14]"
//                     : "text-black hover:text-[#EA4E14]"
//                 }`}
//               >
//                 ENGINEERING
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>

//               {engineeringOpen && (
//                 <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                   >
//                     Computer Science
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                   >
//                     Mechanical
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                   >
//                     Electrical
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                   >
//                     Civil
//                   </a>
//                 </div>
//               )}
//             </div>

//             <a
//               href="/study-abroad"
//               className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
//                 isScrolled
//                   ? "text-gray-900 hover:text-[#EA4E14]"
//                   : "text-black hover:text-[#EA4E14]"
//               }`}
//             >
//               MBBS ABROAD
//             </a>

//             <a
//               href="/about"
//               className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
//                 isScrolled
//                   ? "text-gray-900 hover:text-[#EA4E14]"
//                   : "text-black hover:text-[#EA4E14]"
//               }`}
//             >
//               ABOUT
//             </a>
//           </div>

//           {/* CTA */}
//           <div className="hidden md:block">
//             <button className="bg-[#EA4E14] hover:bg-[#d63f0f] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
//               Get Counselling
//             </button>
//           </div>

//           {/* Mobile menu */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-gray-900 hover:text-[#EA4E14]"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a
//                 href="/"
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//               >
//                 HOME
//               </a>

//               {/* Mobile Medical */}
//               <div>
//                 <button
//                   onClick={() => setMedicalOpen(!medicalOpen)}
//                   className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                 >
//                   Medical
//                   <ChevronDown
//                     className={`h-4 w-4 transition-transform ${
//                       medicalOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {medicalOpen && (
//                   <div className="pl-4">
//                     {/* UG */}
//                     <button
//                       onClick={() => setUgOpen(!ugOpen)}
//                       className="w-full flex justify-between items-center py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                     >
//                       UNDERGRADUATE
//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform ${
//                           ugOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {ugOpen && (
//                       <div className="pl-4">
//                         <a
//                           href="/Medical/UG/Mbbs"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           MBBS
//                         </a>
//                         <a
//                           href="/Medical/UG/Bds"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           BDS
//                         </a>
//                         <a
//                           href="/Medical/UG/Bams"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           BAMS
//                         </a>
//                         <a
//                           href="/Medical/UG/Bhms"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           BHMS
//                         </a>
//                         <a
//                           href="/Medical/UG/Bums"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           BUMS
//                         </a>
//                         <a
//                           href="/Medical/UG/Veterinary"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           Veterinary
//                         </a>
//                       </div>
//                     )}

//                     {/* PG */}
//                     <button
//                       onClick={() => setPgOpen(!pgOpen)}
//                       className="w-full flex justify-between items-center py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                     >
//                       POSTGRADUATE
//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform ${
//                           pgOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {pgOpen && (
//                       <div className="pl-4">
//                         <a
//                           href="/Medical/pg/md"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           MD
//                         </a>
//                         <a
//                           href="/Medical/pg/ms"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           MS
//                         </a>
//                         <a
//                           href="/Medical/pg/mds"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           MDS
//                         </a>
//                         <a
//                           href="/Medical/pg/diploma"
//                           className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                         >
//                           Diploma
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Engineering */}
//               <div>
//                 <button
//                   onClick={() => setEngineeringOpen(!engineeringOpen)}
//                   className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//                 >
//                   ENGINEERING
//                   <ChevronDown
//                     className={`h-4 w-4 transition-transform ${
//                       engineeringOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {engineeringOpen && (
//                   <div className="pl-4">
//                     <a
//                       href="#"
//                       className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                     >
//                       Computer Science
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                     >
//                       Mechanical
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                     >
//                       Electrical
//                     </a>
//                     <a
//                       href="#"
//                       className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
//                     >
//                       Civil
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <a
//                 href="/study-abroad"
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//               >
//                 Study Abroad
//               </a>

//               <a
//                 href="/about"
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
//               >
//                 ABOUT
//               </a>

//               <div className="px-3 py-2">
//                 <button className="w-full bg-[#EA4E14] hover:bg-[#d63f0f] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
//                   Get Counselling
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [medicalOpen, setMedicalOpen] = useState(false);
  const [engineeringOpen, setEngineeringOpen] = useState(false);
  const [ugOpen, setUgOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={logo}
              alt="Global Edulogy"
              className="ml-2 h-12 w-30"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-900 hover:text-[#EA4E14]"
                  : "text-black hover:text-[#EA4E14]"
              }`}
            >
              HOME
            </a>

            {/* Medical */}
            <div
              className="relative"
              onMouseEnter={() => setMedicalOpen(true)}
              onMouseLeave={() => {
                setMedicalOpen(false);
                setUgOpen(false);
                setPgOpen(false);
              }}
            >
              <button
                className={`px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-900 hover:text-[#EA4E14]"
                    : "text-black hover:text-[#EA4E14]"
                }`}
              >
                Medical
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {medicalOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="relative py-1">
                    {/* UG */}
                    <div
                      className="relative"
                      onMouseEnter={() => setUgOpen(true)}
                      onMouseLeave={() => setUgOpen(false)}
                    >
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                        UNDER GRADUATE
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {ugOpen && (
                        <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                          <div className="py-1">
                            <a
                              href="/Medical/UG/Mbbs"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              MBBS
                            </a>
                            <a
                              href="/Medical/UG/Bds"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              BDS
                            </a>
                            <a
                              href="/Medical/UG/Bams"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              BAMS
                            </a>
                            <a
                              href="/Medical/UG/Bhms"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              BHMS
                            </a>
                            <a
                              href="/Medical/UG/Bums"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              BUMS
                            </a>
                            <a
                              href="/Medical/UG/Veterinary"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              Veterinary
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* PG */}
                    <div
                      className="relative"
                      onMouseEnter={() => setPgOpen(true)}
                      onMouseLeave={() => setPgOpen(false)}
                    >
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                        POST GRADUATE
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {pgOpen && (
                        <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                          <div className="py-1">
                            <a
                              href="/Medical/PG/Dmmch"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              DM/MCH
                            </a>
                            <a
                              href="/Medical/PG/Mdms"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              MD/MS
                            </a>
                            <a
                              href="/Medical/PG/Dnb"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              DNB
                            </a>
                            <a
                              href="/Medical/PG/NbeDiploma"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              NBE DIPLOMA
                            </a>
                            <a
                              href="/Medical/PG/Mds"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              MDS
                            </a>
                            <a
                              href="/Medical/PG/AyushPg"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                            >
                              AYUSH PG
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Engineering */}
            <div
              className="relative"
              onMouseEnter={() => setEngineeringOpen(true)}
              onMouseLeave={() => setEngineeringOpen(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-900 hover:text-[#EA4E14]"
                    : "text-black hover:text-[#EA4E14]"
                }`}
              >
                ENGINEERING
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {engineeringOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="py-1">
                    <a
                      href="/Engineering/Josaa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                    >
                      JOSAA COUNSELLING
                    </a>
                    <a
                      href="/Engineering/Csab"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                    >
                      CSAB
                    </a>
                    <a
                      href="/Engineering/Dasa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                    >
                      DASA
                    </a>
                    <a
                      href="/Engineering/JacDelhi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                    >
                      JAC DELHI
                    </a>
                    <a
                      href="/Engineering/JacChandigarh"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                    >
                      JAC CHANDIGARH
                    </a>
                    <a
                      href="/Engineering/Wbjee"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                    >
                      WBJEE
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/Mbbs-Abroad"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-900 hover:text-[#EA4E14]"
                  : "text-black hover:text-[#EA4E14]"
              }`}
            >
              MBBS ABROAD
            </a>

            <a
              href="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-900 hover:text-[#EA4E14]"
                  : "text-black hover:text-[#EA4E14]"
              }`}
            >
              ABOUT
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#EA4E14] hover:bg-[#d63f0f] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
              Get Counselling
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 hover:text-[#EA4E14] transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
              >
                HOME
              </a>

              {/* Mobile Medical */}
              <div>
                <button
                  onClick={() => setMedicalOpen(!medicalOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                >
                  Medical
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      medicalOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {medicalOpen && (
                  <div className="pl-4">
                    <button
                      onClick={() => setUgOpen(!ugOpen)}
                      className="w-full flex justify-between items-center py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      UNDERGRADUATE
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          ugOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {ugOpen && (
                      <div className="pl-4">
                        <a
                          href="/Medical/UG/Mbbs"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          MBBS
                        </a>
                        <a
                          href="/Medical/UG/Bds"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          BDS
                        </a>
                        <a
                          href="/Medical/UG/Bams"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          BAMS
                        </a>
                        <a
                          href="/Medical/UG/Bhms"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          BHMS
                        </a>
                        <a
                          href="/Medical/UG/Bums"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          BUMS
                        </a>
                        <a
                          href="/Medical/UG/Veterinary"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          Veterinary
                        </a>
                      </div>
                    )}
                    <button
                      onClick={() => setPgOpen(!pgOpen)}
                      className="w-full flex justify-between items-center py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      POSTGRADUATE
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          pgOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {pgOpen && (
                      <div className="pl-4">
                        <a
                          href="/Medical/PG/Dmmch"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          DM/MCH
                        </a>
                        <a
                          href="/Medical/PG/Mdms"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          MD/MS
                        </a>
                        <a
                          href="/Medical/PG/Dnb"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          DNB
                        </a>
                        <a
                          href="/Medical/PG/NbeDiploma"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          NBE DIPLOMA
                        </a>
                        <a
                          href="/Medical/PG/Mds"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          MDS
                        </a>
                        <a
                          href="/Medical/PG/AyushPg"
                          className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                        >
                          AYUSH PG
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Engineering */}
              <div>
                <button
                  onClick={() => setEngineeringOpen(!engineeringOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
                >
                  ENGINEERING
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      engineeringOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {engineeringOpen && (
                  <div className="pl-6">
                    <a
                      href="/Engineering/Josaa"
                      className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      JOSSA COUNSELING
                    </a>
                    <a
                      href="/Engineering/Csab"
                      className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      CSAB
                    </a>
                    <a
                      href="/Engineering/Dasa"
                      className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      DASA
                    </a>
                    <a
                      href="/Engineering/JacDelhi"
                      className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      JAC DELHI
                    </a>
                    <a
                      href="/Engineering/JacChandigarh"
                      className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      JAC CHANDIGARH
                    </a>
                    <a
                      href="/Engineering/Wbjee"
                      className="block py-2 text-sm text-gray-600 hover:text-[#EA4E14]"
                    >
                      WBJEE
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/Mbbs-Abroad"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
              >
                MBBS Abroad
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#EA4E14]"
              >
                ABOUT
              </a>

              <div className="px-3 py-2">
                <button className="w-full bg-[#EA4E14] hover:bg-[#d63f0f] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                  Get Counselling
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

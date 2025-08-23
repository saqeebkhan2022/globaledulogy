"use client";
import React from "react";
import Header from "../../../utils/Header";
import Link from "next/link";
import SEO from "../../../../components/SEO";

const Page = () => {
  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Deemed",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",

    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "TamilNadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Convert state name to URL-friendly slug
  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="NEET UG Counselling for MBBS"
        description="Step-by-step guidance for securing your MBBS admission through NEET UG Counselling in India"
        keywords={["NEET", "UG", "Counselling", "MBBS", "Admission", "India"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Andhra-Pradesh"
      />
      <Header
        title="MBBS in Andhra Pradesh - NEET UG Counselling 2025"
        subtitle="Comprehensive guide for MBBS admissions, seat matrix, and NEET UG counselling in Andhra Pradesh"
        description="Explore top medical colleges in Andhra Pradesh for MBBS. Learn about government and private colleges, seat matrix, fees, counselling, and eligibility for 2025."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar - Table of Contents */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-gray-50 shadow-sm rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <p className="text-sm text-black mb-6">
            Select your state below to check counselling details, seat matrix,
            eligibility, and registration process.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm ${
                  state === "Andhra Pradesh"
                    ? "bg-[#EA4E14] text-white"
                    : "bg-[#003366] hover:bg-[#0055aa] text-white"
                }`}
              >
                {state}
              </Link>
            ))}
          </div>
        </aside>

        <div className="md:hidden ml-[40px] flex justify-center items-center w-full">
          <div className="w-full max-w-xs items-center relative group">
            <label
              htmlFor="stateDropdown"
              className="mb-4 text-2xl ml- font-bold text-[#EA4E14] text-center block"
            >
              State Wise Counselling
            </label>
            <select
              id="stateDropdown"
              className="w-full bg-[#EA4E14] text-white text-center text-lg font-medium p-3 rounded-full shadow-lg hover:bg-[#ff5e2b] focus:outline-none focus:ring-4 focus:ring-[#FFAB91] transition-colors appearance-none pr-8 cursor-pointer"
              onChange={(e) => {
                const url = e.target.value;
                if (url) window.location.href = url;
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select your state
              </option>
              {states.map((state) => (
                <option key={state} value={getStateUrl(state)}>
                  {state}
                </option>
              ))}
            </select>
            {/* The custom chevron icon */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-8 w-8 mt-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="col-span-3 space-y-10 text-gray-800 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              MBBS Education in Andhra Pradesh
            </h2>
            <p>
              Andhra Pradesh is renowned for its strong medical education
              system, offering high-quality MBBS programs through esteemed
              government and private colleges. Students benefit from modern
              clinical training, well-equipped hospitals, research
              opportunities, and structured internships with stipends, making
              the state a top choice for medical aspirants.
            </p>
          </section>

          {/* Private Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-md divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">S.No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">
                      Establishment Year
                    </th>
                    <th className="p-3 text-left font-medium">Seat Intake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "NRI Medical College and Hospital, Guntur",
                      year: 2003,
                      seats: 200,
                    },
                    {
                      name: "Narayana Medical College, Nellore",
                      year: 2000,
                      seats: 250,
                    },
                    {
                      name: "Alluri Sitarama Raju Academy of Medical Sciences, Eluru",
                      year: 2000,
                      seats: 250,
                    },
                    {
                      name: "Dr. Pinnamaneni Siddhartha Institute of Medical Sciences and Research Foundation, Gannavaram",
                      year: 2002,
                      seats: 150,
                    },
                    {
                      name: "NRI Institute of Medical Sciences, Visakhapatnam",
                      year: 2012,
                      seats: 150,
                    },
                    {
                      name: "Apollo Institute of Medical Sciences and Research, Chittoor",
                      year: 2016,
                      seats: 150,
                    },
                    {
                      name: "GSL Medical College, Rajamahendravaram",
                      year: 2002,
                      seats: 250,
                    },
                    {
                      name: "PES Institute of Medical Sciences and Research, Kuppam",
                      year: 2001,
                      seats: 150,
                    },
                    {
                      name: "Katuri Medical College and Hospital, Guntur",
                      year: 2002,
                      seats: 150,
                    },
                    {
                      name: "Great Eastern Medical School and Hospital, Srikakulam",
                      year: 2010,
                      seats: 150,
                    },
                    {
                      name: "Konaseema Institute of Medical Sciences and Research Foundation, Amalapuram",
                      year: 2005,
                      seats: 200,
                    },
                    {
                      name: "Gayathri Vidya Parishad Institute of Health Care and Medical Technology, Visakhapatnam",
                      year: 2016,
                      seats: 200,
                    },
                    {
                      name: "Santhiram Medical College, Nandyala",
                      year: 2005,
                      seats: 150,
                    },
                    {
                      name: "Sri Balaji Institute of Medical Sciences, Tirupati",
                      year: 0,
                      seats: 150,
                    },
                    {
                      name: "Viswabharathi Medical College and General Hospital, Kurnool",
                      year: 2014,
                      seats: 250,
                    },
                    {
                      name: "Maharajah Institute of Medical Sciences, Vizianagaram",
                      year: 2002,
                      seats: 200,
                    },
                    {
                      name: "Nimra Institute of Medical Sciences, Vijayawada",
                      year: 2016,
                      seats: 150,
                    },
                    {
                      name: "Fathima Institute of Medical Sciences, Kadapa (Muslim Minority College)",
                      year: 2010,
                      seats: 100,
                    },
                  ].map((college, index) => (
                    <tr key={index} className="hover:bg-orange-50 transition">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{college.name}</td>
                      <td className="p-3">{college.year || "-"}</td>
                      <td className="p-3">{college.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-md divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">S.No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Seats</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      name: "Andhra Medical College, Visakhapatnam",
                      year: 1923,
                      seats: 250,
                    },
                    {
                      name: "Guntur Medical College, Guntur",
                      year: 1946,
                      seats: 250,
                    },
                    {
                      name: "Rangaraya Medical College, Kakinada",
                      year: 1958,
                      seats: 250,
                    },
                    {
                      name: "Siddhartha Medical College, Vijayawada",
                      year: 1980,
                      seats: 175,
                    },
                    {
                      name: "Government Medical College, Ongole",
                      year: 2011,
                      seats: 120,
                    },
                    {
                      name: "Government Medical College, Srikakulam",
                      year: 2008,
                      seats: 200,
                    },
                    {
                      name: "Government Medical College, Kadapa",
                      year: 2006,
                      seats: 175,
                    },
                    {
                      name: "Government Medical College, Anantapur",
                      year: 2000,
                      seats: 200,
                    },
                    {
                      name: "Government Medical College, Eluru",
                      year: 2023,
                      seats: 150,
                    },
                    {
                      name: "Government Medical College, Vizianagaram",
                      year: 2023,
                      seats: 150,
                    },
                    {
                      name: "Government Medical College, Rajamahendravaram",
                      year: 2023,
                      seats: 150,
                    },
                    {
                      name: "Government Medical College, Machilipatnam",
                      year: 2023,
                      seats: 150,
                    },
                    {
                      name: "Government Medical College, Paderu",
                      year: 2024,
                      seats: 50,
                    },
                    {
                      name: "Kurnool Medical College, Kurnool",
                      year: 1957,
                      seats: 250,
                    },
                    {
                      name: "ACSR Government Medical College, Nellore",
                      year: 2014,
                      seats: 175,
                    },
                    {
                      name: "Government Medical College, Nandyal",
                      year: 2023,
                      seats: 150,
                    },
                    {
                      name: "Sri Padmavathi Medical College for Women, Tirupati",
                      year: 2014,
                      seats: 175,
                    },
                    {
                      name: "Sri Venkateswara Medical College, Tirupati",
                      year: 1960,
                      seats: 240,
                    },
                  ].map((college, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{college.name}</td>
                      <td className="p-3">{college.year}</td>
                      <td className="p-3">{college.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Andhra Pradesh NEET UG Counselling 2025
            </h2>
            <p>
              The Dr. NTR University of Health Sciences (NTRUHS) oversees Andhra
              Pradesh NEET UG counselling for MBBS admissions. The process is
              fully online and based on NEET UG scores.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Key Highlights</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Conducting Authority: Dr. NTR University of Health Sciences
                (NTRUHS)
              </li>
              <li>Mode: Online Counselling</li>
              <li>Admission Basis: NEET UG Scores</li>
              <li>Rounds: Round 1, Round 2, Mop-up, Stray Vacancy</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Qualified NEET UG 2024</li>
              <li>Completed 10+2 with Physics, Chemistry, Biology & English</li>
              <li>Minimum Marks: General 50%, SC/ST/OBC 40%, PwD 45%</li>
              <li>
                Must be domiciled in Andhra Pradesh (Non-local: Management quota
                in private colleges)
              </li>
            </ul>
          </section>

          {/* Documents & Fees */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG Admit Card & Scorecard</li>
              <li>Class 10 & 12 Certificates</li>
              <li>Andhra Pradesh Domicile Certificate</li>
              <li>Caste Certificate (if applicable)</li>
              <li>Income Certificate (for EWS/OBC candidates)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Migration Certificate (if required)</li>
              <li>Medical Fitness Certificate</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Fees
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>General: ₹3,540</li>
              <li>SC/ST/OBC: ₹2,950</li>
              <li>NRI/Management Quota: ₹7,080</li>
            </ul>
          </section>

          {/* Why Choose Global Edulogy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How Global Edulogy Education Supports Students
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Expert counselling and registration guidance</li>
              <li>College selection support based on rank and budget</li>
              <li>Document verification assistance</li>
              <li>Seat allotment support to improve chances</li>
              <li>End-to-end guidance throughout the admission process</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

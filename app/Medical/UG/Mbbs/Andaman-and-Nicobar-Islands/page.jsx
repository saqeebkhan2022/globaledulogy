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

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="NEET UG Counselling for MBBS"
        description="Step-by-step guidance for securing your MBBS admission through NEET UG Counselling in India"
        keywords={["NEET", "UG", "Counselling", "MBBS", "Admission", "India"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs"
      />

      <Header
        title="NEET UG Counselling in Andaman & Nicobar Islands - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Andaman & Nicobar Islands"
        description="Complete guide for NEET UG counselling in Andaman & Nicobar Islands including eligibility, seat matrix, and registration process."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm ${
                  state === "Andaman and Nicobar Islands"
                    ? "bg-[#EA4E14] text-white"
                    : "bg-[#003366] hover:bg-[#0055aa] text-white"
                }`}
              >
                {state}
              </Link>
            ))}
          </div>
        </aside>

        <div className="md:hidden ml-[40px] flex justify-center items-center w-full ">
          <div className="w-full items-center relative group">
            <label
              htmlFor="stateDropdown"
              className="mb-4 text-2xl ml-[2px] font-bold text-[#EA4E14] text-center block"
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
        <main className="col-span-3 space-y-12 text-gray-800">
          {/* Introduction */}
          <section>
            <h1 className="text-3xl font-bold mb-4">
              MBBS Education in Andaman & Nicobar Islands
            </h1>
            <p className="leading-relaxed text-gray-700">
              Andaman & Nicobar Islands provide excellent opportunities for
              aspiring medical students. The Andaman & Nicobar Islands Institute
              of Medical Sciences (ANIIMS), Port Blair, is the main government
              medical college offering top-quality education with practical
              clinical exposure. Admission is based on NEET UG scores, and the
              MBBS course duration is approximately 5.5 years, including the
              mandatory internship.
            </p>
          </section>

          {/* Colleges Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges
            </h2>
            <p className="mb-4">
              ANIIMS, Port Blair is the only government medical college in the
              Union Territory, established in 2015 with 114 MBBS seats.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Total Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">1</td>
                    <td className="p-3">ANIIMS, Port Blair</td>
                    <td className="p-3">2015</td>
                    <td className="p-3">114</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seat Distribution */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Seat Distribution</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>State Quota Seats: 97</li>
              <li>All India Quota Seats: 17</li>
            </ul>
          </section>

          {/* Fee Structure */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">MBBS Fee Structure</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Per Semester Fee: ₹37,550</li>
              <li>One-Time Admission Fee: ₹16,550</li>
              <li>Security Deposit (Refundable): ₹25,000</li>
              <li>Total Fees: ₹79,100</li>
              <li>Service Bond: 1 Year or ₹10 Lakh Penalty</li>
            </ul>
          </section>

          {/* Counselling Steps */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              NEET UG Counselling & Admission 2025
            </h2>
            <p className="mb-4">
              The Department of Higher Education, Andaman & Nicobar
              Administration conducts NEET UG counselling online. Qualified
              candidates can participate by completing registration, uploading
              documents, and selecting preferred colleges.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Steps
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Online Registration on the official portal</li>
              <li>Document Upload and Verification</li>
              <li>Choice Filling and Locking of Colleges</li>
              <li>Seat Allotment based on NEET rank and preferences</li>
              <li>Reporting to the allotted college and fee submission</li>
              <li>Optional Upgradation for better seat allocation</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG Admit Card & Rank Card</li>
              <li>Class 10 & 12 Certificates</li>
              <li>Identity Proof (Aadhaar, Passport, etc.)</li>
              <li>Caste/Category and Domicile Certificates (if applicable)</li>
              <li>Passport-size Photographs</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Our Counselling?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Personalized guidance based on NEET rank, category, and budget
              </li>
              <li>
                Accurate choice filling based on trends and previous years
              </li>
              <li>Real-time updates for each counselling round</li>
              <li>Complete document assistance to avoid errors</li>
              <li>All-India support for admission across multiple states</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

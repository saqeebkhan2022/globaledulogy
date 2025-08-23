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

  const govtColleges = [
    [1, "Dr. B.R. Ambedkar Institute of Medical Education, Mohali", 2021, 100],
    [2, "Guru Gobind Singh Medical College and Hospital, Faridkot", 1973, 150],
    [3, "Government Medical College, Amritsar", 1943, 250],
    [4, "Government Medical College, Patiala", 1953, 250],
  ];

  const privateColleges = [
    [1, "Adesh Medical College, Bathinda", 2006, 150],
    [2, "Christian Medical College, Ludhiana", 1953, 100],
    [3, "Dayanand Medical College, Ludhiana", 1963, 100],
    [4, "Gian Sagar Medical College and Hospital, Banur", 2020, 150],
    [5, "Punjab Institute of Medical Sciences, Jalandhar", 2011, 150],
    [6, "Sri Guru Ram Das University of Health Sciences, Amritsar", 1997, 150],
    [7, "RIMT Medical College and Hospital, Gobindgarh", 2024, 50],
  ];

  const counsellingHighlights = [
    [
      "Conducting Authority",
      "Baba Farid University of Health Sciences (BFUHS)",
    ],
    ["Mode of Counselling", "Online"],
    ["Admission Criteria", "NEET UG 2025 Score"],
    ["Seat Allocation", "85% State Quota, 15% All India Quota (AIQ)"],
    ["Official Website", "www.bfuhs.ac.in"],
  ];

  const counsellingDates = [
    ["Online Registration Starts", "July – August 2025"],
    ["Choice Filling & Locking", "To be announced"],
    ["Round 1 Seat Allotment", "To be announced"],
    ["Document Verification", "To be announced"],
    ["Further Rounds", "Based on seat availability"],
  ];

  const eligibility = [
    [
      "NEET UG 2025 Qualification",
      "Must qualify NEET UG 2025 with required percentile",
    ],
    [
      "Academic Qualification",
      "Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and English",
    ],
    [
      "Age Limit",
      "Minimum 17 years as of December 31, 2025, no upper age limit",
    ],
    [
      "Domicile Requirement",
      "Candidates for state quota must meet Punjab domicile criteria",
    ],
    ["NRI Candidates", "Can apply under NRI quota in private colleges"],
  ];

  const domicileCriteria = [
    "Permanent residents of Punjab or studied in Punjab for a specified period",
    "Wards of Punjab government employees serving outside Punjab are eligible",
    "Candidates who completed Class 10 & 12 in Punjab qualify for state quota seats",
    "NRI candidates can apply for NRI quota seats with valid passport and required documents",
  ];

  const reservation = [
    ["Scheduled Caste (SC)", "25%"],
    ["Backward Classes (BC)", "10%"],
    ["Physically Handicapped (PwD)", "5%"],
    ["Sports Quota", "1%"],
    ["Wards of Defence Personnel", "1%"],
    ["Freedom Fighter Quota", "1%"],
    ["Economically Weaker Section (EWS)", "10%"],
  ];

  const registrationFees = [
    ["General/OBC", "₹5,000"],
    ["SC/ST", "₹2,500"],
    ["NRI Candidates", "As per BFUHS regulations"],
  ];

  const documentsRequired = [
    "NEET UG 2025 Admit Card & Scorecard",
    "Class 10 & 12 Mark Sheets and Passing Certificates",
    "Domicile Certificate (for state quota candidates)",
    "Category Certificate (if applicable)",
    "Character Certificate",
    "Transfer Certificate (TC)",
    "Income Certificate (for EWS candidates)",
    "Aadhar Card / Passport / Voter ID as Identity Proof",
    "Recent Passport-size Photographs",
  ];

  const counsellingProcess = [
    ["Online Registration", "Candidates register and provide details"],
    ["Document Verification", "Upload and verify documents"],
    ["Choice Filling & Locking", "Select preferred colleges and courses"],
    [
      "Seat Allotment Result",
      "Based on NEET rank, preferences, and seat availability",
    ],
    [
      "Payment of Fees & Reporting",
      "Confirm admission by submitting documents and fees",
    ],
    [
      "Subsequent Rounds",
      "Mop-Up Round and Stray Vacancy Round for unfilled seats",
    ],
  ];

  const topColleges = [
    ["Government Medical College", "Amritsar", "Government"],
    ["Guru Gobind Singh Medical College", "Faridkot", "Government"],
    ["Government Medical College", "Patiala", "Government"],
    ["Christian Medical College (CMC)", "Ludhiana", "Private"],
    ["Adesh Institute of Medical Sciences", "Bathinda", "Private"],
    ["Sri Guru Ram Das Institute of Medical Sciences", "Amritsar", "Private"],
  ];

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Punjab - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Punjab with government and private colleges, eligibility, counselling, reservation, fees, and NEET UG 2025."
        keywords={["MBBS Punjab", "NEET UG Punjab", "BFUHS Medical Colleges"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Punjab"
      />

      <Header
        title="MBBS in Punjab"
        subtitle="Top Government & Private Medical Colleges and BFUHS Counselling"
        description="Explore MBBS admission in Punjab with eligibility criteria, counselling process, reservation, and top colleges."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Click your state below to check MBBS counselling details,
            eligibility, and registration process.
          </p>
          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm ${
                  state === "Punjab"
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
        <main className="col-span-3 space-y-12 text-gray-800">
          {/* Introduction */}
          <section>
            <p className="leading-relaxed text-gray-700 mb-4">
              Punjab is an excellent choice for pursuing MBBS, with renowned
              government and private medical colleges offering top-notch
              education and clinical experience. Many hospitals provide stipends
              to interns, supporting both learning and finances.
            </p>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Punjab
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Est. Year</th>
                    <th className="p-3 text-left font-medium">Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {govtColleges.map(([sl, name, year, seats]) => (
                    <tr key={sl}>
                      <td className="p-3">{sl}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Private Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Punjab
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Est. Year</th>
                    <th className="p-3 text-left font-medium">Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {privateColleges.map(([sl, name, year, seats]) => (
                    <tr key={sl}>
                      <td className="p-3">{sl}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Highlights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Punjab NEET UG Counselling 2025 Highlights
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Particulars</th>
                    <th className="p-3 text-left font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {counsellingHighlights.map(([key, value], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{key}</td>
                      <td className="p-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Dates */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Punjab NEET UG Counselling 2025 Tentative Schedule
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">Expected Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {counsellingDates.map(([event, date], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{event}</td>
                      <td className="p-3">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {eligibility.map(([criteria, desc], idx) => (
                <li key={idx}>
                  <strong>{criteria}:</strong> {desc}
                </li>
              ))}
            </ul>
          </section>

          {/* Domicile Criteria */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Domicile Criteria</h2>
            <ul className="list-disc pl-6 space-y-1">
              {domicileCriteria.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Reservation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Reservation Criteria
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">
                      Reservation (%)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reservation.map(([cat, per], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Registration Fees */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fee (₹)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {registrationFees.map(([cat, fee], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Documents Required */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for Counselling
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {documentsRequired.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
          </section>

          {/* Counselling Process */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Step-by-Step Counselling Process
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {counsellingProcess.map(([step, desc], idx) => (
                <li key={idx}>
                  <strong>{step}:</strong> {desc}
                </li>
              ))}
            </ul>
          </section>

          {/* Top Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Top Colleges Participating in Punjab NEET UG Counselling
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Location</th>
                    <th className="p-3 text-left font-medium">Type</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topColleges.map(([name, location, type], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{location}</td>
                      <td className="p-3">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Global Edulogy Help */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How Global Edulogy Helps You Get Admission
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personalized counselling based on NEET UG scores.</li>
              <li>
                Step-by-step assistance in registration and choice filling.
              </li>
              <li>Guidance on document verification and eligibility.</li>
              <li>
                Expert advice on selecting the best colleges within your budget.
              </li>
              <li>Timely updates on counselling schedules and deadlines.</li>
              <li>
                Support with post-allotment procedures, including fee payment
                and reporting.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

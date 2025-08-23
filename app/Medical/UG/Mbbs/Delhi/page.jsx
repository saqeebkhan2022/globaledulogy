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

  const ipuColleges = [
    [
      1,
      "Vardhman Mahavir Medical College & Safdarjung Hospital, Delhi",
      2002,
      170,
    ],
    [
      2,
      "Atal Bihari Vajpayee Institute of Medical Sciences & PGIMER, Dr. RML Hospital",
      2008,
      100,
    ],
    [3, "North Delhi Municipal Corporation Medical College, Delhi", 2013, 60],
    [4, "Dr. Baba Saheb Ambedkar Medical College, Rohini", 2016, 125],
    [5, "Army College of Medical Sciences, New Delhi", 2008, 100],
  ];

  const duColleges = [
    [1, "Lady Hardinge Medical College (LHMC) for Women, New Delhi", 1916, 240],
    [2, "Maulana Azad Medical College (MAMC), New Delhi", 1958, 250],
    [
      3,
      "University College of Medical Sciences & GTB Hospital (UCMS), New Delhi",
      1971,
      170,
    ],
  ];

  return (
    <>
      <SEO
        title="MBBS in Delhi - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Delhi government, private, and deemed medical colleges with IPU NEET UG counselling details"
        keywords={[
          "MBBS Delhi",
          "NEET UG Delhi",
          "IPU Counselling",
          "MAMC",
          "LHMC",
          "UCMS",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Delhi"
      />

      <Header
        title="MBBS in Delhi"
        subtitle="Top medical colleges and NEET UG counselling guide"
        description="Explore government, private, and deemed MBBS colleges in Delhi with details on eligibility, counselling process, fees, and important dates."
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
                  state === "Delhi"
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
              Delhi offers prestigious MBBS options with top institutions like
              AIIMS, Maulana Azad Medical College (MAMC), and Lady Hardinge
              Medical College (LHMC). Admissions are based on NEET UG scores,
              and the MBBS program typically lasts 5.5 years including
              internship.
            </p>
          </section>

          {/* Government Colleges - IPU */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges Affiliated to IPU
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Total Intake</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ipuColleges.map(([slno, name, estd, intake]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{estd}</td>
                      <td className="p-3">{intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Government Colleges - Delhi University */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges Affiliated to Delhi University
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Annual Intake</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {duColleges.map(([slno, name, estd, intake]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{estd}</td>
                      <td className="p-3">{intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* IPU Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Delhi IPU NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Guru Gobind Singh Indraprastha University (IPU Delhi) conducts
              NEET UG counselling for MBBS, BDS, BAMS, BHMS, and BSc Nursing
              courses. Admission is based on NEET scores. Offline counselling is
              conducted for 85% state quota seats.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Key Details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Authority: IPU Delhi</li>
              <li>Courses: MBBS, BDS, BAMS, BHMS, BSc (Hons) Nursing</li>
              <li>
                Official Website:{" "}
                <a
                  href="https://www.ipu.ac.in"
                  className="text-blue-600 underline"
                >
                  www.ipu.ac.in
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Important Dates (Tentative)
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Activity</th>
                    <th className="p-3 text-left font-medium">Start Date</th>
                    <th className="p-3 text-left font-medium">Closing Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">
                      Online Registration & Application Submission
                    </td>
                    <td className="p-3">Feb 1, 2025</td>
                    <td className="p-3">Mar 31, 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      Application Submission for NLT-Based Courses
                    </td>
                    <td className="p-3">Feb 1, 2025</td>
                    <td className="p-3">To be notified</td>
                  </tr>
                  <tr>
                    <td className="p-3">Conduct of IPU CET 2025</td>
                    <td className="p-3">Apr 26, 2025</td>
                    <td className="p-3">May 18, 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      Registration for CUET-Qualified Candidates
                    </td>
                    <td className="p-3">To be notified</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-2">Counselling Fee</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Registration Fee: ₹1,500 (UR/OBC)</li>
              <li>Counselling Fee: ₹1,000 (UR/OBC)</li>
              <li>Payment Mode: Online (Debit/Credit/Net Banking)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Required Documents
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG Admit Card & Rank Card</li>
              <li>Class 10 & 12 Mark Sheets</li>
              <li>Identity Proof (Aadhaar/Passport)</li>
              <li>Nativity/Birth Certificate</li>
              <li>Caste/Domicile Certificate (if applicable)</li>
              <li>Passport-size Photographs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Process
            </h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                Registration on official IPU website with personal details.
              </li>
              <li>Fee Payment online.</li>
              <li>Document Verification at designated centre.</li>
              <li>Choice Filling & Seat Allotment based on NEET rank.</li>
              <li>Reporting to allotted college & fee payment.</li>
              <li>Optional Upgradation in subsequent rounds.</li>
            </ol>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

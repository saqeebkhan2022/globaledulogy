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
        title="NEET UG Counselling for MBBS in Chhattisgarh"
        description="Step-by-step guidance for MBBS admission in Chhattisgarh through NEET UG Counselling"
        keywords={[
          "NEET",
          "UG",
          "Counselling",
          "MBBS",
          "Admission",
          "Chhattisgarh",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs"
      />

      <Header
        title="NEET UG Counselling in Chhattisgarh - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Chhattisgarh"
        description="Complete guide for NEET UG counselling in Chhattisgarh including eligibility, seat matrix, and registration process."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Click your state below to check counselling details, seat matrix,
            eligibility, and registration process.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm ${
                  state === "Chhattisgarh"
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
            <h1 className="text-3xl font-bold mb-4">
              MBBS Education in Chhattisgarh
            </h1>
            <p className="leading-relaxed text-gray-700">
              Chhattisgarh offers quality medical education with advanced
              hospital training, hands-on clinical exposure, and comprehensive
              internship programs. The state is known for modern facilities and
              experienced faculty, making it a top destination for MBBS
              aspirants. Admission is based on NEET UG scores.
            </p>
          </section>

          {/* Government Medical Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Chhattisgarh
            </h2>
            <p className="mb-4">
              Chhattisgarh has 10 government medical colleges offering highly
              subsidized MBBS programs with excellent faculty and hospital
              attachments.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    [
                      1,
                      "Pt. Jawahar Lal Nehru Memorial Medical College, Raipur",
                      1963,
                      230,
                    ],
                    [
                      2,
                      "Chhattisgarh Institute of Medical Sciences, Bilaspur",
                      2001,
                      150,
                    ],
                    [
                      3,
                      "Bharat Ratna Late Shri Atal Bihari Vajpayee Memorial Government Medical College, Rajnandgaon",
                      2014,
                      125,
                    ],
                    [
                      4,
                      "Late Baliram Kashyap Smriti Government Medical College, Jagdalpur",
                      2006,
                      125,
                    ],
                    [
                      5,
                      "Late Shri Lakhiram Agrawal Memorial Government Medical College, Raigarh",
                      2013,
                      100,
                    ],
                    [6, "Government Medical College, Ambikapur", 2016, 125],
                    [
                      7,
                      "Chandulal Chandrakar Memorial Government Medical College, Durg",
                      2013,
                      200,
                    ],
                    [8, "Government Medical College, Korba", 2022, 125],
                    [9, "Government Medical College, Kanker", 2021, 125],
                    [10, "Government Medical College, Mahasamund", 2022, 125],
                  ].map(([slno, name, year, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Private Medical Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Chhattisgarh
            </h2>
            <p className="mb-4">
              Chhattisgarh has 5 private medical colleges offering MBBS courses.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    [
                      1,
                      "Shri Shankaracharya Institute of Medical Sciences, Bhilai",
                      2016,
                      150,
                    ],
                    [
                      2,
                      "Raipur Institute of Medical Sciences (RIMS), Raipur",
                      2016,
                      150,
                    ],
                    [
                      3,
                      "Shri Balaji Institute of Medical Science, Raipur",
                      2021,
                      150,
                    ],
                    [
                      4,
                      "Abhishek Mishra Memorial Medical College and Research, Bhilai",
                      2024,
                      100,
                    ],
                    [
                      5,
                      "Shri Rawatpura Sarkar Institute of Medical Science and Research, Naya Raipur",
                      2024,
                      150,
                    ],
                  ].map(([slno, name, year, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              NEET UG Counselling in Chhattisgarh
            </h2>
            <p className="mb-4">
              Chhattisgarh NEET UG counselling is managed by DME Raipur and
              allocates seats based on NEET scores and state domicile rules.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indian citizen</li>
              <li>
                Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and
                English (minimum 50%, 40% for SC/ST/OBC, 45% for PwD)
              </li>
              <li>Qualified NEET UG 2024</li>
              <li>Minimum 17 years as of Dec 31, 2024</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Domicile Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Permanent residents or domiciles of Chhattisgarh</li>
              <li>Candidates who completed 10+2 in Chhattisgarh</li>
              <li>
                Non-domicile candidates can apply for management quota seats
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Process
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Online Registration & Fee Payment</li>
              <li>Document Verification</li>
              <li>Choice Filling & Locking</li>
              <li>Seat Allotment</li>
              <li>Reporting to College</li>
              <li>Subsequent Rounds: Round 2 & Mop-Up</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Fees
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>General/OBC: ₹1,000</li>
              <li>SC/ST/PwD: ₹500</li>
              <li>Management Quota: ₹5,000</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Seat Reservation in Chhattisgarh
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>SC: 12%</li>
              <li>ST: 32%</li>
              <li>OBC: 14%</li>
              <li>EWS: 10%</li>
              <li>PwD: 5%</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2024 Admit Card & Scorecard</li>
              <li>Class 10 & 12 Mark Sheets/Certificates</li>
              <li>Domicile Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Recent Passport-size Photographs</li>
              <li>Identity Proof (Aadhar/PAN/Passport)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

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
        description="Step-by-step guidance for securing your MBBS admission through NEET UG Counselling in Assam"
        keywords={["NEET", "UG", "Counselling", "MBBS", "Admission", "Assam"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs"
      />

      <Header
        title="NEET UG Counselling in Assam - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Assam"
        description="Complete guide for NEET UG counselling in Assam including eligibility, seat matrix, and registration process."
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
                  state === "Assam"
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
            <h1 className="text-3xl font-bold mb-4">MBBS Education in Assam</h1>
            <p className="leading-relaxed text-gray-700">
              Assam is an emerging hub for medical education in Northeast India,
              offering quality MBBS programs through several reputed government
              medical colleges. These institutions provide modern
              infrastructure, experienced faculty, and diverse clinical exposure
              due to the vast patient inflow in government hospitals. Admission
              is based on NEET UG scores, and the course duration is typically
              5.5 years including an internship.
            </p>
          </section>

          {/* Colleges Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Assam
            </h2>
            <p className="mb-4">
              Assam has a total of 13 government medical colleges, offering a
              combined 1,550 MBBS seats.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">
                      Year Established
                    </th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Gauhati Medical College, Guwahati", 1960, 200],
                    ["Assam Medical College, Dibrugarh", 1947, 200],
                    ["Jorhat Medical College, Jorhat", 2010, 125],
                    ["Silchar Medical College, Silchar", 1968, 125],
                    [
                      "Fakhruddin Ali Ahmed Medical College, Barpeta",
                      2012,
                      125,
                    ],
                    ["Tezpur Medical College & Hospital, Tezpur", 2014, 125],
                    ["Diphu Medical College, Diphu", 2020, 125],
                    ["Nagaon Medical College, Nagaon", 2023, 100],
                    ["Dhubri Medical College, North Dhubri", 2022, 100],
                    ["Nalbari Medical College, Nalbari", 2023, 100],
                    ["Lakhimpur Medical College, North Lakhimpur", 2021, 100],
                    ["Kokrajhar Medical College, Kokrajhar", 2023, 100],
                    ["Tinsukia Medical College, Tinsukia", 2024, 100],
                  ].map(([name, year, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
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
              Assam NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Assam NEET UG counselling is conducted by the Directorate of
              Medical Education (DME), Assam, for admission to government MBBS
              colleges.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Tentative Dates
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Release of Application Form", "June 2025"],
                    ["Last Date for Registration", "July 2025"],
                    ["Provisional Merit List Publication", "July 2025"],
                    ["Choice Filling & Locking", "July 2025"],
                    ["Seat Allotment Round 1", "August 2025"],
                    ["Reporting to Allotted College", "August 2025"],
                    ["Round 2 Counselling", "August 2025"],
                    ["Mop-Up Round", "September 2025"],
                    ["Stray Vacancy Round", "September 2025"],
                  ].map(([event, date]) => (
                    <tr key={event} className="hover:bg-orange-50 transition">
                      <td className="p-3">{event}</td>
                      <td className="p-3">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Eligibility & Reservation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility & Reservation
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Must have passed 10+2 with PCB & English</li>
              <li>Minimum Marks: General – 50%, OBC/SC/ST – 40%, PwD – 45%</li>
              <li>Must have qualified NEET UG 2025</li>
              <li>Minimum age 17 years by 31 December 2025</li>
              <li>
                Domicile required for state quota seats; non-domicile for
                management/NRI quota
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Seat Reservation
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>SC: 7%</li>
              <li>ST (Hills): 5%</li>
              <li>ST (Plains): 10%</li>
              <li>OBC/MOBC: 15%</li>
              <li>EWS: 10%</li>
              <li>PwD: 5% (Horizontal)</li>
            </ul>
          </section>

          {/* Registration & Documents */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Registration Fees & Documents
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["General/OBC", 2000],
                    ["SC/ST/PwD", 1000],
                    ["NRI Candidates", 5000],
                  ].map(([cat, fee]) => (
                    <tr key={cat} className="hover:bg-orange-50 transition">
                      <td className="p-3">{cat}</td>
                      <td className="p-3">₹{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2025 Admit Card & Scorecard</li>
              <li>Class 10 & 12 Mark Sheets</li>
              <li>Domicile Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Passport Size Photographs</li>
              <li>Valid ID Proof (Aadhar, Passport, etc.)</li>
              <li>Allotment Letter (post seat allotment)</li>
              <li>Migration Certificate (if applicable)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

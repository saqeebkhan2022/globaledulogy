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
        title="NEET UG Counselling for MBBS in Dadra and Nagar Haveli"
        description="Complete guide for MBBS admission in Dadra and Nagar Haveli through NEET UG Counselling"
        keywords={[
          "NEET",
          "UG",
          "Counselling",
          "MBBS",
          "Admission",
          "Dadra and Nagar Haveli",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Dadra-and-Nagar-Haveli"
      />

      <Header
        title="NEET UG Counselling in Dadra and Nagar Haveli - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Dadra and Nagar Haveli"
        description="Complete guide for NEET UG counselling in Dadra and Nagar Haveli including eligibility, seat matrix, and registration process."
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
                  state === "Dadra and Nagar Haveli"
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
              MBBS Education in Dadra and Nagar Haveli
            </h1>
            <p className="leading-relaxed text-gray-700">
              Dadra and Nagar Haveli provides MBBS education at Shree Harikishan
              Medical College and NAMO Medical Education & Research Institute,
              combining theoretical knowledge with practical hospital exposure.
              Admission is based on NEET UG scores, and the program lasts 5.5
              years including internship. Dedicated faculty and modern
              facilities make it a strong choice for MBBS aspirants.
            </p>
          </section>

          {/* Government Medical Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Dadra and Nagar Haveli
            </h2>
            <p className="mb-4">
              The UT has one government medical college offering MBBS courses.
              There are no private medical colleges.
            </p>

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
                  {[
                    [
                      1,
                      "NAMO Medical Education & Research Institute (Shri Vinoba Bhave Institute of Medical Sciences), Silvassa",
                      2019,
                      177,
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
              NEET UG Counselling in Dadra and Nagar Haveli
            </h2>
            <p className="mb-4">
              Conducted by the Directorate of Medical & Health Services (DMHS),
              counselling allocates MBBS seats in the union territory based on
              NEET UG 2025 scores.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Highlights
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Exam Name: NEET UG 2025</li>
              <li>Authority: DMHS, Dadra and Nagar Haveli</li>
              <li>Mode: Online/Offline (as per official guidelines)</li>
              <li>Courses Offered: MBBS</li>
              <li>Total Seats: 177</li>
              <li>Basis of Admission: NEET UG 2025 Score</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Tentative Counselling Dates 2025
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Tentative Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["NEET UG 2025 Exam", "May 2025"],
                    ["Result Declaration", "June 2025"],
                    ["Counselling Registration (Round 1)", "July 2025"],
                    ["Choice Filling & Locking", "July 2025"],
                    ["Round 1 Seat Allotment Result", "August 2025"],
                    ["Reporting to Allotted Colleges (Round 1)", "August 2025"],
                    ["Round 2 Registration", "August 2025"],
                    ["Round 2 Seat Allotment Result", "September 2025"],
                    ["Mop-Up Round Registration", "September 2025"],
                    ["Mop-Up Round Seat Allotment", "October 2025"],
                    ["Stray Vacancy Round (if applicable)", "October 2025"],
                  ].map(([event, date], index) => (
                    <tr key={index} className="hover:bg-orange-50 transition">
                      <td className="p-3">{event}</td>
                      <td className="p-3">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Nationality: Indian Nationals, NRIs, OCIs, PIOs, and Foreign
                Nationals eligible
              </li>
              <li>
                Domicile: Preference to permanent residents for state quota
                seats
              </li>
              <li>
                Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and
                English
              </li>
              <li>
                Minimum Marks: General 50%, SC/ST/OBC 40%, PWD (General) 45%
              </li>
              <li>Qualified NEET UG 2025 with required cutoff</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Reservation of Seats
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scheduled Tribe (ST): As per UT norms</li>
              <li>Scheduled Caste (SC): As per UT norms</li>
              <li>OBC: As per UT norms</li>
              <li>EWS: As per UT norms</li>
              <li>Persons with Disabilities (PwD): 5%</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Process
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Registration & Fee Payment</li>
              <li>Choice Filling & Locking</li>
              <li>Seat Allotment</li>
              <li>Reporting to College</li>
              <li>Further Rounds: Round 2, Mop-Up, Stray Vacancy</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4 mb-2">Application Fee</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>General/OBC: ₹2,000 + Transaction Charges</li>
              <li>SC/ST/EWS: ₹1,600 + Transaction Charges</li>
              <li>Mode of Payment: Debit/Credit Card or Net Banking</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2025 Admit Card & Scorecard/Rank Letter</li>
              <li>Class 10 Marksheet & Certificate</li>
              <li>Class 12 Marksheet & Certificate</li>
              <li>Domicile Certificate of Dadra and Nagar Haveli</li>
              <li>Category Certificate (if applicable)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Recent Passport-size Photographs</li>
              <li>Valid Photo ID Proof (Aadhaar/Voter ID/Passport)</li>
              <li>Allotment Letter (after seat allotment)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

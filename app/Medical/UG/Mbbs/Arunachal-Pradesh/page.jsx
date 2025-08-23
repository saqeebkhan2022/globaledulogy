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
        title="NEET UG Counselling in Arunachal Pradesh - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Arunachal Pradesh"
        description="Complete guide for NEET UG counselling in Arunachal Pradesh including eligibility, seat matrix, and registration process."
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
                  state === "Arunachal Pradesh"
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
              MBBS Education in Arunachal Pradesh
            </h1>
            <p className="leading-relaxed text-gray-700">
              Arunachal Pradesh provides excellent opportunities for students
              aspiring to pursue an MBBS degree, with institutions like the Tomo
              Riba Institute of Health & Medical Sciences (TRIHMS) in
              Naharlagun. The college offers a comprehensive medical education,
              combining theoretical studies with extensive practical exposure.
              Admission is based on NEET UG scores, and the MBBS course duration
              is typically 5.5 years, including an internship.
            </p>
          </section>

          {/* Colleges Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges
            </h2>
            <p className="mb-4">
              TRIHMS, Naharlagun is the only government medical college in
              Arunachal Pradesh, established in 2018 with 50 MBBS seats.
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
                    <td className="p-3">
                      Tomo Riba Institute of Health & Medical Sciences,
                      Naharlagun
                    </td>
                    <td className="p-3">2018</td>
                    <td className="p-3">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Arunachal Pradesh NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Counselling is conducted by the Directorate of Higher and
              Technical Education (DHTE), Arunachal Pradesh, based on NEET UG
              scores.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">
                      Online Registration (via apdhte.nic.in)
                    </td>
                    <td className="p-3">24 July 2025 – 30 July 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">
                      Document Upload & Response to Queries
                    </td>
                    <td className="p-3">25 July 2025 – 31 July 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">
                      Publication of Eligible Candidate List
                    </td>
                    <td className="p-3">1 August 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">Choice Filling and Locking</td>
                    <td className="p-3">1 – 7 August 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">First Round Seat Allotment</td>
                    <td className="p-3">8 August 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">Reporting (1st Round)</td>
                    <td className="p-3">11 – 14 August 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">Second Round Seat Allotment</td>
                    <td className="p-3">29 August 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">Reporting (2nd Round)</td>
                    <td className="p-3">1 – 5 September 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">Withdrawal of Seat (if any)</td>
                    <td className="p-3">6 – 10 October 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">
                      Spot Round Online Registration (Tentative)
                    </td>
                    <td className="p-3">10 – 14 September 2025</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">Spot Round (if conducted)</td>
                    <td className="p-3">16 September 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Reservation & Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility & Reservation
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Must have qualified NEET UG 2025</li>
              <li>Applicants must be Indian citizens</li>
              <li>Passed 10+2 with PCB & English</li>
              <li>Minimum 50% marks in PCB (40% SC/ST/OBC, 45% PwD)</li>
              <li>Domicile requirements as per Arunachal Pradesh norms</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Seat Reservation
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scheduled Tribe (ST): 80%</li>
              <li>Scheduled Caste (SC): 5%</li>
              <li>Other Backward Classes (OBC): 10%</li>
              <li>Persons with Disabilities (PwD): 5% (Horizontal)</li>
            </ul>
          </section>

          {/* Documents & Fee */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Application Fee & Documents
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fee (Rs.)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">UR/OBC</td>
                    <td className="p-3">₹1000</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">SC/ST</td>
                    <td className="p-3">₹800</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition">
                    <td className="p-3">PwD</td>
                    <td className="p-3">₹800</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2025 Admit Card & Rank Card</li>
              <li>Class 10 & 12 Certificates</li>
              <li>Domicile Certificate</li>
              <li>Caste/Category Certificate (if applicable)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Passport-size Photographs</li>
              <li>Identity Proof (Aadhar, Passport, etc.)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

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

  const goaColleges = [[1, "Goa Medical College, Panaji", 1963, 200]];

  return (
    <>
      <SEO
        title="MBBS in Goa - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Goa government medical college with NEET UG counselling details"
        keywords={["MBBS Goa", "NEET UG Goa", "GMC Goa", "Goa Medical College"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Goa"
      />

      <Header
        title="MBBS in Goa"
        subtitle="Overview of Government Medical College & NEET UG Counselling"
        description="Explore MBBS admission in Goa Medical College, Panaji, with details on eligibility, counselling process, fees, and important dates."
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
                  state === "Goa"
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
              Goa offers a quality option for MBBS aspirants with one government
              medical college, Goa Medical College (GMC), Panaji. Established in
              1963, it is the oldest medical college in Goa and offers a total
              of 200 MBBS seats.
            </p>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Goa
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
                  {goaColleges.map(([slno, name, estd, intake]) => (
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

          {/* NEET UG Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Goa NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              The Directorate of Technical Education (DTE), Goa, will conduct
              counselling for MBBS admission at Goa Medical College based on
              NEET UG 2025 scores.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Highlights</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Authority: Directorate of Technical Education (DTE), Goa</li>
              <li>Exam: NEET UG 2025</li>
              <li>Courses Offered: MBBS</li>
              <li>Number of Seats: 180</li>
              <li>Counselling Mode: Online/Offline</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Dates (Tentative)
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Date (Tentative)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Release of Application Form</td>
                    <td className="p-3">24 July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Last Date to Apply</td>
                    <td className="p-3">30 July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Merit List Announcement</td>
                    <td className="p-3">July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Round 1 Counselling</td>
                    <td className="p-3">1 August 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Round 2 Counselling</td>
                    <td className="p-3">September 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Mop-Up Round</td>
                    <td className="p-3">NA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET Qualification: Must have qualified NEET UG 2025</li>
              <li>Minimum Age: 17 years as of Dec 31, 2025</li>
              <li>
                Educational Qualification: Passed 10+2 with PCB and English
              </li>
              <li>
                Minimum Marks: General - 50%, OBC/SC/ST - 40%, PWD (General) -
                45%
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Reservation of Seats
            </h3>
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
                  <tr>
                    <td className="p-3">Scheduled Castes (SC)</td>
                    <td className="p-3">2%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Scheduled Tribes (ST)</td>
                    <td className="p-3">12%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Other Backward Classes (OBC)</td>
                    <td className="p-3">27%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Persons with Disabilities (PWD)</td>
                    <td className="p-3">5%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Economically Weaker Sections (EWS)</td>
                    <td className="p-3">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Process
            </h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Online Registration via official DTE Goa portal</li>
              <li>Document Verification for shortlisted candidates</li>
              <li>Choice Filling and Locking</li>
              <li>Seat Allotment based on NEET scores and reservation</li>
              <li>Reporting to Allotted College with required documents</li>
              <li>
                Subsequent Rounds: Round 2 & Mop-Up rounds if seats remain
              </li>
            </ol>

            {/* Application Fee */}
            <h3 className="text-xl font-semibold mt-4 mb-2">Application Fee</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">UR / OBC</td>
                    <td className="p-3">1,000 - 3,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC / ST / PwD</td>
                    <td className="p-3">500 - 1,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2025 Admit Card & Scorecard</li>
              <li>Class 10th & 12th Mark Sheets and Certificates</li>
              <li>Domicile Certificate of Goa</li>
              <li>Category Certificate (if applicable)</li>
              <li>Passport-size Photographs</li>
              <li>Valid Photo ID Proof</li>
              <li>Migration Certificate (if applicable)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

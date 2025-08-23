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
    [1, "SCB Medical College, Cuttack", 1944, 250],
    [2, "MKCG Medical College & Hospital, Berhampur", 1962, 250],
    [
      3,
      "Veer Surendra Sai Institute of Medical Sciences and Research, Burla",
      1959,
      200,
    ],
    [4, "Sri Jagannath Medical College & Hospital, Puri", 2021, 100],
    [5, "Fakir Mohan Medical College & Hospital, Balasore", 2018, 100],
    [
      6,
      "Pandit Raghunath Murmu Medical College & Hospital, Baripada",
      2017,
      125,
    ],
    [7, "Bhima Bhoi Medical College and Hospital, Balangir", 2018, 100],
    [8, "Saheed Laxman Nayak Medical College & Hospital, Koraput", 2017, 125],
    [
      9,
      "Maharaja Jajati Keshari Medical College and Hospital, Jajpur",
      2024,
      50,
    ],
    [10, "Government Medical College & Hospital, Sundargarh", 2022, 100],
    [
      11,
      "Saheed Rendo Majhi Medical College & Hospital, Bhawanipatna, Kalahandi",
      2023,
      100,
    ],
    [12, "Dharanidhar Medical College and Hospital, Keonjhar", 2022, 100],
  ];

  const privateColleges = [
    [1, "Hi-Tech Medical College & Hospital, Bhubaneswar", 2005, 150],
    [2, "Hi-Tech Medical College & Hospital, Rourkela", 2012, 100],
    [
      3,
      "DRIEMS Institute of Health Sciences and Hospital, Kairapari",
      2023,
      100,
    ],
  ];

  const counsellingHighlights = [
    ["Conducting Authority", "Odisha Joint Entrance Examination (OJEE) Cell"],
    ["Exam Name", "NEET UG"],
    ["Courses Offered", "MBBS, BDS"],
    ["Admission Basis", "NEET UG Score"],
    ["Counselling Mode", "Online"],
    ["Official Website", "OJEE"],
  ];

  const counsellingDates = [
    ["Online Registration Starts", "July 2025"],
    ["Last Date for Registration", "July 2025"],
    ["Provisional Merit List Release", "August 2025"],
    ["Round 1 Choice Filling & Locking", "August 2025"],
    ["Round 1 Seat Allotment Result", "August 2025"],
    ["Reporting to Allotted College", "August 2025"],
    ["Round 2 Registration", "September 2025"],
    ["Round 2 Seat Allotment", "September 2025"],
    ["Mop-Up Round Registration", "October 2025"],
    ["Mop-Up Round Seat Allotment", "October 2025"],
  ];

  const eligibility = [
    ["Nationality", "The candidate must be an Indian citizen."],
    [
      "Educational Qualification",
      "Class 12 with Physics, Chemistry, Biology/Biotechnology, and English. Minimum 50% marks (40% for SC/ST/OBC, 45% for PwD).",
    ],
    ["NEET UG Score", "Must have qualified NEET UG 2025."],
    [
      "Age Limit",
      "Minimum 17 years as of December 31, 2025. No upper age limit.",
    ],
    [
      "Domicile",
      "Permanent residents or domiciles of Odisha. Non-domicile candidates can apply for management quota seats.",
    ],
  ];

  const registrationFees = [
    ["General/OBC", 1000],
    ["SC/ST/PwD", 500],
    ["Management Quota", 5000],
  ];

  const reservation = [
    ["Scheduled Caste (SC)", "8%"],
    ["Scheduled Tribe (ST)", "12%"],
    ["Other Backward Classes (OBC)", "27%"],
    ["Economically Weaker Section (EWS)", "10%"],
    ["Persons with Disabilities (PwD)", "5%"],
  ];

  const documentsRequired = [
    "NEET UG 2025 Admit Card",
    "NEET UG 2025 Scorecard",
    "Class 10th Marksheet & Certificate",
    "Class 12th Marksheet & Certificate",
    "Domicile Certificate of Odisha (if applicable)",
    "Caste Certificate (if applicable)",
    "PwD Certificate (if applicable)",
    "Recent Passport-size Photographs",
    "Identity Proof (Aadhar Card/PAN Card/Passport)",
  ];

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Odisha - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Odisha with government and private colleges, eligibility, domicile, fees, reservation, and NEET UG counselling."
        keywords={["MBBS Odisha", "NEET UG Odisha", "Odisha Medical Colleges"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Odisha"
      />

      <Header
        title="MBBS in Odisha"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Odisha with eligibility criteria, counselling process, reservation, and top colleges."
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
                  state === "Odisha"
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
              Odisha has a mix of reputed government and private medical
              colleges that provide high-quality medical education and hands-on
              clinical exposure. Many hospitals in the state offer stipends for
              medical interns, making it a cost-effective and rewarding choice
              for MBBS aspirants.
            </p>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Odisha
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Est. Year</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {govtColleges.map(([sno, name, year, seats]) => (
                    <tr key={sno}>
                      <td className="p-3">{sno}</td>
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
              Private Medical Colleges in Odisha
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Est. Year</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {privateColleges.map(([sno, name, year, seats]) => (
                    <tr key={sno}>
                      <td className="p-3">{sno}</td>
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
              Odisha NEET UG Counselling 2025 Highlights
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
              Odisha NEET UG Counselling Dates 2025 (Tentative)
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Dates (Tentative)
                    </th>
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

          {/* Registration Fees */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">
                      Registration Fee (INR)
                    </th>
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

          {/* Required Documents */}
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

          {/* How Global Edulogy Helps */}
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

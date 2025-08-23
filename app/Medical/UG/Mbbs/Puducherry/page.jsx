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
    [1, "Indira Gandhi Medical College & Research Institute", 2010, 180],
  ];

  const privateCollegesNonMinority = [
    [1, "Sri Manakula Vinayagar Medical College & Hospital", 2006, 250],
  ];

  const privateCollegesMinority = [
    [
      1,
      "Pondicherry Institute of Medical Sciences & Research (Christian Minority)",
      2000,
      150,
    ],
    [
      2,
      "Sri Venkateshwara Medical College, Hospital & Research Centre (Telugu Minority)",
      2007,
      250,
    ],
  ];

  const counsellingHighlights = [
    ["Courses Offered", "MBBS"],
    ["Admission Basis", "NEET-UG 2025 scores"],
    ["Counselling Authority", "CENTAC Puducherry"],
    ["Mode of Application", "Online through CENTAC Website"],
    ["Counselling Rounds", "Multiple rounds including Stray Vacancy Round"],
  ];

  const counsellingDates = [
    ["Online Application Start", "June 2025"],
    ["Last Date for Application Submission", "July 2025"],
    ["Draft Merit List Release", "August 2025"],
    ["Final Merit List Release", "August 2025"],
    ["Round 1 Counselling", "September 2025"],
    ["Round 2 Counselling", "October 2025"],
    ["Round 3 Counselling", "November 2025"],
    ["Stray Vacancy Round", "December 2025"],
  ];

  const eligibility = [
    [
      "Qualification",
      "Must have passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and English.",
    ],
    ["Minimum Marks", "General: 50%, OBC/SC/ST: 40%, PwD: 45%"],
    ["NEET-UG 2025 Qualification", "Mandatory."],
    ["Age Limit", "Minimum 17 years as on December 31, 2025."],
  ];

  const verticalReservation = [
    ["General", "50%"],
    ["OBC", "11%"],
    ["MBC", "18%"],
    ["SC", "16%"],
    ["ST", "0.5%"],
    ["BCM", "2%"],
    ["EBC", "2%"],
    ["BT", "0.5%"],
  ];

  const horizontalReservation = [
    ["Government School Students", "10%"],
    ["Freedom Fighter Quota", "4%"],
    ["Persons with Disabilities", "5%"],
    ["Wards of Ex-Servicemen", "1%"],
    ["Meritorious Sports Persons", "1%"],
  ];

  const counsellingRounds = [
    [
      "Round 1",
      "All eligible NEET-UG 2025 qualified candidates can participate. Free exit allowed if not satisfied with the allotted seat.",
    ],
    [
      "Round 2",
      "Candidates not allotted in Round 1 or seeking an upgrade. Fresh choice filling required.",
    ],
    [
      "Round 3",
      "For candidates not allotted in previous rounds. No free exit allowed.",
    ],
    [
      "Stray Vacancy Round",
      "For unfilled seats after Round 3. No free exit; allotted seat must be joined.",
    ],
  ];

  const applicationFees = [
    ["Government Quota - SC/ST/PwD", "₹500"],
    ["Government Quota - Others", "₹1,000"],
    ["Management Quota (All India)", "₹2,000"],
    ["NRI/OCI/FN Quota", "₹5,000"],
  ];

  const documentsRequired = [
    "NEET-UG 2025 Scorecard",
    "10th and 12th Mark Sheets and Passing Certificates",
    "Birth Certificate",
    "Transfer Certificate",
    "Migration Certificate (if applicable)",
    "Caste/Community Certificate (if applicable)",
    "Domicile Certificate (for Puducherry residents)",
    "Recent Passport Size Photographs",
    "Identity Proof (Aadhaar Card/Passport/PAN Card)",
    "Medical Fitness Certificate",
  ];

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Pondicherry - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Pondicherry with government and private colleges, eligibility, counselling, reservation, fees, and NEET UG 2025."
        keywords={[
          "MBBS Pondicherry",
          "NEET UG Pondicherry",
          "Puducherry Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Pondicherry"
      />

      <Header
        title="MBBS in Pondicherry"
        subtitle="Top Government & Private Medical Colleges and CENTAC Counselling"
        description="Explore MBBS admission in Pondicherry with eligibility criteria, counselling process, reservation, and top colleges."
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
                  state === "Puducherry"
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
              Pondicherry offers some of the finest options for pursuing MBBS in
              India, with prestigious institutions like Jawaharlal Institute of
              Postgraduate Medical Education & Research (JIPMER). Admissions are
              primarily based on the NEET UG exam. The MBBS program typically
              lasts 5.5 years, including a year of internship.
            </p>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Pondicherry
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
              Private Medical Colleges in Pondicherry
            </h2>

            <h3 className="text-xl font-medium mb-2">Non-Minority</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
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
                  {privateCollegesNonMinority.map(
                    ([sno, name, year, seats]) => (
                      <tr key={sno}>
                        <td className="p-3">{sno}</td>
                        <td className="p-3">{name}</td>
                        <td className="p-3">{year}</td>
                        <td className="p-3">{seats}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium mb-2">Minority</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
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
                  {privateCollegesMinority.map(([sno, name, year, seats]) => (
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
              CENTAC Puducherry NEET UG 2025 Counselling Highlights
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
              CENTAC Puducherry Counselling Dates 2025 (Tentative)
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

          {/* Vertical Reservation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Vertical Reservation
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Percentage</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {verticalReservation.map(([cat, per], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Horizontal Reservation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Horizontal Reservation
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Percentage</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {horizontalReservation.map(([cat, per], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Rounds */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Counselling Process Rounds
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {counsellingRounds.map(([round, desc], idx) => (
                <li key={idx}>
                  <strong>{round}:</strong> {desc}
                </li>
              ))}
            </ul>
          </section>

          {/* Application Fees */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Application Fees</h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Quota</th>
                    <th className="p-3 text-left font-medium">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applicationFees.map(([quota, fee], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{quota}</td>
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
              Documents Required for MBBS Admission
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

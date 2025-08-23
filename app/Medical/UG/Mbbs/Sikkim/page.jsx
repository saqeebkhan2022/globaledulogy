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

  const medicalColleges = [
    [
      1,
      "Sikkim Manipal Institute of Medical Sciences, Gangtok",
      "Private",
      2000,
      150,
    ],
  ];

  const counsellingHighlights = [
    ["Conducting Authority", "Directorate of Technical Education, Sikkim"],
    ["Counselling Mode", "Online"],
    ["Courses Covered", "MBBS, BDS"],
    ["Exam Accepted", "NEET UG"],
    ["Official Website", "Sikkim DTE Official Website"],
  ];

  const counsellingDates = [
    ["Release of Application Form", "June 2025"],
    ["Last Date for Registration", "July 2025"],
    ["Provisional Merit List Publication", "July 2025"],
    ["Choice Filling & Locking", "July 2025"],
    ["Seat Allotment Round 1", "August 2025"],
    ["Reporting to Allotted College", "August 2025"],
    ["Round 2 Counselling", "August 2025"],
    ["Mop-Up Round", "September 2025"],
    ["Stray Vacancy Round", "September 2025"],
  ];

  const eligibility = [
    [
      "Qualification",
      "Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and English",
    ],
    ["Minimum Marks", "General – 50%, OBC/SC/ST – 40%, PwD – 45%"],
    ["NEET UG Qualification", "Must have qualified NEET UG 2025"],
    ["Age Limit", "Minimum 17 years by December 31, 2025"],
  ];

  const domicileCriteria = [
    "Candidates must be domiciled in Sikkim for state quota seats",
    "Non-domicile candidates can apply for management/NRI quota seats",
  ];

  const registrationFees = [
    ["General/OBC", "₹2,000"],
    ["SC/ST/PwD", "₹1,000"],
    ["NRI Candidates", "₹5,000"],
  ];

  const reservation = [
    ["SC", "15%"],
    ["ST", "13%"],
    ["OBC", "21%"],
    ["EWS", "10%"],
    ["PwD", "5%"],
  ];

  const documentsRequired = [
    "NEET UG 2025 Admit Card",
    "NEET UG 2025 Scorecard",
    "Class 10 & 12 Mark Sheets",
    "Domicile Certificate (if applicable)",
    "Caste Certificate (if applicable)",
    "PwD Certificate (if applicable)",
    "Passport Size Photographs",
    "Valid ID Proof (Aadhar, Passport, etc.)",
    "Allotment Letter (post seat allotment)",
    "Migration Certificate (if applicable)",
  ];

  const counsellingProcess = [
    ["Registration & Fee Payment", "Complete online registration and pay fees"],
    ["Merit List Release", "Check your rank and eligibility"],
    [
      "Choice Filling & Locking",
      "Fill and lock preferred colleges and courses",
    ],
    ["Seat Allotment Result", "Seats allotted based on merit and preferences"],
    [
      "Document Verification & Reporting",
      "Submit documents at allotted college",
    ],
    [
      "Stray Vacancy Round",
      "If seats remain vacant, participate in this round",
    ],
  ];

  const globalEdulogySupport = [
    "Expert Counselling: Tailored advice based on your NEET score and preferences",
    "Form Filling Assistance: Help with accurate registration and document uploads",
    "Strategic Choice Filling: Guidance on selecting the best-fit colleges",
    "Timely Notifications: Regular updates on deadlines, results, and counselling schedules",
    "Complete Admission Support: From document verification to college reporting",
    "Post-Admission Services: Assistance with scholarships, hostel arrangements, and academic planning",
  ];

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  const renderTable = (data, headers) => (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#003366] text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 text-left font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) => (
                <td key={i} className="p-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <SEO
        title="MBBS in Sikkim - NEET UG Admission & Top College"
        description="Complete guide for MBBS admission in Sikkim with eligibility, counselling, reservation, fees, and top medical college."
        keywords={["MBBS Sikkim", "NEET UG Sikkim", "Sikkim Medical Colleges"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Sikkim"
      />

      <Header
        title="MBBS in Sikkim"
        subtitle="Top Medical College and NEET UG Counselling"
        description="Explore MBBS admission in Sikkim with eligibility criteria, counselling process, reservation, and top college."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
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
                className={`block rounded-lg text-center border p-2 text-sm font-medium shadow-sm ${
                  state === "Sikkim"
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

        <main className="col-span-3 space-y-12 text-gray-800">
          <section>
            <p className="leading-relaxed text-gray-700 mb-4">
              Sikkim, nestled in the Himalayas, offers a serene and focused
              environment for MBBS aspirants. The state is home to
              well-recognized medical colleges providing quality education,
              modern infrastructure, and comprehensive clinical exposure.
            </p>
            <p className="leading-relaxed text-gray-700 mb-4 font-semibold">
              Global Edulogy – Get Admission into Top Medical Colleges in Sikkim
            </p>
            <p className="leading-relaxed text-gray-700 mb-4">
              Global Edulogy offers expert guidance and personalized support to
              help you secure admission into the top medical college in Sikkim,
              ensuring a smooth and efficient process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              MBBS College in Sikkim
            </h2>
            {renderTable(medicalColleges, [
              "S.No.",
              "College Name",
              "Type",
              "Establishment Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Sikkim NEET UG Counselling 2025 Highlights
            </h2>
            {renderTable(counsellingHighlights, ["Particulars", "Details"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Tentative Counselling Schedule
            </h2>
            {renderTable(counsellingDates, ["Event", "Dates (Tentative)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {eligibility.map(([k, v], i) => (
                <li key={i}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Domicile Criteria</h2>
            <ul className="list-disc pl-6 space-y-1">
              {domicileCriteria.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
            {renderTable(registrationFees, ["Category", "Fee (₹)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Reservation Criteria
            </h2>
            {renderTable(reservation, ["Category", "Reservation (%)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for Counselling
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {documentsRequired.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Steps of Sikkim NEET UG Counselling Rounds
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {counsellingProcess.map(([step, desc], i) => (
                <li key={i}>
                  <strong>{step}:</strong> {desc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How Global Edulogy Helps You Get Admission
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {globalEdulogySupport.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

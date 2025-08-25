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
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const privateColleges = [
    [
      1,
      "Shri Guru Ram Rai Institute of Medical & Health Sciences, Dehradun",
      2006,
      150,
    ],
    [2, "Himalayan Institute of Medical Sciences, Dehradun", 1995, 150],
    [3, "Gautam Buddha Chikitsa Mahavidyalaya, Dehradun", 2022, 150],
  ];

  const governmentColleges = [
    [1, "Doon Medical College, Dehradun", 2016, 175],
    [2, "Government Medical College, Haldwani", 2001, 125],
    [
      3,
      "Veer Chandra Singh Garhwali Govt. Medical Sc. & Research Instt, Srinagar",
      2008,
      175,
    ],
    [
      4,
      "Soban Singh Jeena Govt. Institute of Medical Sciences, Almora",
      2021,
      100,
    ],
  ];

  const counsellingInfo = {
    authority:
      "Hemwati Nandan Bahuguna Uttarakhand Medical Education University (HNBUMU)",
    mode: "Online",
    admissionCriteria: "NEET UG 2025 Score",
    rounds: "Round 1, Round 2, Mop-Up Round, Stray Vacancy Round",
    seatAllocation: "85% State Quota, 15% All India Quota (AIQ)",
    website: "hnbumu.ac.in",
  };

  const counsellingTentativeDates = [
    ["Online Registration Starts", "July – August 2025"],
    ["Choice Filling & Locking", "To be announced"],
    ["Round 1 Seat Allotment", "To be announced"],
    ["Document Verification", "To be announced"],
    ["Further Rounds", "Based on seat availability"],
  ];

  const eligibility = [
    "Must qualify NEET UG 2025 with the required percentile",
    "Should have passed 10+2 with Physics, Chemistry, Biology/Biotechnology & English",
    "Minimum age: 17 years as of December 31, 2025",
    "No upper age limit as per NEET 2025 regulations",
    "Candidates applying for state quota seats must meet domicile requirements",
  ];

  const domicileCriteria = [
    "Permanent residents of Uttarakhand or completed 10th and 12th from Uttarakhand",
    "Candidates from other states can apply under management quota in private colleges",
    "Domicile certificate or schooling proof is required for state quota seats",
  ];

  const registrationSteps = [
    "Visit the official website – hnbumu.ac.in",
    "Click on NEET UG 2025 Counselling Registration",
    "Fill in personal, academic, and NEET UG details",
    "Upload required documents in the specified format",
    "Pay the registration fee online",
    "Submit the application and take a printout for reference",
  ];

  const counsellingRounds = [
    "Online Registration – Candidates register and fill details",
    "Document Verification – Upload and verify documents online",
    "Choice Filling & Locking – Choose your preferred colleges and courses",
    "Seat Allotment Result – Based on rank, preferences, and seat availability",
  ];

  const registrationFees = [
    ["General/OBC", "₹4,000"],
    ["SC/ST", "₹2,000"],
    ["NRI Candidates", "Higher as per HNBUMU"],
  ];

  const reservation = [
    ["SC (Scheduled Caste)", "19%"],
    ["ST (Scheduled Tribe)", "4%"],
    ["OBC (Other Backward Classes)", "14%"],
    ["EWS (Economically Weaker Section)", "10%"],
    ["PwD (Persons with Disabilities)", "5% within each category"],
  ];

  const documentsRequired = [
    "NEET UG 2025 Admit Card & Scorecard",
    "Class 10 & 12 Mark Sheets and Passing Certificates",
    "Category Certificate (if applicable)",
    "Uttarakhand Domicile Certificate (for state quota candidates)",
    "Transfer Certificate (TC)",
    "Character Certificate",
    "Passport-size Photographs",
    "Identity Proof (Aadhar Card, PAN, etc.)",
  ];

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

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Uttarakhand - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Uttarakhand with eligibility, counselling, reservation, fees, and top medical colleges."
        keywords={[
          "MBBS Uttarakhand",
          "NEET UG Uttarakhand",
          "Uttarakhand Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Uttarakhand"
      />

      <Header
        title="MBBS in Uttarakhand"
        subtitle="Top Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Uttarakhand with eligibility, counselling, reservation, and top colleges."
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
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm ${
                  state === "Uttarakhand"
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
              Uttarakhand is a premier destination for pursuing MBBS, offering a
              mix of top government and private medical colleges. These
              institutions provide high-quality clinical exposure and attractive
              stipends for interns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Uttarakhand
            </h2>
            {renderTable(privateColleges, [
              "S.No",
              "College Name",
              "Established Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Uttarakhand
            </h2>
            {renderTable(governmentColleges, [
              "S.No",
              "College Name",
              "Established Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Uttarakhand NEET UG Counselling 2025
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conducting Authority: {counsellingInfo.authority}</li>
              <li>Mode of Counselling: {counsellingInfo.mode}</li>
              <li>Admission Criteria: {counsellingInfo.admissionCriteria}</li>
              <li>Rounds: {counsellingInfo.rounds}</li>
              <li>Seat Allocation: {counsellingInfo.seatAllocation}</li>
              <li>
                Official Website:{" "}
                <a
                  href={`https://${counsellingInfo.website}`}
                  className="text-blue-600 underline"
                >
                  {counsellingInfo.website}
                </a>
              </li>
            </ul>
            {renderTable(counsellingTentativeDates, [
              "Event",
              "Expected Date (2025)",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {eligibility.map((item, i) => (
                <li key={i}>{item}</li>
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
            <h2 className="text-2xl font-semibold mb-4">
              Registration Process
            </h2>
            <ol className="list-decimal pl-6 space-y-1">
              {registrationSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Steps of Counselling Rounds
            </h2>
            <ol className="list-decimal pl-6 space-y-1">
              {counsellingRounds.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
            {renderTable(registrationFees, [
              "Category",
              "Registration Fee (₹)",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Reservation Criteria
            </h2>
            {renderTable(reservation, ["Category", "Percentage (%)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for Counselling
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {documentsRequired.map((item, i) => (
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

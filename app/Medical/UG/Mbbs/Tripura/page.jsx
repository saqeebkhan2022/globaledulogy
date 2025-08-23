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
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const privateColleges = [
    [1, "Tripura Medical College, Agartala", 2006, 100],
    [2, "Tripura Santiniketan Medical College & Hospital", 2024, 150],
  ];

  const governmentColleges = [
    [1, "Agartala Government Medical College, Agartala", 2005, 175],
  ];

  const counsellingSteps = [
    "Visit the official Tripura NEET UG counselling website: https://dme.tripura.gov.in",
    "Fill personal, academic, and NEET UG 2025 details",
    "Upload scanned copies of required documents",
    "Pay the registration/counselling fees online",
    "Submit the application and save the confirmation page",
  ];

  const counsellingRounds = [
    "Round 1: Seats allotted based on NEET UG rank and preferences",
    "Round 2: Conducted for vacant seats after Round 1",
    "Further rounds: Based on seat vacancy",
  ];

  const registrationFees = [
    ["Tripura Domicile – Unreserved", "₹2,500"],
    ["Tripura Domicile – Reserved (SC/ST/PwD/Transgender)", "₹1,800"],
    ["Non-Domicile – General/OBC", "₹2,000"],
    ["Non-Domicile – Reserved (SC/ST/PwD)", "₹1,800"],
  ];

  const reservation = [
    ["Scheduled Castes (SC)", "15%"],
    ["Scheduled Tribes (ST)", "6%"],
    ["Other Backward Classes (OBC)", "29%"],
    ["Economically Weaker Sections (EWS)", "10%"],
    ["Persons with Disabilities (PwD)", "5% within each category"],
  ];

  const documentsRequired = [
    "NEET UG Admit Card & Rank Card",
    "Class 10th and 12th Mark Sheets & Certificates",
    "Domicile Certificate (Tripura)",
    "Caste/Category Certificate (if applicable)",
    "Passport-size Photographs",
    "Identity Proof (Aadhar Card, Passport, etc.)",
    "Allotment Letter (after seat allocation)",
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
        title="MBBS in Tripura - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Tripura with eligibility, counselling, reservation, fees, and top medical colleges."
        keywords={[
          "MBBS Tripura",
          "NEET UG Tripura",
          "Tripura Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Tripura"
      />

      <Header
        title="MBBS in Tripura"
        subtitle="Top Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Tripura with eligibility, counselling, reservation, and top colleges."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <aside className="md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border p-2 text-sm font-medium shadow-sm ${
                  state === "Tripura"
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
              className="mb-4 text-2xl font-bold text-[#EA4E14] text-center block"
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
              Tripura is home to Agartala Government Medical College and
              upcoming private medical institutions, providing excellent
              opportunities for MBBS aspirants. Admissions are based on NEET UG
              scores, and the MBBS program spans 5.5 years including internship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Tripura
            </h2>
            {renderTable(privateColleges, [
              "S.No",
              "College Name",
              "Established Year",
              "MBBS Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Tripura
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
              Tripura NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Conducted by Directorate of Medical Education (DME), Tripura. The
              online counselling is based on NEET UG 2025 scores under 85% state
              quota for MBBS, BDS, BHMS, BAMS, and BASLP courses.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Rounds
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              {counsellingRounds.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Steps</h2>
            <ul className="list-disc pl-6 space-y-1">
              {counsellingSteps.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
            {renderTable(registrationFees, ["Category", "Fee (₹)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reservation Policy</h2>
            {renderTable(reservation, ["Category", "Percentage Reserved"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
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

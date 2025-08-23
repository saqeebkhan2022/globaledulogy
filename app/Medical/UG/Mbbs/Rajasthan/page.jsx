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
    [1, "SMS Medical College, Jaipur", 1947, 250],
    [2, "RUHS College of Medical Sciences, Jaipur", 2014, 150],
    [3, "Sardar Patel Medical College, Bikaner", 1959, 250],
    [4, "Dr. Sampurnanand Medical College, Jodhpur", 1965, 250],
    [5, "R.N.T. Medical College, Udaipur", 1961, 250],
    [6, "JLN Medical College, Ajmer", 1965, 250],
    [7, "Government Medical College, Kota", 1992, 250],
    [8, "Jhalawar Medical College, Jhalawar", 2008, 200],
    [9, "Shri Kalyan Government Medical College, Sikar", 2020, 100],
    [10, "Government Medical College, Bhilwara", 2018, 150],
    [11, "Government Medical College, Pali", 2018, 150],
    [12, "Government Medical College, Bharatpur", 2018, 150],
    [13, "Government Medical College, Churu", 2018, 150],
    [14, "Government Medical College, Chittorgarh", 2022, 100],
    [15, "Government Medical College, Barmer", 2019, 100],
    [16, "Government Medical College, Alwar", 2023, 100],
    [17, "Government Medical College, Dungarpur", 2018, 150],
    [18, "Government Medical College, Sriganganagar", 2022, 100],
    [19, "Government Medical College, Sirohi", 2022, 101],
    [20, "Government Medical College, Dausa", 2023, 100],
    [21, "Government Medical College, Dholpur", 2022, 100],
    [22, "Government Medical College, Jhunjhunu", 2023, 100],
    [23, "Government Medical College, Bundi", 2023, 100],
    [24, "Government Medical College, Hanumangarh", 2023, 100],
    [25, "Government Medical College, Karauli", 2023, 100],
    [26, "Government Medical College, Banswara", 2024, 100],
    [27, "Government Medical College, Baran", 2024, 100],
    [28, "Government Medical College, Nagaur", 2024, 100],
    [29, "Government Medical College, Madhopur", 2024, 100],
  ];

  const privateColleges = [
    [1, "Mahatma Gandhi Medical College & Hospital, Jaipur", 2001, 250],
    [2, "Pacific Medical College & Hospital, Udaipur", 2014, 150],
    [3, "Ananta Institute of Medical Sciences, Rajsamand", 2016, 150],
    [4, "Dr. SS Tantia Medical College, Sri Ganganagar", 2021, 150],
    [5, "Sudha Medical College, Kota", 2024, 100],
    [
      6,
      "Jaipur National University Institute of Medical Sciences, Jaipur",
      2016,
      250,
    ],
    [
      7,
      "American International Institute of Medical Sciences, Bedwas",
      2016,
      150,
    ],
    [8, "Vyas Medical College & Hospital, Jodhpur", 2024, 100],
    [9, "National Institute of Medical Science, Jaipur", 2004, 250],
    [10, "Geetanjali Institute of Medical Science, Udaipur", 2008, 250],
    [11, "Pacific Institute of Medical Sciences, Udaipur", 2015, 200],
    [12, "JIET Medical College & Hospital, Jodhpur", 2024, 50],
  ];

  const counsellingHighlights = [
    [
      "Conducting Authority",
      "Office of the Chairman, NEET UG Medical & Dental Admission Board",
    ],
    ["Mode of Counselling", "Online"],
    ["Admission Basis", "NEET-UG Scores"],
    [
      "Rounds of Counselling",
      "Round 1, Round 2, Mop-up Round, Stray Vacancy Round",
    ],
    ["Official Website", "To be announced"],
  ];

  const counsellingDates = [
    ["Online Registration", "To be announced"],
    ["Choice Filling & Locking", "To be announced"],
    ["Round 1 Seat Allotment", "To be announced"],
    ["Round 2 Registration", "To be announced"],
    ["Mop-up Round", "To be announced"],
    ["Stray Vacancy Round", "To be announced"],
  ];

  const eligibility = [
    ["NEET UG Qualification", "Must have qualified NEET-UG 2025"],
    [
      "Academic Qualification",
      "Completed 10+2 with Physics, Chemistry, Biology, and English",
    ],
    ["Minimum Marks", "General: 50%, SC/ST/OBC/MBC: 40%, PwD: 45%"],
  ];

  const domicileCriteria = [
    "Candidates must be domiciled in Rajasthan OR completed Class 10 and 12 in Rajasthan",
    "Non-domicile students can apply only for management and NRI quota seats in private colleges",
  ];

  const reservation = [
    ["Scheduled Caste (SC)", "16%"],
    ["Scheduled Tribe (ST)", "12%"],
    ["Other Backward Classes (OBC)", "21%"],
    ["Most Backward Classes (MBC)", "5%"],
    ["Economically Weaker Section (EWS)", "10%"],
    ["Persons with Disabilities (PwD)", "5% (Horizontal)"],
    ["Female Candidates", "25% (State Government Colleges)"],
  ];

  const registrationFees = [
    ["General", "₹2,000"],
    ["SC/ST/OBC/MBC", "₹1,200"],
    ["NRI/Management Quota", "₹5,000"],
  ];

  const documentsRequired = [
    "NEET-UG Admit Card & Scorecard",
    "Class 10 & 12 Mark Sheets & Certificates",
    "Domicile Certificate",
    "Caste Certificate (if applicable)",
    "Income Certificate (for EWS/OBC candidates)",
    "PwD Certificate (if applicable)",
    "Migration Certificate (if required)",
    "Medical Fitness Certificate",
  ];

  const counsellingProcess = [
    [
      "Online Registration",
      "Complete online registration with personal and academic details",
    ],
    ["Upload Documents", "Upload required documents for verification"],
    [
      "Choice Filling & Locking",
      "Fill and lock preferred colleges and courses",
    ],
    ["Seat Allotment", "Seats allotted based on merit and preferences"],
    [
      "Reporting to College",
      "Report to allotted college with documents and fee payment",
    ],
    ["Subsequent Rounds", "Mop-up and Stray Vacancy rounds for leftover seats"],
  ];

  const topColleges = [
    ["SMS Medical College", "Jaipur", "Government"],
    ["RUHS College of Medical Sciences", "Jaipur", "Government"],
    ["Sardar Patel Medical College", "Bikaner", "Government"],
    ["Dr. Sampurnanand Medical College", "Jodhpur", "Government"],
    ["Mahatma Gandhi Medical College & Hospital", "Jaipur", "Private"],
    ["Pacific Medical College & Hospital", "Udaipur", "Private"],
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
        title="MBBS in Rajasthan - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Rajasthan with government and private colleges, eligibility, counselling, reservation, fees, and NEET UG 2025."
        keywords={[
          "MBBS Rajasthan",
          "NEET UG Rajasthan",
          "RUHS Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Rajasthan"
      />

      <Header
        title="MBBS in Rajasthan"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Rajasthan with eligibility criteria, counselling process, reservation, and top colleges."
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
                  state === "Rajasthan"
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
              Rajasthan hosts top government and private medical colleges with
              modern infrastructure, hospital facilities, and clinical exposure.
              Many hospitals provide stipends to interns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Rajasthan
            </h2>
            {renderTable(govtColleges, [
              "Sl No.",
              "College Name",
              "Est. Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Rajasthan
            </h2>
            {renderTable(privateColleges, [
              "Sl No.",
              "College Name",
              "Est. Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Rajasthan NEET UG Counselling 2025 Highlights
            </h2>
            {renderTable(counsellingHighlights, ["Particulars", "Details"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Tentative Counselling Schedule
            </h2>
            {renderTable(counsellingDates, ["Event", "Expected Date"])}
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
            <h2 className="text-2xl font-semibold mb-4">
              Reservation Criteria
            </h2>
            {renderTable(reservation, ["Category", "Reservation (%)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
            {renderTable(registrationFees, ["Category", "Fee (₹)"])}
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
              Step-by-Step Counselling Process
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
              Top Colleges Participating in Rajasthan NEET UG Counselling
            </h2>
            {renderTable(topColleges, ["College Name", "Location", "Type"])}
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

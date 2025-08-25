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
    [1, "KPC Medical College & Hospital, Jadavpur", 2008, 200],
    [2, "ICARE Institute of Medical Sciences & Research, Haldia", 2011, 150],
    [3, "Jagannath Gupta Institute of Medical Sciences & Hospital", 2018, 200],
    [4, "Gouri Devi Institute of Medical Sciences, Durgapur", 2016, 200],
    [5, "IQ-City Medical College, Durgapur", 2013, 250],
    [6, "JIS School of Medical Science & Research, Howrah", 2023, 150],
    [7, "Santiniketan Medical College, Bolpur", 2021, 150],
    [8, "JMN Medical College, Nadia", 2023, 150],
    [
      9,
      "Shri Ramkrishna Institute of Medical Sciences & Sanaka Hospitals, Durgapur",
      2019,
      200,
    ],
    [10, "Krishna Nagar Institute of Medical Sciences", 2019, 100],
    [
      11,
      "East West Institute Of Medical Science & Research, Kolkata",
      2024,
      50,
    ],
    [
      12,
      "Jakir Hossain Medical College & Research Institute, Murshidabad",
      2024,
      50,
    ],
  ];

  const governmentColleges = [
    [1, "Medical College, Kolkata", 1838, 250],
    [2, "Institute Of PG Medical Education And Research, Kolkata", 1948, 250],
    [3, "Nilratan Sirkar Medical College, Kolkata", 1948, 250],
    [4, "Calcutta National Medical College, Kolkata", 1948, 250],
    [5, "R.G. Kar Medical College, Kolkata", 1916, 251],
    [6, "College Of Medicine And Sagore Dutta Hospital, Kamarhati", 2011, 125],
    [7, "Burdwan Medical College, Burdwan", 1969, 200],
    [8, "ESI PGIMSR & ESIC Medical College, Joka Kolkata", 2013, 125],
    [9, "College Of Medicine And JNM Hospital, Kalyani", 2010, 125],
    [10, "Bankura Sammilani Medical College, Bankura", 1956, 200],
    [11, "Barasat Government Medical College, Barasat", 2022, 100],
    [12, "Diamond Harbour Medical College, Harindanga", 2019, 100],
    [13, "North Bengal Medical College, Darjeeling", 1968, 200],
    [14, "Midnapore Medical College, Midnapore", 2001, 200],
    [15, "Murshidabad Medical College, Murshidabad", 2012, 125],
    [16, "Malda Medical College, Malda", 2011, 125],
    [17, "Prafulla Chandra Sen Government Medical College, Hooghly", 2022, 100],
    [18, "Sarat Chandra Chattopadhyay Govt Medical College, Howrah", 2022, 100],
    [19, "Rampurhat Govt Medical College, Rampurhat", 2019, 100],
    [20, "Tamralipto Govt Medical College, Medinipur", 2022, 100],
    [21, "Purulia Govt Medical College, Purulia", 2022, 100],
    [22, "Raiganj Govt Medical College, Raiganj", 2019, 100],
    [23, "Jhargram Govt Medical College, Jhargram", 2022, 100],
    [24, "Coochbehar Govt Medical College, Coochbehar", 2019, 100],
    [25, "Jalpaiguri Govt Medical College, Jalpaiguri", 2019, 100],
  ];

  const counsellingInfo = {
    authority: "West Bengal Medical Counselling Committee (WBMCC)",
    mode: "Online",
    courses: "MBBS, BDS",
    exam: "NEET UG",
    website: "https://wbmcc.nic.in",
  };

  const counsellingDates = [
    ["Release of Application Form", "June 2025"],
    ["Last Date for Registration", "July 2025"],
    ["Provisional Merit List", "July 2025"],
    ["Choice Filling & Locking", "July 2025"],
    ["Seat Allotment Round 1", "August 2025"],
    ["Reporting to College", "August 2025"],
    ["Round 2 Counselling", "August 2025"],
    ["Mop-Up Round", "September 2025"],
    ["Stray Vacancy Round", "September 2025"],
  ];

  const eligibility = [
    "Passed 10+2 with Physics, Chemistry, Biology/Biotechnology & English",
    "Minimum Marks: General – 50%, OBC/SC/ST – 40%, PwD – 45%",
    "Must have qualified NEET UG 2025",
    "Minimum Age: 17 years as on December 31, 2025",
  ];

  const domicileCriteria = [
    "Candidates must be domiciled in West Bengal for state quota seats",
    "Non-domicile candidates can apply for management/NRI quota seats",
  ];

  const registrationSteps = [
    "Visit the official WBMCC website",
    "Register with basic details & NEET UG roll number",
    "Fill the application form and upload documents",
    "Pay the registration fee online",
    "Submit the form and download confirmation",
  ];

  const counsellingRounds = [
    "Registration & Fee Payment",
    "Merit List Release",
    "Choice Filling & Locking",
    "Seat Allotment Result",
    "Document Verification & Reporting",
    "Stray Vacancy Round (if seats remain)",
  ];

  const registrationFees = [
    ["General/OBC", "₹2000"],
    ["SC/ST/PwD", "₹1500"],
    ["NRI", "₹5000"],
  ];

  const reservation = [
    ["SC", "22%"],
    ["ST", "6%"],
    ["OBC-A", "10%"],
    ["OBC-B", "7%"],
    ["EWS", "10%"],
    ["PwD", "5%"],
  ];

  const documentsRequired = [
    "NEET UG 2025 Admit Card & Scorecard",
    "Class 10 & 12 Mark Sheets",
    "Domicile Certificate (if applicable)",
    "Caste Certificate (if applicable)",
    "PwD Certificate (if applicable)",
    "Passport Size Photographs",
    "Valid ID Proof (Aadhar, Passport, etc.)",
    "Allotment Letter (post seat allotment)",
    "Migration Certificate (if applicable)",
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
        title="MBBS in West Bengal - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in West Bengal with eligibility, counselling, reservation, fees, and top medical colleges."
        keywords={[
          "MBBS West Bengal",
          "NEET UG West Bengal",
          "West Bengal Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/West-Bengal"
      />

      <Header
        title="MBBS in West Bengal"
        subtitle="Top Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in West Bengal with eligibility, counselling, reservation, and top colleges."
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

        {/* Main Content */}
        <main className="col-span-3 space-y-12 text-gray-800">
          <section>
            <p className="text-gray-700 leading-relaxed">
              West Bengal is one of the top destinations for MBBS in India,
              offering prestigious government and private medical colleges with
              strong clinical exposure and infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges
            </h2>
            {renderTable(privateColleges, [
              "S.No",
              "College Name",
              "Established",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges
            </h2>
            {renderTable(governmentColleges, [
              "S.No",
              "College Name",
              "Established",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              West Bengal NEET UG Counselling 2025
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conducting Authority: {counsellingInfo.authority}</li>
              <li>Mode: {counsellingInfo.mode}</li>
              <li>Courses: {counsellingInfo.courses}</li>
              <li>Exam Accepted: {counsellingInfo.exam}</li>
              <li>
                Official Website:{" "}
                <a
                  href={counsellingInfo.website}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {counsellingInfo.website}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Counselling Dates (Tentative)
            </h2>
            {renderTable(counsellingDates, ["Event", "Date"])}
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
            {renderTable(registrationFees, ["Category", "Fee (₹)"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reservation Policy</h2>
            {renderTable(reservation, ["Category", "Percentage"])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-1">
              {documentsRequired.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

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
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const privateColleges = [
    [1, "KPC Medical College & Hospital, Jadavpur", 2008, 200],
    [2, "ICARE Institute of Medical Sciences & Research, Haldia", 2011, 150],
    [3, "Jagannath Gupta Institute of Medical Sciences & Hospital", 2018, 200],
    [
      4,
      "Gouri Devi Institute of Medical Sciences and Hospital, Durgapur",
      2016,
      200,
    ],
    [5, "IQ-City Medical College, Durgapur", 2013, 250],
    [6, "JIS School of Medical Science & Research, Howrah", 2023, 150],
    [7, "Santiniketan Medical College, Bolpur", 2021, 150],
    [8, "JMN Medical College , Nadia", 2023, 150],
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
      "Jakir Hossain medical college and research institute, Murshidabad",
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
    [8, "ESI PGI MSR And ESIC Medical College Joka Kolkata", 2013, 125],
    [9, "College Of Medicine And JNM Hospital, Kalyani", 2010, 125],
    [10, "Bankura Sammilani Medical College, Bankura", 1956, 200],
    [11, "Barasat Government Medical College And Hospital, Barasat", 2022, 100],
    [12, "Diamond Harbour Medical College, Harindanga", 2019, 100],
    [13, "North Bengal Medical College And Hospital, Darjeeling", 1968, 200],
    [14, "Midnapore Medical College, Midnapore", 2001, 200],
    [15, "Murshidabad Medical College And Hospital, Murshidabad", 2012, 125],
    [16, "Malda Medical College And Hospital, Malda", 2011, 125],
    [17, "Prafulla Chandra Sen Government Medical College, Hooghly", 2022, 100],
    [
      18,
      "Sarat Chandra Chattopadhyay Government Medical College And Hospital, Howrah",
      2022,
      100,
    ],
    [19, "Rampurhat Govt Medical College And Hospital", 2019, 100],
    [
      20,
      "Tamralipto Government Medical College And Hospital, Medinipur",
      2022,
      100,
    ],
    [21, "Purulia Government Medical College & Hospital", 2022, 100],
    [22, "Raiganj Govt Medical College And Hospital, Raiganj", 2019, 100],
    [
      23,
      "Jhargram Government Medical College And Hospital, Jhargram",
      2022,
      100,
    ],
    [
      24,
      "Coochbehar Government Medical College & Hospital, Coochbehar",
      2019,
      100,
    ],
    [25, "Jalpaiguri Government Medical College, Jalpaiguri", 2019, 100],
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
    ["Provisional Merit List Publication", "July 2025"],
    ["Choice Filling & Locking", "July 2025"],
    ["Seat Allotment Round 1", "August 2025"],
    ["Reporting to Allotted College", "August 2025"],
    ["Round 2 Counselling", "August 2025"],
    ["Mop-Up Round", "September 2025"],
    ["Stray Vacancy Round", "September 2025"],
  ];

  const eligibility = [
    "Qualification: Passed 10+2 with Physics, Chemistry, Biology/Biotechnology & English",
    "Minimum Marks: General – 50%, OBC/SC/ST – 40%, PwD – 45%",
    "NEET UG Qualification: Must have qualified NEET UG 2025",
    "Age Limit: Minimum 17 years by December 31, 2025",
  ];

  const domicileCriteria = [
    "Candidates must be domiciled in West Bengal for state quota seats",
    "Non-domicile candidates can apply for management/NRI quota seats",
  ];

  const registrationSteps = [
    "Visit the official WBMCC website",
    "Register with basic details and NEET UG roll number",
    "Fill the application form and upload documents",
    "Pay the registration fee",
    "Submit the form and download the confirmation",
  ];

  const counsellingRounds = [
    "Registration & Fee Payment",
    "Merit List Release",
    "Choice Filling & Locking",
    "Seat Allotment Result",
    "Document Verification & Reporting",
    "Stray Vacancy Round (if seats remain vacant)",
  ];

  const registrationFees = [
    ["General/OBC", "₹2000"],
    ["SC/ST/PwD", "₹1500"],
    ["NRI Candidates", "₹5000"],
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
                  state === "West Bengal"
                    ? "bg-[#EA4E14] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {state}
              </Link>
            ))}
          </div>
        </aside>

        <main className="md:col-span-3 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private MBBS Colleges
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
              Government MBBS Colleges
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
              <li>Courses Covered: {counsellingInfo.courses}</li>
              <li>Exam Accepted: {counsellingInfo.exam}</li>
              <li>
                Official Website:{" "}
                <a
                  href={counsellingInfo.website}
                  target="_blank"
                  className="text-blue-600"
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
            <h2 className="text-2xl font-semibold mb-4">Counselling Rounds</h2>
            <ul className="list-disc pl-6 space-y-1">
              {counsellingRounds.map((item, i) => (
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

          {/* <section className="bg-[#EA4E14] text-white p-6 rounded-xl shadow-lg"> */}
          {/* <h2 className="text-2xl font-semibold mb-4">
              Get Admission into Top MBBS Colleges in West Bengal
            </h2>
            <p className="mb-4">
              Global Education offers expert guidance to help you secure
              admission into top MBBS colleges in West Bengal. Our experienced
              counselors provide personalized support throughout the NEET UG
              counselling process.
            </p>
            <Link
              href="https://www.globaledulogy.com/contact"
              className="bg-white text-[#EA4E14] px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100"
            >
              Contact Global Education Now
            </Link> */}
          {/* </section> */}
          
        </main>
      </div>
    </>
  );
};

export default Page;

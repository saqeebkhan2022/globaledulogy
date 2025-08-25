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

  const privateColleges = [
    [
      1,
      "Apollo Institute of Medical Sciences & Research, Hyderabad",
      2012,
      150,
    ],
    [2, "Kamineni Academy of Medical Sci & Research, Hyderabad", 2013, 150],
    [3, "Mamata Academy of Medical Sciences, Bachupally", 2019, 150],
    [4, "Bhaskar Medical College, Yenkapally", 2005, 150],
    [5, "Medicity Institute of Medical Sciences", 2002, 150],
    [6, "Mamata Medical College, Khammam", 1998, 200],
    [7, "Kamineni Institute of Medical Sciences, Narketpally", 1999, 200],
    [8, "Arundathi Institute of Medical Sciences, Dundigal", 2023, 150],
    [9, "SVS Medical College, Mahabubnagar", 1999, 150],
    [10, "Prathima Institute of Medical Sciences, Karimnagar", 2001, 250],
    [11, "Maheshwara Medical College, Medak", 2016, 150],
    [
      12,
      "Dr Patnam Mahender Reddy Institute of Medical Sciences, Chevella",
      2019,
      150,
    ],
    [13, "CMR Institute of Medical Sciences", 2023, 150],
    [14, "MNR Medical College, Sangareddy", 2002, 150],
    [15, "Mahavir Institute of Medical Sciences, Vikarabad", 2016, 150],
    [
      16,
      "Chalmeda Ananda Rao Institute of Medical Sciences, Karimnagar",
      2003,
      200,
    ],
    [17, "RVM Medical College, Mulugu", 2016, 250],
    [18, "Surabhi Institute of Medical Sciences, Siddipet", 2019, 150],
    [19, "Pratima Relief Institute of Medical Sciences, Warangal", 2022, 150],
    [20, "TRR Institute of Medical Sciences, Hyderabad", 2020, 150],
    [21, "Father Colombo Institute of Medical Sciences, Warangal", 2023, 150],
    [22, "Neelima Institute of Medical Sciences, Ghatkesar", 2023, 150],
    [23, "Deccan College of Medical Sciences", 1985, 150],
    [24, "Shadan Institute of Medical Sciences", 2005, 150],
    [25, "Ayaan Institute of Medical Sciences", 2018, 150],
    [26, "Dr. VRK Women's Medical College, Aziznagar", 2010, 100],
    [27, "Nova Institute of Medical Sciences and Research Center", 2024, 150],
  ];

  const governmentColleges = [
    [1, "Gandhi Medical College, Secunderabad", 1954, 250],
    [2, "Osmania Medical College, Hyderabad", 1946, 250],
    [3, "ESI Medical College, Sanathnagar, Hyd", 2016, 100],
    [4, "Kakatiya Medical College, Warangal", 1959, 250],
    [5, "Govt Medical College, Nizamabad", 2013, 120],
    [6, "Govt Medical College, Mahabubnagar", 2016, 175],
    [7, "Rajiv Institute Of Medical Sciences, Adilabad", 2008, 120],
    [8, "Govt Medical College, Siddipet", 2018, 175],
    [9, "Govt Medical College, Suryapet", 2019, 150],
    [10, "Govt Medical College, Nalgonda", 2019, 150],
    [11, "Govt Medical College, Sangareddy", 2021, 150],
    [12, "Govt Medical College, Nagarkurnool", 2024, 150],
    [13, "Govt Medical College, Quthbullapur", 2024, 50],
    [14, "Govt Medical College, Wanaparthy", 2022, 150],
    [15, "Govt Medical College, Karimnagar", 2023, 100],
    [16, "Govt Medical College, Khammam", 2023, 100],
    [17, "Singareni Institute Of Medical Sciences, Ramagundam", 2022, 150],
    [18, "Govt Medical College, Maheshwaram", 2024, 50],
    [19, "Govt Medical College, Mahabubabad", 2022, 150],
    [20, "Govt Medical College, Bhadradri Kothagudem", 2022, 150],
    [21, "Govt Medical College, Kamareddy", 2023, 100],
    [22, "Govt Medical College, Jagityal", 2022, 150],
    [23, "Govt Medical College, Vikarabad", 2023, 100],
    [24, "Govt Medical College, Jangaon", 2023, 100],
    [25, "Govt Medical College, Mancherial", 2022, 100],
    [26, "Govt Medical College, Nirmal", 2023, 100],
    [27, "Govt Medical College, Mulugu", 2023, 100],
    [28, "Govt Medical College, Rajanna Sircilla", 2023, 100],
    [29, "Govt Medical College, Kumuram Bheem Asifabad", 2023, 100],
    [30, "Govt Medical College, Yadadri Bhuvanagiri", 2023, 100],
    [31, "Govt Medical College, Jayashankar Bhupalpally", 2023, 100],
    [32, "Govt Medical College, Medak", 2024, 50],
    [33, "Govt Medical College, Narsampet", 2024, 50],
    [34, "Govt Medical College, Narayanpet", 2024, 50],
    [35, "Govt Medical College, Gadwal", 2024, 50],
  ];

  const counsellingSteps = [
    "Visit the Official KNRUHS Website and register for NEET UG 2025 Counselling",
    "Fill personal, academic, and NEET UG details",
    "Upload scanned copies of required certificates",
    "Pay the registration fee online",
    "Submit the application and print confirmation page",
  ];

  const counsellingRounds = [
    "Round 1: Seats allotted based on NEET UG rank and preferences",
    "Round 2: Conducted for vacant seats after Round 1",
    "Mop-Up Round: For vacant seats in government and private colleges after Round 2",
    "Stray Vacancy Round: College-level admission for remaining unfilled seats",
  ];

  const registrationFees = [
    ["General/OBC", "₹3,500"],
    ["SC/ST", "₹2,900"],
    ["NRI Candidates", "Higher fee as per KNRUHS"],
  ];

  const reservation = [
    ["Scheduled Castes (SC)", "15%"],
    ["Scheduled Tribes (ST)", "6%"],
    ["Backward Classes (BC-A, B, C, D, E)", "29%"],
    ["Economically Weaker Sections (EWS)", "10%"],
    ["Persons with Disabilities (PwD)", "5% within each category"],
  ];

  const documentsRequired = [
    "NEET UG 2025 Admit Card & Scorecard",
    "Class 10 & 12 Mark Sheets & Passing Certificates",
    "Domicile Certificate (for Telangana state quota)",
    "Caste Certificate (for reserved categories, if applicable)",
    "Transfer Certificate (TC) from last attended school",
    "Income Certificate (for EWS candidates, if applicable)",
    "PwD Certificate (if applicable)",
    "Allotment Letter (after seat allocation)",
    "Passport-size Photographs",
    "Valid ID Proof (Aadhar Card, PAN, etc.)",
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
        title="MBBS in Telangana - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Telangana with eligibility, counselling, reservation, fees, and top medical colleges."
        keywords={[
          "MBBS Telangana",
          "NEET UG Telangana",
          "Telangana Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Telangana"
      />

      <Header
        title="MBBS in Telangana"
        subtitle="Top Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Telangana with eligibility, counselling, reservation, and top colleges."
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
                  state === "Telangana"
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
              MBBS (Bachelor of Medicine, Bachelor of Surgery) in Telangana is a
              highly sought-after course, offered by both government and private
              colleges with modern infrastructure and clinical training.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Telangana
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
              Government Medical Colleges in Telangana
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
              Telangana NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Conducted by KNRUHS, Telangana. Counselling is online and based on
              NEET UG 2025 scores with multiple rounds.
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

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
    [1, "Christian Medical College, Vellore", 1942, 100],
    [2, "PSG Institute of Medical Sciences, Coimbatore", 1985, 250],
    [
      3,
      "KMCH Institute of Health Sciences and Research, Coimbatore",
      2019,
      150,
    ],
    [
      4,
      "Velammal Medical College Hospital and Research Institute, Madurai",
      2013,
      150,
    ],
    [
      5,
      "Panimalar Medical College Hospital & Research Institute, Chennai",
      2020,
      150,
    ],
    [
      6,
      "Karpaga Vinayaga Institute of Medical Sciences, Maduranthagam",
      2009,
      150,
    ],
    [
      7,
      "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research",
      2008,
      150,
    ],
    [8, "Tagore Medical College and Hospital, Chennai", 2010, 150],
    [
      9,
      "Dhanalakshmi Srinivasan Medical College and Hospital, Perambalur",
      2023,
      150,
    ],
    [
      10,
      "St. Peters Medical College Hospital and Research Institute, Krishnagiri",
      2021,
      150,
    ],
    [11, "Annapoorna Medical College & Hospital, Salem", 2011, 150],
    [12, "Nandha Medical College and Hospital, Erode", 2023, 150],
    [13, "Indira Medical College & Hospitals, Thiruvallur", 2020, 150],
    [
      14,
      "PSP Medical College Hospital and Research Institute, Kancheepuram",
      2023,
      150,
    ],
    [
      15,
      "Trichy SRM Medical College Hospital & Research Centre, Trichy",
      2009,
      250,
    ],
    [
      16,
      "Karpagam Faculty of Medical Sciences & Research, Coimbatore",
      2012,
      150,
    ],
    [17, "Sri Muthukumaran Medical College, Chennai", 2010, 150],
    [18, "Arunai Medical College & Hospital, Tiruvannamalai", 2021, 150],
    [
      19,
      "Sree Mookambika Institute of Medical Sciences, Kanyakumari",
      2006,
      150,
    ],
    [20, "Madha Medical College and Hospital, Chennai", 2011, 150],
    [
      21,
      "Swamy Vivekanandha Medical College Hospital and Research Institute",
      2021,
      150,
    ],
    [22, "Annaii Medical College and Hospital, Chennai", 2016, 150],
    [23, "Srinivasan Medical College and Hospital, Samayapuram", 2021, 150],
    [24, "Kanyakumari Medical Mission Research Centre", 2024, 100],
    [
      25,
      "Sri Venkateshwara Medical College Hospital and Research Institute, Chennai",
      2022,
      150,
    ],
    [
      26,
      "Dhanalakshmi Srinivasan Institute of Medical Sciences and Hospital",
      2011,
      150,
    ],
  ];

  const governmentColleges = [
    [1, "Madras Medical College, Chennai", 1835, 250],
    [2, "Kilpauk Medical College, Chennai", 1960, 150],
    [3, "Government Medical College, Omandurar, Chennai", 2015, 100],
    [4, "Chengalpattu Medical College, Chengalpattu", 1965, 100],
    [5, "Mohan Kumaramangalam Medical College, Salem", 1986, 100],
    [6, "Tirunelveli Medical College, Tirunelveli", 1965, 250],
    [7, "ESI Hospital, K.K Nagar, Chennai", 2013, 150],
    [8, "Govt. Thiruvallur Medical College Hospital", 2021, 100],
    [9, "Government Villupuram Medical College, Villupuram", 2010, 100],
    [10, "Stanley Medical College, Chennai", 1838, 250],
    [11, "Madurai Medical College, Madurai", 1954, 250],
    [12, "Coimbatore Medical College, Coimbatore", 1966, 200],
    [13, "Thanjavur Medical College, Thanjavur", 1959, 150],
    [14, "K.A.P. Viswanathan Govt. Medical College, Trichy", 1998, 150],
    [15, "Government Vellore Medical College, Vellore", 2005, 100],
    [16, "Government Medical College, Thiruvannamalai", 2013, 100],
    [17, "Govt. Tiruppur Medical College Hospital", 2021, 100],
    [18, "Thoothukudi Medical College", 2000, 150],
    [19, "Kanyakumari Govt. Medical College, Asaripallam", 2003, 150],
    [20, "Government Medical College and Hospital, Cuddalore", 1985, 100],
    [21, "Govt. Namakkal Medical College Hospital", 2021, 100],
    [22, "Govt. Dindigul Medical College Hospital, Dindigul", 2021, 150],
    [23, "Govt. Medical College Hospital, Virudhunagar", 2021, 150],
    [24, "Govt. Ariyalur Medical College Hospital, Ariyalur", 2021, 150],
    [25, "Government Medical College Hospital, The Nilgiris", 2021, 150],
    [26, "Government Erode Medical College & Hospital, Perundurai", 1992, 100],
    [27, "Government Medical College & ESIC Hospital, Coimbatore", 2016, 100],
    [28, "Theni Government Medical College, Theni", 2006, 100],
    [29, "Government Dharmapuri Medical College, Dharmapuri", 2008, 100],
    [30, "Government Medical College, Karur", 2019, 150],
    [31, "Government Medical College, Pudukottai", 2017, 150],
    [32, "Government Sivagangai Medical College, Sivaganga", 2012, 100],
    [33, "Govt. Kallakuruchi Medical College Hospital", 2021, 150],
    [34, "Govt. Nagapattinam Medical College Hospital", 2021, 150],
    [35, "Thiruvarur Govt. Medical College, Thiruvarur", 2010, 100],
    [36, "Govt. Krishnagiri Medical College Hospital", 2021, 150],
    [37, "Govt. Ramanathapuram Medical College Hospital", 2021, 100],
  ];

  const eligibility = [
    "Candidates must have passed 12th with Physics, Chemistry, Biology/Biotechnology, and English",
    "General category students need at least 50%, SC/ST/OBC require 40%",
    "Candidates must have appeared for NEET UG and obtained the minimum qualifying score",
    "Age Limit: At least 17 years old by December 31st of admission year, no upper age limit",
  ];

  const domicileCriteria = [
    "Candidates must be residents of TamilNadu for state quota seats",
    "Candidates born or residing in TamilNadu for last 5 years are eligible",
    "Non-TamilNadu residents can apply for All India Quota (AIQ) seats",
    "Candidates belonging to TamilNadu but studied outside can apply under TamilNadu domicile quota",
  ];

  const counsellingSteps = [
    "Step 1: Registration – register on DME TN website after NEET results",
    "Step 2: Document Verification – verify documents at designated centers",
    "Step 3: Filling Choices – fill preferred colleges and courses",
    "Step 4: Merit List – based on NEET UG score and rank",
    "Step 5: Seat Allotment – seats allotted based on merit and preferences",
    "Step 6: Reporting to Allotted College – complete admission formalities",
  ];

  const registrationFees = [
    ["General Category (UR)", "₹500 (non-refundable)"],
    ["Reserved Category (SC/ST/SCA)", "₹250 (non-refundable)"],
  ];

  const documentsRequired = [
    "NEET UG Admit Card and Scorecard",
    "12th Mark Sheet and Certificate",
    "10th Mark Sheet and Certificate (age proof)",
    "Transfer Certificate (TC)",
    "Community Certificate (for SC/ST/OBC)",
    "Birth Certificate (if required)",
    "Domicile Certificate (for TamilNadu residents)",
    "Aadhar Card",
    "Passport-size Photographs",
    "Income Certificate (if applicable)",
    "Medical Certificate (for differently-abled candidates, if applicable)",
    "Copy of Online Registration Application",
  ];

  const reservation = [
    ["General (Open Category)", "31%"],
    ["Backward Class (BC)", "26.5%"],
    ["Backward Class Muslims (BCM)", "3.5%"],
    ["Most Backward Class (MBC)", "20%"],
    ["Scheduled Caste (SC)", "18%"],
    ["Scheduled Tribe (ST)", "1%"],
    ["Persons with Disabilities (PWD)", "5%"],
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
        title="MBBS in TamilNadu - NEET UG Admission & Top College"
        description="Complete guide for MBBS admission in TamilNadu with eligibility, counselling, reservation, fees, and top medical colleges."
        keywords={[
          "MBBS TamilNadu",
          "NEET UG TamilNadu",
          "TamilNadu Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Tamil-Nadu"
      />

      <Header
        title="MBBS in TamilNadu"
        subtitle="Top Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in TamilNadu with eligibility, counselling, reservation, and top colleges."
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
                  state === "TamilNadu"
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
              In TamilNadu, MBBS is offered by several government and private
              colleges. Admission is based on NEET UG results, with a
              combination of state quota and All India Quota (AIQ) seats.
            </p>
            <p className="leading-relaxed text-gray-700 mb-4 font-semibold">
              Global Edulogy – Expert Guidance for MBBS Admission in TamilNadu
            </p>
            <p className="leading-relaxed text-gray-700 mb-4">
              Global Edulogy helps students navigate NEET UG counselling,
              ensuring a smooth admission process in top TamilNadu medical
              colleges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in TamilNadu
            </h2>
            {renderTable(privateColleges, [
              "S.No",
              "College Name",
              "Est. Year",
              "MBBS Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in TamilNadu
            </h2>
            {renderTable(governmentColleges, [
              "S.No",
              "College Name",
              "Est. Year",
              "Seats",
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
              NEET UG Counselling Steps
            </h2>
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
            <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-1">
              {documentsRequired.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Reservation of Seats
            </h2>
            {renderTable(reservation, ["Category", "Reservation (%)"])}
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

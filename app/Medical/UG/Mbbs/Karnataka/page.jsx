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
    [1, "St John Medical College, Bangalore", 1963, 150],
    [2, "Kempegowda Institute of Medical Sciences, Bangalore", 1980, 150],
    [
      3,
      "Vydehi Institute of Medical Science and Research Centre, Bangalore",
      2002,
      250,
    ],
    [
      4,
      "Father Muller Institute of Med. Education & Research, Mangalore",
      1999,
      150,
    ],
    [5, "Dr. B.R. Ambedkar Medical College, Bangalore", 1980, 150],
    [
      6,
      "Sri Madhusudan Sai Institute of Medical Sciences and Research, Chikkaballapura",
      2023,
      50,
    ],
    [7, "BGS Global Institute of Medical Sciences, Bangalore", 2013, 150],
    [8, "A.J. Institute of Medical Sciences, Mangalore", 2002, 150],
    [9, "M.V.J Medical College and Research Hospital, Bangalore", 1997, 150],
    [
      10,
      "The Oxford Medical College Hospital and Research Center, Hobli",
      2014,
      150,
    ],
    [
      11,
      "Akash Institute of Medical Sciences and Research Centre, Bangalore",
      2016,
      150,
    ],
    [
      12,
      "Jaya Jagadguru Murugharajendra Medical College, Davangere",
      1965,
      245,
    ],
    [13, "Mahadevappa Rampure Medical College, Kalaburgi", 1963, 150],
    [
      14,
      "East Point College of Medical Sciences and Research Center, Bangalore",
      2017,
      150,
    ],
    [
      15,
      "Srinivasa Institute of Medical Research Centre, Mangalore",
      2011,
      150,
    ],
    [
      16,
      "Shymanuru Shivashankarappa Institute Of Medical Sciences, Davangere",
      1958,
      150,
    ],
    [
      17,
      "Kanachur Institute of Medical Sciences and Research Centre, Mangalore",
      2016,
      150,
    ],
    [18, "Al-Ameen Medical College, Vijayapur", 1984, 150],
    [
      19,
      "Sri Basaveshwara Medical College and Hospital, Chitradurga",
      1999,
      150,
    ],
    [
      20,
      "S. Nijalingappa Medical College and Research Centre, Bagalkot",
      2002,
      250,
    ],
    [
      21,
      "Shridevi Institute of Medical Sciences and Research Hospital, Tumkur",
      2013,
      150,
    ],
    [22, "Navodaya Medical College, Raichur", 2002, 200],
    [
      23,
      "Siddaganga Medical College and Research Institute, Tumakuru",
      2022,
      150,
    ],
    [
      24,
      "K. Venkataramana Gowda Medical College and Hospital, Kannada",
      1999,
      150,
    ],
    [25, "Subbaiah Institute of Medical Science, Shimoga", 2012, 150],
    [
      26,
      "Sri Chamundeshwari Medical College and Hospital, Ramanagara",
      2023,
      150,
    ],
    [
      27,
      "S R Patil Medical College Hospital and Research Center, Bagalkot",
      2024,
      150,
    ],
    [28, "M.S. Ramaiah Medical College, Bangalore", 1979, 150],
    [
      29,
      "Khaja Bande Navaz Institute Of Medical Sciences, Gulbarga",
      2000,
      150,
    ],
    [30, "SDM College of Medical Sciences and Hospital, Dharwad", 2003, 150],
    [31, "Sapthagiri Institute of Medical Sciences, Bangalore", 2011, 250],
    [32, "BGS Medical College and Hospital, Bangalore", 2012, 150],
    [
      33,
      "PES University Institute of Medical Sciences and Research, Bangalore",
      2024,
      150,
    ],
    [
      34,
      "Dr. Chandramma Dayananda Sagar Institute of Medical Education, Hobli",
      2020,
      150,
    ],
    [35, "Adichunchanagiri Institute of Medical Sciences, Mandya", 1985, 250],
  ];

  const govtColleges = [
    [1, "Bangalore Medical College, Bangalore", 1955, 250],
    [2, "Mysore Medical College, Mysore", 1924, 200],
    [
      3,
      "Shri Atal Bihari Vajpayee Institute of Medical Science, Bengaluru",
      2019,
      150,
    ],
    [4, "Karnataka Institute of Medical Sciences, Hubli", 1957, 200],
    [5, "ESI Medical College, Bangalore", 2012, 150],
    [6, "Mandya Institute of Medical Sciences, Mandya", 2006, 150],
    [7, "Gulbarga Institute of Medical Sciences, Gulbarga", 2015, 150],
    [8, "Belgaum Institute of Medical Sciences", 2006, 150],
    [9, "Vijayanagar Institute of Medical Sciences, Bellary", 1961, 200],
    [10, "Shimoga Institute of Medical Sciences, Shimoga", 2007, 150],
    [
      11,
      "Hassan Institute of Medical Sciences and Hospital, Hassan",
      2006,
      150,
    ],
    [12, "ESI Medical College, Gulbarga", 2013, 150],
    [13, "Gadag Institute of Medical Sciences, Gadag", 2015, 150],
    [
      14,
      "Chamarajanagar Institute of Medical Science, Chamarajanagar",
      2016,
      150,
    ],
    [15, "Raichur Institute of Medical Sciences, Raichur", 2007, 150],
    [16, "Bidar Institute of Medical Sciences, Bidar", 2007, 150],
    [17, "Koppal Institute of Medical Sciences, Koppal", 2015, 150],
    [
      18,
      "Chikkaballapura Institute of Medical Science, Chikkaballapura",
      2021,
      100,
    ],
    [19, "Kodagu Institute of Medical Sciences, Madikeri", 2016, 150],
    [20, "Karwar Institute of Medical Science, Uttar Kannada", 2016, 150],
    [
      21,
      "Chikkamagaluru Institute of Medical Sciences, Chikkamagaluru",
      2022,
      150,
    ],
    [22, "Haveri Institute of Medical Sciences, Haveri", 2022, 150],
    [23, "Yadgiri Institute of Medical Sciences, Yadgiri", 2022, 150],
    [
      24,
      "Chitradurga Medical College and Research Institute, Chitradurga",
      2023,
      150,
    ],
  ];

  const counsellingHighlights = [
    ["Counselling Name", "KEA CET Karnataka"],
    ["Conducting Bodies", "Karnataka Examinations Authority (KEA)"],
    ["NEET Counselling Type", "NEET UG Counselling"],
    [
      "Official Counselling Website",
      "https://cetonline.karnataka.gov.in/kea/indexnew",
    ],
  ];

  const eligibility = [
    ["NEET Qualification", "Must have appeared and qualified for NEET UG 2025"],
    ["Nationality", "Indian or NRI/OCI/PIO"],
    ["Age Limit", "Minimum 17 years in admission year"],
    ["Academic Qualification", "12th with Physics, Chemistry, Biology"],
    ["Minimum Marks", "As per NEET UG percentile criteria"],
    ["Local/Non-Local", "Must satisfy state quota criteria"],
  ];

  const domicile = [
    "Studied in Karnataka for at least 7 years or native to Karnataka",
    "Children of Karnataka residents or government employees are eligible",
    "Hyderabad-Karnataka (HK) quota: Residents of six HK districts with eligibility certificate under Article 371(J)",
    "SC/ST/OBC children from Karnataka are also eligible",
  ];

  const documents = [
    "NEET UG Confirmation Page",
    "NEET UG Admit Card & Rank Card",
    "Class 10 & 12 Mark Sheets and Certificates",
    "Identity Proof (Aadhar, Passport, etc.)",
    "Caste/Category Certificate (if applicable)",
    "Domicile Certificate (if applicable)",
    "Passport-size Photographs",
  ];

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Karnataka - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Karnataka with government and private colleges, eligibility, counselling, and NEET UG 2025."
        keywords={["MBBS Karnataka", "NEET UG Karnataka", "KEA MBBS Colleges"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Karnataka"
      />

      <Header
        title="MBBS in Karnataka"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Karnataka with eligibility criteria, counselling process, and top colleges."
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
                  state === "Karnataka"
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
              Karnataka, one of the leading states in India in terms of
              educational infrastructure, offers excellent opportunities for
              students seeking to pursue a career in medicine. The state is home
              to several top-tier government and private medical colleges that
              offer MBBS programs. With its rich academic history, world-class
              facilities, and a blend of theoretical knowledge and practical
              experience, Karnataka has become a preferred destination for
              medical aspirants from across the country.
            </p>
          </section>

          {/* Private Colleges Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Karnataka
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">S. No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">
                      Establishment Year
                    </th>
                    <th className="p-3 text-left font-medium">Seat Intake</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {privateColleges.map(([sl, name, year, seats]) => (
                    <tr key={sl}>
                      <td className="p-3">{sl}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Government Colleges Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Karnataka
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">S. No.</th>
                    <th className="p-3 text-left font-medium">College</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {govtColleges.map(([sl, name, year, seats]) => (
                    <tr key={sl}>
                      <td className="p-3">{sl}</td>
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
              Karnataka NEET UG Counselling 2025 Highlights
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

          {/* Domicile Criteria */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Domicile Criteria</h2>
            <ul className="list-disc pl-6 space-y-1">
              {domicile.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Documents Required */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for Counselling
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {documents.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

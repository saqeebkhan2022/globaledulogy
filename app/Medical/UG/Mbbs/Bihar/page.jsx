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

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="NEET UG Counselling for MBBS in Bihar"
        description="Step-by-step guidance for MBBS admission in Bihar through NEET UG Counselling"
        keywords={["NEET", "UG", "Counselling", "MBBS", "Admission", "Bihar"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs"
      />

      <Header
        title="NEET UG Counselling in Bihar - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Bihar"
        description="Complete guide for NEET UG counselling in Bihar including eligibility, seat matrix, and registration process."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Click your state below to check counselling details, seat matrix,
            eligibility, and registration process.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm ${
                  state === "Bihar"
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
            <h1 className="text-3xl font-bold mb-4">MBBS Education in Bihar</h1>
            <p className="leading-relaxed text-gray-700">
              Bihar is one of the key states in India for pursuing MBBS, home to
              some of the oldest and most reputed medical colleges. These
              institutions provide high-quality education, extensive clinical
              exposure, and training to aspiring doctors. Admission is based on
              NEET UG scores, making Bihar a preferred choice for medical
              aspirants.
            </p>
          </section>

          {/* Private Medical Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Bihar
            </h2>
            <p className="mb-4">
              Bihar has 9 private medical colleges offering MBBS courses, all
              accepting NEET UG scores. Top colleges include Narayan Medical
              College & Hospital, Sasaram, Mata Gujri Memorial College,
              Kishanganj, and Katihar Medical College, Katihar.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">
                      Establishment Year
                    </th>
                    <th className="p-3 text-left font-medium">Total Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    [1, "Katihar Medical College, Katihar", 1987, 150],
                    [
                      2,
                      "Mata Gujri Memorial Medical College, Kishanganj",
                      1990,
                      150,
                    ],
                    [
                      3,
                      "Narayan Medical College & Hospital, Sasaram",
                      2008,
                      150,
                    ],
                    [
                      4,
                      "Lord Buddha Koshi Medical College and Hospital, Saharsa",
                      2012,
                      250,
                    ],
                    [
                      5,
                      "Shree Narayan Medical Institute and Hospital, Saharsa",
                      2021,
                      150,
                    ],
                    [
                      6,
                      "Madhubani Medical College & Hospital, Madhubani",
                      2019,
                      150,
                    ],
                    [
                      7,
                      "Netaji Subhas Medical College and Hospital, Patna",
                      2020,
                      100,
                    ],
                    [
                      8,
                      "RDJM Medical College & Hospital, Muzaffarpur",
                      2021,
                      150,
                    ],
                    [
                      9,
                      "Himalaya Medical College and Hospital, Patna",
                      2008,
                      150,
                    ],
                  ].map(([slno, name, year, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Government Medical Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Bihar
            </h2>
            <p className="mb-4">
              Bihar has 13 prestigious government medical colleges, including
              AIIMS Patna, offering top-quality MBBS education.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Total Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    [1, "Government Medical College, Bettiah", 2014, 120],
                    [2, "Patna Medical College, Patna", 1925, 200],
                    [
                      3,
                      "Indira Gandhi Institute of Medical Sciences, Patna",
                      2011,
                      150,
                    ],
                    [4, "Nalanda Medical College, Patna", 1970, 150],
                    [5, "Darbhanga Medical College, Leheriasarai", 1946, 120],
                    [
                      6,
                      "Anugrah Narayan Magadh Medical College and Hospital, Gaya",
                      1970,
                      120,
                    ],
                    [
                      7,
                      "Bhagwan Mahavir Institute of Medical Sciences, Nalanda",
                      2013,
                      120,
                    ],
                    [8, "Sri Krishna Medical College, Muzaffarpur", 1970, 120],
                    [
                      9,
                      "Jawaharlal Nehru Medical College and Hospital, Bhagalpur",
                      1971,
                      120,
                    ],
                    [
                      10,
                      "Jannayak Karpoori Thakur Medical College and Hospital, Madhepura",
                      2020,
                      100,
                    ],
                    [11, "Government Medical College, Purnea", 2023, 100],
                  ].map(([slno, name, year, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              NEET UG Counselling in Bihar
            </h2>
            <p className="mb-4">
              Managed by BCECEB, Bihar NEET UG counselling allocates seats based
              on NEET scores, preferences, and state domicile rules.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Qualified NEET UG 2025</li>
              <li>Minimum age: 17 years by Dec 31, 2025</li>
              <li>
                Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and
                English
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Domicile Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Resident of Bihar or parents are Bihar residents/refugees
                settled in Bihar
              </li>
              <li>Children of Bihar Government employees</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Process
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Online Registration on BCECEB portal</li>
              <li>Choice Filling</li>
              <li>Seat Allotment in multiple rounds</li>
              <li>Document Verification at designated centres</li>
              <li>Reporting to Allotted College</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Fees
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>General: ₹1,000</li>
              <li>SC/ST: ₹500</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG Admit Card & Scorecard</li>
              <li>Class 10 & 12 Mark Sheets/Certificates</li>
              <li>Domicile Certificate</li>
              <li>Caste Certificate (if applicable)</li>
              <li>Photo ID (Aadhar, Voter ID, etc.)</li>
              <li>Passport-sized Photographs</li>
              <li>Income Certificate (if applicable)</li>
              <li>Disability Certificate (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Seat Reservation in Bihar
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>SC: 16%</li>
              <li>ST: 1%</li>
              <li>EBC: 18%</li>
              <li>BC: 12%</li>
              <li>Reserved Category Girls: 3% of total seats per category</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

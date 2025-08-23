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

  const govtColleges = [
    [1, "BPS Government Medical College for Women, Sonepat", 2012, 120],
    [2, "Kalpana Chawla Govt. Medical College, Karnal", 2017, 120],
    [3, "Maharaja Agrasen Medical College, Agroha, Hisar", 2002, 100],
    [4, "Pandit Bhagwat Dayal Sharma PGIMS, Rohtak", 1960, 250],
    [
      5,
      "Sh. Atal Bihari Vajpayee Govt. Medical College, Chhainsa, Faridabad",
      2020,
      100,
    ],
    [
      6,
      "Shaheed Hasan Khan Mewati Govt. Medical College, Nalhar, Mewat",
      2013,
      120,
    ],
  ];

  const privateColleges = [
    [
      1,
      "Adesh Medical College & Hospital, Shahbad (M), Kurukshetra",
      2017,
      150,
    ],
    [
      2,
      "Al-Falah School of Medical Science & Research Centre, Faridabad",
      2019,
      150,
    ],
    [
      3,
      "Faculty of Medicine & Health Sciences, SGT University, Gurugram",
      2010,
      150,
    ],
    [
      4,
      "Maharishi Markandeshwar College of Medical Sciences and Research, Sadhopur",
      2023,
      150,
    ],
    [5, "NC Medical College & Hospital, Israna, Panipat", 2016, 150],
    [6, "World College of Medical Sciences and Research, Jhajjar", 2016, 150],
  ];

  return (
    <>
      <SEO
        title="MBBS in Haryana - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Haryana with government and private colleges, NEET UG counselling details, eligibility, fees, and important dates."
        keywords={[
          "MBBS Haryana",
          "NEET UG Haryana",
          "Haryana Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/haryana"
      />

      <Header
        title="MBBS in Haryana"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Haryana with details on eligibility, counselling process, fees, reservation, and top colleges."
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
                  state === "Haryana"
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
              Haryana hosts several prestigious medical colleges offering MBBS
              programs with excellent education and clinical training.
              Institutions are affiliated with universities like Pandit Bhagwat
              Dayal Sharma University of Health Sciences and provide
              state-of-the-art facilities, experienced faculty, and hands-on
              hospital training. Admission is based on NEET UG scores.
            </p>
          </section>

          {/* Private Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Haryana
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {privateColleges.map(([slno, name, estd, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{estd}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Haryana
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {govtColleges.map(([slno, name, estd, seats]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{estd}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* NEET UG Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Haryana NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Counselling for MBBS admissions in Haryana is conducted by DMER
              for government and private medical colleges. The process includes
              multiple rounds based on merit, reservation policies, and seat
              availability.
            </p>

            {/* Counselling Highlights */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Highlights
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Conducting Body</td>
                    <td className="p-3">DMER, Haryana</td>
                  </tr>
                  <tr>
                    <td className="p-3">Mode of Counselling</td>
                    <td className="p-3">Online</td>
                  </tr>
                  <tr>
                    <td className="p-3">Admission Criteria</td>
                    <td className="p-3">NEET UG 2025 Score</td>
                  </tr>
                  <tr>
                    <td className="p-3">Total Rounds</td>
                    <td className="p-3">
                      Round 1, Round 2, Mop-up Round, Stray Vacancy Round
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Seat Allocation</td>
                    <td className="p-3">
                      85% State Quota for Haryana domicile | 15% AIQ
                      <br />
                      Private Colleges: 50% state quota + 50% management quota
                      (including 15% NRI seats)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Official Website</td>
                    <td className="p-3">dmer.haryana.gov.in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tentative Counselling Dates */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Tentative Counselling Schedule
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Tentative Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Online Registration Begins</td>
                    <td className="p-3">August 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Choice Filling & Locking</td>
                    <td className="p-3">To be announced</td>
                  </tr>
                  <tr>
                    <td className="p-3">Round 1 Seat Allotment</td>
                    <td className="p-3">To be announced</td>
                  </tr>
                  <tr>
                    <td className="p-3">Document Verification & Reporting</td>
                    <td className="p-3">To be announced</td>
                  </tr>
                  <tr>
                    <td className="p-3">Subsequent Rounds</td>
                    <td className="p-3">Based on seat availability</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Eligibility Criteria */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indian citizen</li>
              <li>Minimum age: 17 years as of 31 Dec 2025</li>
              <li>
                Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and
                English
              </li>
              <li>
                Minimum marks in PCB: General 50%, SC/ST/OBC 40%, PwD(Gen) 45%
              </li>
              <li>Must have qualified NEET UG 2025</li>
            </ul>

            {/* Domicile Criteria */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Domicile Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Bona fide residents of Haryana with schooling in the state
              </li>
              <li>
                Haryana residents studying outside state can apply under state
                quota
              </li>
              <li>
                Other state candidates can apply for management/NRI quota in
                private colleges
              </li>
            </ul>

            {/* Registration Fees */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Fees
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fees (₹)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">General Category</td>
                    <td className="p-3">4,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC/BC/EWS (Haryana Domicile)</td>
                    <td className="p-3">1,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">NRI Candidates</td>
                    <td className="p-3">10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Reservation */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Reservation Criteria (State Quota)
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">
                      Reservation (%)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">SC</td>
                    <td className="p-3">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Backward Classes Block A</td>
                    <td className="p-3">16%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Backward Classes Block B</td>
                    <td className="p-3">11%</td>
                  </tr>
                  <tr>
                    <td className="p-3">PwD</td>
                    <td className="p-3">3%</td>
                  </tr>
                  <tr>
                    <td className="p-3">EWS</td>
                    <td className="p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Freedom Fighter / Ex-Servicemen</td>
                    <td className="p-3">As per Haryana Govt. rules</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Documents Required */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2025 Admit Card & Scorecard</li>
              <li>10th & 12th Marksheet & Passing Certificate</li>
              <li>Haryana Domicile Certificate</li>
              <li>Caste Certificate (if applicable)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Character Certificate</li>
              <li>Migration Certificate</li>
              <li>Proof of Fee Payment</li>
              <li>Recent Passport-sized Photographs</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

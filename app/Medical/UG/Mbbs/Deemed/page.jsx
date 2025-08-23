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

  const deemedColleges = [
    [
      1,
      "Kasturba Medical College, Manipal",
      1953,
      250,
      "₹ 17,70,000",
      "$ 49,400",
    ],
    [
      2,
      "Symbiosis Medical College for Women, Pune",
      1971,
      150,
      "₹ 10,00,000",
      "$ 40,645",
    ],
    [
      3,
      "Hamdard Institute of Medical Sciences and Research, Delhi",
      2012,
      150,
      "₹ 16,00,000",
      "$ 45,000",
    ],
    [
      4,
      "Kasturba Medical College, Mangalore",
      1953,
      250,
      "₹ 17,70,000",
      "$ 37,100",
    ],
    [
      5,
      "Manipal Tata Medical College, Jamshedpur",
      2020,
      150,
      "₹ 16,19,000",
      "$ 28,900",
    ],
    [6, "JSS Medical College, Mysuru", 1981, 250, "₹ 18,50,000", "$ 46,000"],
    [
      7,
      "Rural Medical College and Pims, Loni",
      1984,
      200,
      "₹ 17,50,000",
      "$ 1,06,700",
    ],
    [
      8,
      "K.S Hegde Medical Academy, Mangaluru",
      1999,
      250,
      "₹ 17,84,500",
      "₹ 28,39,000",
    ],
    [
      9,
      "Jawahar Lal Nehru Medical College, Belagavi",
      1963,
      200,
      "₹ 19,20,000",
      "$ 45,500",
    ],
    [
      10,
      "Institute of Medical Sciences & SUM Hospital, Phulnakhara",
      2024,
      150,
      "₹ 14,95,000",
      "$ 36,000",
    ],
    // Add the remaining colleges similarly...
  ];

  return (
    <>
      <SEO
        title="Deemed MBBS Colleges in India - MCC Counselling"
        description="Complete guide for MBBS admission in Deemed Universities in India through MCC Counselling"
        keywords={[
          "MBBS",
          "Deemed University",
          "MCC Counselling",
          "Admission",
          "NEET",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Deemed"
      />

      <Header
        title="Deemed MBBS Colleges in India"
        subtitle="High-quality medical education and MCC counselling guide for Deemed Universities"
        description="Check the complete list of Deemed MBBS Colleges, eligibility, counselling process, fees, and required documents for admission through MCC."
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
                  state === "Deemed"
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
              Pursuing MBBS in Deemed Universities ensures top-quality
              education, modern infrastructure, and excellent clinical exposure.
              India has several Deemed Medical Colleges recognized by NMC that
              offer high-standard medical training.
            </p>
          </section>

          {/* Deemed Colleges Table */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Deemed MBBS College List
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">Total Seats</th>
                    <th className="p-3 text-left font-medium">
                      Management Fees
                    </th>
                    <th className="p-3 text-left font-medium">NRI Fees</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {deemedColleges.map(([slno, name, year, seats, mgt, nri]) => (
                    <tr key={name} className="hover:bg-orange-50 transition">
                      <td className="p-3">{slno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                      <td className="p-3">{mgt}</td>
                      <td className="p-3">{nri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* MCC Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              MCC Counselling for Deemed Universities
            </h2>
            <p className="mb-4">
              The Medical Counselling Committee (MCC) conducts centralized
              counselling for MBBS admissions in Deemed Universities under the
              All India Quota (AIQ). Admissions are based on NEET UG scores.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Highlights</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conducting Authority: MCC (Medical Counselling Committee)</li>
              <li>Courses Covered: MBBS and BDS</li>
              <li>
                Participating Institutes: All Deemed Universities in India
              </li>
              <li>Mode of Counselling: Online</li>
              <li>
                Official Website:{" "}
                <a
                  href="https://mcc.nic.in"
                  className="text-blue-600 underline"
                >
                  mcc.nic.in
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Qualified NEET UG 2024</li>
              <li>
                Minimum Marks: General 50th percentile, SC/ST/OBC 40th
                percentile
              </li>
              <li>
                Nationality: Indian Nationals, NRIs, OCIs, PIOs, and Foreign
                Nationals eligible
              </li>
              <li>Minimum Age: 17 years by December 31, 2024</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Process
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Online Registration:</strong> Register at MCC portal
                with NEET UG roll number and pay the counselling fee.
              </li>
              <li>
                <strong>Choice Filling & Locking:</strong> Select and lock
                preferred Deemed Universities.
              </li>
              <li>
                <strong>Seat Allotment:</strong> Based on NEET scores,
                preferences, and seat availability. Download allotment letter.
              </li>
              <li>
                <strong>Reporting to College:</strong> Report to allotted
                college, complete document verification, and pay admission fee.
              </li>
              <li>
                <strong>Subsequent Rounds:</strong> Round 2, Mop-Up Round, and
                Stray Vacancy Round for unfilled seats.
              </li>
            </ol>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Tentative Counselling Dates 2025
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
                    <td className="p-3">Registration for Round 1</td>
                    <td className="p-3">June 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Choice Filling & Locking</td>
                    <td className="p-3">June 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Round 1 Seat Allotment Result</td>
                    <td className="p-3">Late June 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Reporting to College</td>
                    <td className="p-3">Early July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Round 2 Registration</td>
                    <td className="p-3">Mid-July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Mop-Up Round</td>
                    <td className="p-3">August 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Stray Vacancy Round</td>
                    <td className="p-3">September 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Fee Structure
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                General: Non-refundable ₹5,000, Refundable Security Deposit
                ₹2,00,000
              </li>
              <li>
                NRI/OCI/PIO: Non-refundable ₹5,000, Refundable Security Deposit
                ₹2,00,000
              </li>
              <li>
                Security deposit forfeited if candidate fails to join allotted
                college
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2024 Admit Card & Scorecard</li>
              <li>Class 10 & 12 Mark Sheets & Certificates</li>
              <li>Birth Certificate</li>
              <li>Caste Certificate (if applicable)</li>
              <li>NRI/OCI/PIO documents (if applicable)</li>
              <li>Passport-size Photographs</li>
              <li>Valid ID Proof (Aadhaar/PAN/Passport)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Why Choose Deemed Universities?
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>High-Quality Education and Modern Infrastructure</li>
              <li>Exposure to Modern Medical Practices</li>
              <li>Diverse Student Community</li>
              <li>Access to Experienced Faculty and Hospitals</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

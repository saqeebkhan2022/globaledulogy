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
    [1, "BJ Medical College, Ahmedabad", 1946, 250],
    [2, "Government Medical College, Vadodara", 1949, 250],
    [3, "Government Medical College, Surat", 1965, 250],
    [4, "Pandit Deendayal Upadhyay Medical College, Rajkot", 1995, 200],
    [5, "MP Shah Medical College, Jamnagar", 1955, 250],
    [6, "NAMO Medical Education and Research Institute, Silvassa", 2019, 177],
    [7, "Government Medical College, Bhavnagar", 1995, 200],
    [8, "GMERS Medical College, Sola Ahmedabad", 2011, 200],
    [9, "GMERS Medical College, Gandhinagar", 2012, 200],
    [10, "GMERS Medical College, Gotri Vadodara", 2011, 200],
    [11, "GMERS Medical College, Valsad", 2012, 200],
    [12, "GMERS Medical College, Junagadh", 2015, 200],
    [13, "GMERS Medical College, Himmatnagar", 2015, 200],
    [14, "GMERS Medical College, Morbi", 2022, 100],
    [15, "GMERS Medical College, Dharpur Patan", 2012, 200],
    [16, "GMERS Medical College, Vadnagar", 2017, 200],
    [17, "GMERS Medical College, Navsari", 2022, 100],
    [18, "GMERS Medical College, Porbandar", 2022, 100],
    [19, "GMERS Medical College, Rajpipla", 2022, 100],
    [20, "GMERS Medical College, Godhra", 2022, 100],
  ];

  const privateColleges = [
    [1, "Smt. NHL Municipal Medical College, Ahmedabad", 1963, 250],
    [2, "GCS Medical College, Ahmedabad", 2011, 150],
    [3, "Narendra Modi Medical College, Ahmedabad", 2009, 200],
    [4, "C. U. Shah Medical College, Surendranagar", 2000, 100],
    [5, "Banas Medical College & Research Institute, Palanpur", 2018, 200],
    [6, "Gujarat Adani Institute of Medical Sciences, Bhuj", 2009, 150],
    [
      7,
      "Dr. Kiran C. Patel Medical College & Research Institute, Bharuch",
      2020,
      200,
    ],
    [8, "Pramukhswami Medical College, Karamsad", 1987, 150],
    [9, "Shantabaa Medical College, Amreli", 2019, 150],
    [10, "Kiran Medical College, Surat", 2023, 150],
    [
      11,
      "Dr. M. K. Shah Medical College and Research Centre, Ahmedabad",
      2017,
      150,
    ],
    [
      12,
      "Dr. N. D. Desai Faculty of Medical Science and Research, Nadiad",
      2019,
      200,
    ],
    [13, "SAL Institute of Medical Sciences, Ahmedabad", 2023, 150],
    [14, "Nootan Medical College & Research Centre, Visnagar", 2019, 150],
    [15, "Ananya College of Medicine and Research, Kalol", 2023, 150],
    [
      16,
      "Swaminarayan Institute of Medical Sciences & Research, Kalol",
      2023,
      150,
    ],
    [17, "Zydus Medical College and Hospital, Dahod", 2018, 200],
    [
      18,
      "Parul Institute Of Medical Sciences & Research, Limda, Vadodara",
      2016,
      150,
    ],
    [19, "Bhagyoday Medical College, Kadi, Mehsana", 2024, 100],
  ];

  return (
    <>
      <SEO
        title="MBBS in Gujarat - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Gujarat with government and private colleges, NEET UG counselling details, eligibility, fees, and important dates."
        keywords={[
          "MBBS Gujarat",
          "NEET UG Gujarat",
          "Gujarat Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Gujarat"
      />

      <Header
        title="MBBS in Gujarat"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Gujarat with details on eligibility, counselling process, fees, reservation, and top colleges."
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
                  state === "Gujarat"
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
              Gujarat is a top destination for MBBS aspirants, offering
              high-quality government and private medical colleges with advanced
              hospital facilities. Students gain extensive clinical exposure and
              hands-on training. Many hospitals also provide stipends for
              interns, enhancing the learning experience.
            </p>
          </section>

          {/* Government Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Gujarat
            </h2>
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

          {/* Private Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Gujarat
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">
                      College Name & Location
                    </th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">
                      Total MBBS Seats
                    </th>
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

          {/* NEET UG Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Gujarat NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Counselling for MBBS admission in Gujarat is conducted by ACPUGMEC
              based on NEET UG 2025 scores.
            </p>

            {/* Counselling Highlights */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Highlights
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Feature</th>
                    <th className="p-3 text-left font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Conducting Authority</td>
                    <td className="p-3">ACPUGMEC</td>
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
                    <td className="p-3">Counselling Rounds</td>
                    <td className="p-3">
                      Round 1, Round 2, Mop-Up, Stray Vacancy
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Seat Allocation</td>
                    <td className="p-3">
                      85% State Quota, 15% All India Quota
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Official Website</td>
                    <td className="p-3">medadmgujarat.org</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tentative Counselling Dates */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Tentative Counselling Dates
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Expected Date (2025)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Online Registration Starts</td>
                    <td className="p-3">July – August</td>
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
                    <td className="p-3">Document Verification</td>
                    <td className="p-3">To be announced</td>
                  </tr>
                  <tr>
                    <td className="p-3">Further Rounds</td>
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
              <li>Must qualify NEET UG 2025 with required percentile</li>
              <li>
                Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and
                English
              </li>
              <li>Minimum age: 17 years as of 31 Dec 2025</li>
              <li>No upper age limit as per NEET regulations</li>
              <li>State quota candidates must meet domicile requirements</li>
            </ul>

            {/* Reservation Criteria */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Reservation Criteria
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
                    <td className="p-3">7%</td>
                  </tr>
                  <tr>
                    <td className="p-3">ST</td>
                    <td className="p-3">15%</td>
                  </tr>
                  <tr>
                    <td className="p-3">SEBC</td>
                    <td className="p-3">27%</td>
                  </tr>
                  <tr>
                    <td className="p-3">EWS</td>
                    <td className="p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3">PwD</td>
                    <td className="p-3">5% within each category</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Registration Fees */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Fees
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fee (₹)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">General/OBC</td>
                    <td className="p-3">1,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC/ST</td>
                    <td className="p-3">500</td>
                  </tr>
                  <tr>
                    <td className="p-3">NRI Candidates</td>
                    <td className="p-3">Higher as per ACPUGMEC</td>
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
              <li>Class 10 & 12 Mark Sheets and Passing Certificates</li>
              <li>Category Certificate (if applicable)</li>
              <li>Gujarat Domicile Certificate (for state quota)</li>
              <li>Transfer Certificate (TC)</li>
              <li>Character Certificate</li>
              <li>Passport-size Photographs</li>
              <li>Identity Proof (Aadhar Card, PAN, etc.)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

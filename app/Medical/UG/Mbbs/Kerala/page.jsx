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
    [1, "Govt. Medical College, Manjeri", 2013, 110],
    [2, "Govt. Medical College, Parippally, Kollam", 2017, 110],
    [3, "Govt. Medical College, Ernakulam", 2000, 110],
    [4, "Government Medical College, Palakkad", 2014, 100],
    [5, "Govt. Medical College, Kottayam", 1960, 175],
    [6, "Govt. Medical College, Kozhikkode", 1957, 250],
    [7, "Govt. Medical College, Thrissur", 1981, 175],
    [8, "Govt. Medical College, Thiruvananthapuram", 1951, 250],
    [9, "T D Govt. Medical College, Alappuzha", 1963, 175],
    [10, "Government Medical College, Kannur", 1995, 100],
    [11, "Government Medical College, Idukki", 2022, 100],
    [12, "Government Medical College, Konni, Pathanamthitta", 2022, 100],
  ];

  const privateColleges = [
    [1, "Jubilee Mission Medical College, Thrissur", 2002, 100],
    [2, "Amala Institute of Medical Sciences, Thrissur", 2002, 100],
    [3, "Believers Church Medical College Hospital, Thiruvalla", 2016, 100],
    [
      4,
      "Malankara Orthodox Syrian Church Medical College, Kolenchery",
      2001,
      100,
    ],
    [5, "Pushpagiri Institute of Medical Sciences, Thiruvalla", 2002, 100],
    [6, "MES Medical College, Perinthalmanna, Malappuram", 2002, 150],
    [
      7,
      "Sree Gokulam Medical College, Venjaramoodu, Thiruvananthapuram",
      2005,
      150,
    ],
    [8, "KMCT Medical College, Mukkom, Kozhikode", 2008, 250],
    [9, "SUT Academy of Medical Sciences, Thiruvananthapuram", 2006, 150],
    [10, "Dr. Somervell Memorial CSI Medical College, Karakonam", 2001, 150],
    [11, "Malabar Medical College Hospital, Kozhikode", 2010, 200],
    [12, "Travancore Medical College, Umayanalloor, Kollam", 2009, 150],
    [13, "P K Das Institute of Medical Sciences, Ottapalam", 2014, 200],
    [
      14,
      "Sree Narayana Institute of Medical Sciences, Chalakka, Ernakulam",
      2009,
      150,
    ],
    [
      15,
      "Azeezia Institute of Medical Sciences, Meyyannoor, Kollam",
      2008,
      100,
    ],
    [16, "Karuna Medical College, Vilayodi, Palakkad", 2006, 100],
    [17, "Dr. Moopen's Medical College, Meppadi, Wayanad", 2013, 150],
    [18, "Mount Zion Medical College, Pathanamthitta", 2014, 150],
    [19, "Al Azhar Medical College, Thodupuzha", 2014, 150],
    [20, "Palakkad Institute of Medical Sciences, Walayar", 2014, 150],
  ];

  return (
    <>
      <SEO
        title="MBBS in Kerala - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Kerala with government and private colleges, eligibility, domicile, fees, reservation, and CAP counselling details."
        keywords={["MBBS Kerala", "NEET UG Kerala", "Kerala Medical Colleges"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Kerala"
      />

      <Header
        title="MBBS in Kerala"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Kerala with eligibility criteria, domicile requirements, counselling process, reservation, and top colleges."
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
                  state === "Kerala"
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
              Pursuing MBBS in Kerala provides access to high-quality medical
              education, well-equipped government and private colleges, and
              affordable fees. The structured CAP counselling process ensures a
              transparent admission system. Kerala’s balanced reservation system
              offers opportunities for students from all backgrounds to secure a
              medical seat.
            </p>
          </section>

          {/* Private Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges
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
              Government Medical Colleges
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

          {/* MBBS Admission */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              MBBS Admission in Kerala
            </h2>
            <p className="mb-4">
              Admission in Kerala is through CAP counselling conducted by CEE
              Kerala. The process includes online registration, application
              submission, option entry, seat allotment, and reporting at the
              allotted college.
            </p>

            {/* Eligibility */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Passed HSE Kerala or equivalent with Physics, Chemistry,
                Biology/Biotechnology, and English.
              </li>
              <li>Minimum 50% marks in PCB (40% for SC/ST, 45% for PwD).</li>
              <li>Qualified NEET-UG with required percentile as per NTA.</li>
            </ul>

            {/* Domicile */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Domicile Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Keralite – Born in Kerala or with at least one parent born in
                Kerala.
              </li>
              <li>
                Non-Keralite I (NK I) – Studied in Kerala ≥5 years or children
                of state employees.
              </li>
              <li>
                Non-Keralite II (NK II) – Indian citizens, eligible only for
                management quota seats.
              </li>
            </ul>

            {/* Documents */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET-UG Admit Card & Scorecard</li>
              <li>Data Sheet from CEE Kerala</li>
              <li>Date of Birth Certificate</li>
              <li>10+2 Mark List</li>
              <li>Transfer & Conduct Certificates</li>
              <li>Migration Certificate (if applicable)</li>
              <li>Physical Fitness Certificate</li>
              <li>Allotment Memo from CEE</li>
              <li>
                Original documents: Nativity, Reservation certificates, etc.
              </li>
            </ul>

            {/* Fees */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Fees
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">General</td>
                    <td className="p-3">625</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC</td>
                    <td className="p-3">250</td>
                  </tr>
                  <tr>
                    <td className="p-3">ST</td>
                    <td className="p-3">No Fee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Reservation */}
            <h3 className="text-xl font-semibold mt-4 mb-2">Reservation</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">
                      Percentage of Seats Reserved
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">All India Quota – Govt. Colleges</td>
                    <td className="p-3">15%</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      All India Quota – Self-Financing Colleges
                    </td>
                    <td className="p-3">15%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Persons with Disabilities (PwD)</td>
                    <td className="p-3">5%</td>
                  </tr>
                  <tr>
                    <td className="p-3">State Merit (SM)</td>
                    <td className="p-3">50%</td>
                  </tr>
                  <tr>
                    <td className="p-3">EWS (General)</td>
                    <td className="p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3">SEBC – Total</td>
                    <td className="p-3">30%</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC</td>
                    <td className="p-3">8%</td>
                  </tr>
                  <tr>
                    <td className="p-3">ST</td>
                    <td className="p-3">2%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Global Edulogy */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Global Edulogy Assistance
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Guided CAP counselling and college selection based on NEET
                  rank.
                </li>
                <li>
                  End-to-end admission support for government and private MBBS
                  colleges.
                </li>
                <li>
                  Documentation verification and assistance for
                  domicile/reservation proofs.
                </li>
                <li>
                  Financial guidance including fee structure and scholarships.
                </li>
                <li>
                  Expert career advice to maximize admission chances in top
                  Kerala colleges.
                </li>
              </ul>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

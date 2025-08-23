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
    [1, "Government Medical College, Srinagar", 1959, 180],
    [2, "Government Medical College, Jammu", 1972, 172],
    [3, "Sher-i-Kashmir Institute of Medical Sciences, Srinagar", 1988, 125],
    [4, "Government Medical College, Baramulla", 2019, 100],
    [5, "Government Medical College, Anantnag", 2019, 100],
    [6, "Government Medical College, Kathua", 2019, 100],
    [7, "Government Medical College, Doda", 2020, 100],
    [8, "Government Medical College, Rajouri", 2019, 100],
    [9, "Government Medical College, Udhampur", 2023, 100],
    [10, "Government Medical College, Handwara", 2023, 100],
  ];

  const privateColleges = [
    [1, "Acharya Shri Chander College of Medical Sciences, Jammu", 1995, 100],
  ];

  return (
    <>
      <SEO
        title="MBBS in Jammu & Kashmir - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Jammu & Kashmir with government and private colleges, NEET UG counselling, eligibility, fees, and reservation details."
        keywords={[
          "MBBS Jammu Kashmir",
          "NEET UG Jammu Kashmir",
          "Jammu Kashmir Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/jammu-kashmir"
      />

      <Header
        title="MBBS in Jammu & Kashmir"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Jammu & Kashmir with eligibility criteria, counselling process, fees, reservation, and top colleges."
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
                  state === "Jammu and Kashmir"
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
              Jammu & Kashmir, known for its breathtaking landscapes, offers
              quality medical education through esteemed government and private
              medical colleges. The state provides excellent academic
              infrastructure, modern hospitals for clinical training, and
              affordable education, making it an attractive destination for MBBS
              aspirants.
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

          {/* NEET UG Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Jammu & Kashmir NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              MBBS admissions in Jammu & Kashmir are conducted through NEET UG
              and managed by JKBOPEE. The process is online and includes
              registration, application submission, document verification, merit
              list preparation, counselling, seat allotment, and reporting for
              admission.
            </p>

            {/* Eligibility */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Passed 10+2 or equivalent with Physics, Chemistry,
                Biology/Biotechnology, and English.
              </li>
              <li>
                Minimum marks: 50% in PCB (40% for SC/ST/RBA/ALC/IB/OSC, 45% for
                PwD).
              </li>
              <li>Must have qualified NEET UG 2025.</li>
            </ul>

            {/* Domicile */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Domicile Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Candidates must be permanent residents of Jammu & Kashmir for
                state quota seats.
              </li>
              <li>
                Non-domicile candidates may apply for AIQ seats in government
                colleges.
              </li>
            </ul>

            {/* Registration & Documents */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG Admit Card & Scorecard</li>
              <li>JKBOPEE Registration/Confirmation Page</li>
              <li>Date of Birth Certificate</li>
              <li>10+2 Marks Certificate</li>
              <li>Domicile Certificate (if applicable)</li>
              <li>Category Certificate (if applicable)</li>
              <li>Character Certificate</li>
              <li>Migration Certificate (if applicable)</li>
              <li>Physical Fitness Certificate</li>
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
                    <th className="p-3 text-left font-medium">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">General</td>
                    <td className="p-3">1,500</td>
                  </tr>
                  <tr>
                    <td className="p-3">Reserved</td>
                    <td className="p-3">1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Reservation */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Reservation Criteria
            </h3>
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
                    <td className="p-3">Open Merit (OM)</td>
                    <td className="p-3">50%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Reserved Categories</td>
                    <td className="p-3">50%</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC</td>
                    <td className="p-3">8%</td>
                  </tr>
                  <tr>
                    <td className="p-3">ST</td>
                    <td className="p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3">RBA</td>
                    <td className="p-3">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3">ALC/IB</td>
                    <td className="p-3">4%</td>
                  </tr>
                  <tr>
                    <td className="p-3">OSC</td>
                    <td className="p-3">2%</td>
                  </tr>
                  <tr>
                    <td className="p-3">CDP</td>
                    <td className="p-3">3%</td>
                  </tr>
                  <tr>
                    <td className="p-3">PSP</td>
                    <td className="p-3">4%</td>
                  </tr>
                  <tr>
                    <td className="p-3">EWS</td>
                    <td className="p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3">PwD</td>
                    <td className="p-3">5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Global Edulogy Section */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                How Global Edulogy Helps
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Personalized Counseling: Tailored guidance based on NEET
                  score, preferences, and eligibility.
                </li>
                <li>
                  Complete Admission Support: From registration to final seat
                  allotment in government or private medical colleges.
                </li>
                <li>
                  NEET UG Counseling Assistance: Full support for Jammu &
                  Kashmir NEET UG counselling, ensuring timely application and
                  accurate documentation.
                </li>
                <li>
                  Financial Guidance: Assistance in availing education loans and
                  scholarships.
                </li>
                <li>
                  Expert Advice: Helping students choose the right college based
                  on academic performance and budget.
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

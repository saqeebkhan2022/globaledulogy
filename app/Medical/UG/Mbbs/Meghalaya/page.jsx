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

  const colleges = [
    [
      1,
      "North Eastern Indira Gandhi Regional Instt. of Health and Medical Sciences, Shillong",
      "Govt.",
      2008,
      50,
    ],
    [
      2,
      "PA Sangma International Medical College & Hospital",
      "Private",
      2024,
      150,
    ],
  ];

  const keyDetails = [
    ["Course Offered", "MBBS"],
    ["Total MBBS Seats", 200],
    ["Admission Based On", "NEET-UG 2025 scores"],
    ["Counseling Authority", "NEIGRIHMS, Shillong"],
    ["Application Mode", "Online (through NEIGRIHMS official website)"],
  ];

  const counsellingDates = [
    ["Online Application Start", "To be announced"],
    ["Last Date for Application", "To be announced"],
    ["Merit List Publication", "To be announced"],
    ["Round 1 Counseling", "To be announced"],
    ["Round 2 Counseling", "To be announced"],
    ["Session Start", "To be announced"],
  ];

  const eligibility = [
    ["Nationality", "Must be an Indian citizen"],
    [
      "Domicile",
      "Permanent resident of Meghalaya with valid domicile certificate",
    ],
    ["Age Limit", "Minimum 17 years as of December 31, 2025"],
    [
      "Educational Qualification",
      "Class 12 with Physics, Chemistry, Biology/Biotechnology, and English",
    ],
    ["Minimum Marks - General", "50% in PCB"],
    ["Minimum Marks - SC/ST/OBC", "40% in PCB"],
    ["Minimum Marks - PwD", "45% in PCB"],
    ["NEET-UG 2025", "Must have qualified with required percentile"],
  ];

  const seatReservation = [
    ["Meghalaya", 14],
    ["Nagaland", 10],
    ["NE Open Category", 18],
    ["All India Quota", 8],
  ];

  const oneTimeFees = [
    ["Union Fee", 100],
    ["Hostel Caution Fee", 500],
    ["Laboratory Caution Fee", 500],
    ["University Registration", 100],
    ["Mess Caution Fee", 500],
    ["Security Deposit", 500],
    ["Blazer Coat", 1250],
    ["Health Care", 1000],
  ];

  const annualFees = [
    ["Admission Fee", 250],
    ["Tuition Fee", 500],
    ["Library Fee", 100],
    ["Laboratory Fee", 100],
    ["Hostel Fee", 250],
    ["Games Fee", 100],
    ["Hostel Establishment Fee", 50],
    ["Magazine Fee", 100],
    ["Sports Fee", 60],
    ["Cultural Fee", 60],
  ];

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Meghalaya - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Meghalaya with government and private colleges, eligibility, domicile, fees, reservation, and NEET UG counselling."
        keywords={[
          "MBBS Meghalaya",
          "NEET UG Meghalaya",
          "Meghalaya Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Meghalaya"
      />

      <Header
        title="MBBS in Meghalaya"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Meghalaya with eligibility criteria, counselling process, reservation, and top colleges."
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
                  state === "Meghalaya"
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
              Meghalaya offers great opportunities for MBBS aspirants with
              institutions like NEIGRIHMS, Shillong. The college provides
              excellent academic and clinical exposure with modern facilities
              and experienced faculty. Admission is based on NEET UG scores for
              a 5.5-year MBBS program including internship.
            </p>
            <p className="leading-relaxed text-gray-700 mb-4">
              <strong>Global Edulogy</strong> provides guidance to help students
              secure admission in government and private MBBS colleges in
              Meghalaya with a smooth and professional admission process.
            </p>
          </section>

          {/* Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              MBBS Colleges in Meghalaya
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Sl No.</th>
                    <th className="p-3 text-left font-medium">College Name</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Established</th>
                    <th className="p-3 text-left font-medium">MBBS Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {colleges.map(([sno, name, type, year, seats]) => (
                    <tr key={sno}>
                      <td className="p-3">{sno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{type}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Details</h2>
            <ul className="list-disc pl-6 space-y-1">
              {keyDetails.map(([key, value], idx) => (
                <li key={idx}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </section>

          {/* Counselling Dates */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Important Dates (Tentative)
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">
                      Tentative Dates
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {counsellingDates.map(([event, date], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{event}</td>
                      <td className="p-3">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {eligibility.map(([key, value], idx) => (
                <li key={idx}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </section>

          {/* Seat Reservation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Seat Reservation</h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Seats</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {seatReservation.map(([cat, seats], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Fee Structure */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>

            <h3 className="text-xl font-semibold mb-2">One-Time Fees</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Fee Type</th>
                    <th className="p-3 text-left font-medium">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {oneTimeFees.map(([type, amount], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{type}</td>
                      <td className="p-3">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-2">Annual Fees</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Fee Type</th>
                    <th className="p-3 text-left font-medium">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {annualFees.map(([type, amount], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{type}</td>
                      <td className="p-3">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Participating Institutes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Participating Institutes
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                North Eastern Indira Gandhi Regional Institute of Health &
                Medical Sciences (NEIGRIHMS), Shillong
              </li>
              <li>
                PA Sangma International Medical College and Hospital, Khanapara
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

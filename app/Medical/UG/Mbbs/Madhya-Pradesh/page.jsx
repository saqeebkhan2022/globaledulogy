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
    [1, "Mahatma Gandhi Memorial Medical College, Indore", 1948, 250],
    [2, "Gandhi Medical College, Bhopal", 1955, 250],
    [3, "Netaji Subhash Chandra Bose Medical College, Jabalpur", 1955, 250],
    [4, "Gajra Raja Medical College, Gwalior", 1946, 200],
    [5, "Shyam Shah Medical College, Rewa", 1963, 150],
    [6, "Bundelkhand Medical College, Sagar", 2009, 125],
    [7, "Atal Bihari Vajpayee Government Medical College, Vidisha", 2018, 180],
    [8, "Government Medical College, Ratlam", 2018, 180],
    [
      9,
      "Nandkumar Singh Chouhan Government Medical College, Khandwa",
      2018,
      120,
    ],
    [10, "Government Medical College, Shivpuri", 2019, 100],
    [11, "Government Medical College, Datia", 2018, 120],
    [12, "Chhindwara Institute of Medical Sciences, Chhindwara", 2019, 100],
    [13, "Birsa Munda Government Medical College, Shahdol", 2019, 100],
    [14, "Sunderlal Patwa Government Medical College, Mandsaur", 2024, 100],
    [15, "Government Medical College, Satna", 2023, 150],
    [16, "Government Medical College, Seoni", 2024, 100],
    [
      17,
      "Virendra Kumar Sakhlecha Government Medical College, Neemuch",
      2024,
      100,
    ],
  ];

  const privateColleges = [
    [1, "Amaltas Institute of Medical Sciences, Dewas", 2016, 250],
    [2, "Chirayu Medical College and Hospital, Bhopal", 2011, 250],
    [
      3,
      "Index Medical College Hospital and Research Center, Indore",
      2007,
      250,
    ],
    [4, "LN Medical College, Bhopal", 2009, 250],
    [5, "LNCT Medical College and Sewakunj Hospital, Indore", 2021, 150],
    [
      6,
      "Mahaveer Institute of Medical Sciences and Research, Bhopal",
      2020,
      150,
    ],
    [7, "People's College of Medical Science, Bhopal", 2005, 250],
    [
      8,
      "Ram Krishna Medical College Hospital and Research Centre, Bhopal",
      2021,
      150,
    ],
    [9, "R.D. Gardi Medical College, Ujjain", 2001, 150],
    [
      10,
      "RKDF Medical College Hospital and Research Centre, Bhopal",
      2014,
      150,
    ],
    [
      11,
      "School of Medical Science, Sri Satya Sai University, Sehore",
      2020,
      100,
    ],
    [12, "Sri Aurobindo Institute of Medical Science, Indore", 2003, 250],
    [13, "Sukh Sagar Medical College and Hospital, Jabalpur", 2021, 150],
  ];

  const counsellingDates = [
    ["Release of MP NEET UG Counselling Notification", "July 2025"],
    ["Start of Online Registration", "July 2025"],
    ["Last Date for Registration", "July 2025"],
    ["Document Verification", "July 2025"],
    ["Choice Filling and Locking", "August 2025"],
    ["Round 1 Seat Allotment Result", "August 2025"],
    ["Reporting to Allotted College", "August 2025"],
    ["Round 2 Registration & Choice Filling", "September 2025"],
    ["Round 2 Seat Allotment Result", "September 2025"],
    ["Mop-Up Round Registration", "October 2025"],
    ["Mop-Up Round Seat Allotment", "October 2025"],
    ["Stray Vacancy Round", "November 2025"],
  ];

  const fees = [
    ["General/OBC", "1000"],
    ["SC/ST/PwD", "1000"],
    ["Non-domicile Candidates", "1000"],
  ];

  const reservation = [
    ["Scheduled Castes (SC)", "16%"],
    ["Scheduled Tribes (ST)", "20%"],
    ["Other Backward Classes", "14%"],
    ["Economically Weaker Section (EWS)", "10%"],
    ["Persons with Disabilities (PwD)", "5%"],
  ];

  return (
    <>
      <SEO
        title="MBBS in Madhya Pradesh - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Madhya Pradesh with government and private colleges, eligibility, domicile, fees, reservation, and NEET UG counselling dates."
        keywords={["MBBS Madhya Pradesh", "NEET UG MP", "MP Medical Colleges"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Madhya-Pradesh"
      />

      <Header
        title="MBBS in Madhya Pradesh"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Madhya Pradesh with eligibility criteria, domicile requirements, counselling process, reservation, and top colleges."
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
                  state === "Madhya Pradesh"
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
              Madhya Pradesh offers top-quality medical education through
              government and private medical colleges. With well-equipped
              institutions, experienced faculty, and excellent clinical
              exposure, the state provides an ideal environment for pursuing an
              MBBS degree.
            </p>
            <p className="leading-relaxed text-gray-700 mb-4">
              Global Edulogy provides expert guidance to help students secure
              MBBS seats in Madhya Pradesh, ensuring they get into the best
              colleges based on their rank and budget.
            </p>
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
                  {govtColleges.map(([sno, name, year, seats]) => (
                    <tr key={sno}>
                      <td className="p-3">{sno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
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
                  {privateColleges.map(([sno, name, year, seats]) => (
                    <tr key={sno}>
                      <td className="p-3">{sno}</td>
                      <td className="p-3">{name}</td>
                      <td className="p-3">{year}</td>
                      <td className="p-3">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Counselling Dates */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Madhya Pradesh NEET UG Counselling 2025 (Tentative Dates)
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
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

          {/* Fees */}
          <section>
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
                  {fees.map(([cat, fee], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Reservation */}
          <section>
            <h3 className="text-xl font-semibold mt-4 mb-2">Reservation</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Category</th>
                    <th className="p-3 text-left font-medium">Percentage</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reservation.map(([cat, per], idx) => (
                    <tr key={idx}>
                      <td className="p-3">{cat}</td>
                      <td className="p-3">{per}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How Global Edulogy Education Helps */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">
              How Global Edulogy Education Helps You
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personalized counselling based on NEET scores.</li>
              <li>Assistance with registration and documentation.</li>
              <li>Strategic choice filling to maximize admission chances.</li>
              <li>Guidance on scholarships and financial aid.</li>
              <li>Regular updates on counselling rounds and deadlines.</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

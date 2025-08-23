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

  const privateColleges = [
    [1, "K J Somaiya Medical College, Mumbai", 1991, 100],
    [2, "Bharatratna Atalbihari Vajpayee Medical College, Pune", 2022, 100],
    [3, "Terna Medical College, Nerul, Navi Mumbai", 1991, 150],
    [4, "Dr. Ulhas Patil Medical College, Jalgaon", 2008, 200],
    [5, "Dr. Vasantrao Pawar Medical College, Nasik", 1990, 120],
    [6, "Smt. Kashibai Navale Medical College, Pune", 2007, 150],
    [
      7,
      "Maharashtra Institute of Medical Sciences & Research, Latur",
      1990,
      150,
    ],
    [
      8,
      "Maharashtra Institute of Medical Education and Research, Talegaon, Pune",
      1994,
      150,
    ],
    [9, "Ashwini Rural Medical College, Solapur", 2012, 100],
    [10, "Annasaheb Chudaman Patil Memorial Medical College, Dhule", 1990, 100],
    [
      11,
      "Dr. Panjabrao Alias Bhausaheb Deshmukh Memorial Medical College, Amravati",
      1991,
      150,
    ],
    [
      12,
      "Dr. Vithalrao Vikhe Patil Foundation's Medical College, Ahmednagar",
      2003,
      150,
    ],
    [13, "B.K.L. Walawalkar Rural Medical College, Ratnagiri", 2015, 100],
    [14, "NKP Salve Medical College, Nagpur", 1990, 200],
    [15, "SMBT Medical College, Nashik, Nandihills", 2014, 150],
    [16, "Dr. Rajendra Gode Medical College, Amravati", 2023, 150],
    [
      17,
      "Prakash Institute of Medical Sciences & Research, Islampur, Sangli",
      2016,
      150,
    ],
    [18, "Dr. N Y Tasgaonkar Medical College, Karjat", 2021, 100],
    [19, "SSPM Medical College, Sindhudurg", 2020, 151],
    [20, "Parbhani Medical College, Parbhani", 2023, 150],
    [21, "Vedanta Medical College, Palghar", 2017, 150],
    [
      22,
      "Shri Ramchandra Institute of Medical Sciences, Ch. Sambhajinagar",
      2024,
      50,
    ],
    [23, "Indian Institute of Medical Science & Research, Jalna", 1991, 150],
  ];

  const govtColleges = [
    [1, "Seth GS Medical College and KEM Hospital, Mumbai", 1925, 250],
    [2, "B.J Medical College and Hospital, Pune", 1964, 250],
    [3, "Lokmanya Tilak Municipal General Hospital, Mumbai", 1964, 200],
    [4, "Topiwala National Medical College, Mumbai", 1964, 150],
    [5, "Government Medical College, Mumbai", 2024, 50],
    [6, "HBT Medical College", 2015, 200],
    [
      7,
      "Rajiv Gandhi Medical College and Chhatrapati Shivaji Maharaj Hospital, Thane",
      1992,
      100,
    ],
    [8, "Grant Government Medical College, Mumbai", 1845, 250],
    [9, "Government Medical College, Nagpur", 1947, 250],
    [10, "Government Medical College, Aurangabad", 1956, 200],
    [
      11,
      "Indira Gandhi Government Medical College & Hospital, Nagpur",
      1968,
      200,
    ],
    [12, "Government Medical College, Baramati", 2019, 100],
    [
      13,
      "Dr. Vaishampayan Memorial Government Medical College, Solapur",
      1963,
      200,
    ],
    [
      14,
      "Mahatma Gandhi Institute of Medical Sciences, Sevagram Wardha",
      1969,
      100,
    ],
    [15, "Government Medical College, Miraj", 1962, 200],
    [16, "Government Medical College, Kolhapur", 2001, 150],
    [
      17,
      "Dr. Shankarrao Chavan Government Medical College & Hospital, Nanded",
      1988,
      150,
    ],
    [18, "Government Medical College, Nashik", 2024, 50],
    [19, "Government Medical College, Satara", 2021, 100],
    [20, "Government Medical College, Latur", 2002, 150],
    [21, "Swami Ramanand Teerth Rural Government Medical College", 1975, 150],
    [22, "Government Medical College, Akola", 2002, 200],
    [23, "Shri Bhausaheb Hire Government Medical College, Dhule", 1989, 150],
    [24, "Government Medical College, Alibaug", 2021, 100],
    [25, "Government Medical College, Jalgaon", 2018, 150],
    [26, "Shri Vasantrao Naik Government Medical College, Yeotmal", 1989, 200],
    [27, "Government Medical College, Ratnagiri", 2023, 100],
    [28, "Government Medical College, Chandrapur", 2015, 150],
    [29, "Government Medical College, Osmanabad", 2022, 100],
    [30, "Government Medical College, Sindudurg", 2021, 100],
    [31, "Government Medical College, Nandurbar", 2020, 100],
    [32, "Government Medical College, Gondia", 2016, 150],
    [33, "Government Medical College, Parbhani", 2023, 100],
    [34, "Government Medical College, Ambernath", 2024, 100],
    [35, "Government Medical College, Amaravati", 2024, 100],
    [36, "Government Medical College, Buldhana", 2023, 100],
    [37, "Government Medical College, Jalna", 2024, 100],
    [38, "Government Medical College, Washim", 2024, 100],
    [39, "Government Medical College, Hingoli", 2024, 100],
    [40, "Government Medical College, Bhandara", 2024, 100],
    [41, "Government Medical College, Gadchiroli", 2024, 100],
  ];

  const counsellingDates = [
    ["Online Registration for Counselling", "July 2025 (1st Week)"],
    [
      "Document Verification & Confirmation of Registration",
      "July 2025 (2nd Week)",
    ],
    ["Choice Filling and Locking", "July 2025 (2nd Week)"],
    ["Publication of Provisional Merit List", "July 2025 (3rd Week)"],
    ["Seat Allotment Result - Round 1", "July 2025 (4th Week)"],
    ["Reporting to Allotted Colleges - Round 1", "August 2025 (1st Week)"],
    ["Seat Allotment Result - Round 2", "August 2025 (2nd Week)"],
    ["Reporting to Allotted Colleges - Round 2", "August 2025 (3rd Week)"],
    ["Mop-Up Round Registration", "September 2025 (1st Week)"],
    ["Mop-Up Round Seat Allotment", "September 2025 (2nd Week)"],
    [
      "Reporting to Allotted Colleges - Mop-Up Round",
      "September 2025 (3rd Week)",
    ],
    ["Last Date for Admission Completion", "September 2025 (4th Week)"],
  ];

  const fees = [
    ["General Category", "₹1000-1500"],
    ["Reserved Categories (SC/ST/OBC)", "₹800-1000"],
  ];

  const reservation = [
    ["Scheduled Castes (SC)", "13%"],
    ["Scheduled Tribes (ST)", "7%"],
    ["Other Backward Classes (OBC)", "19%"],
    ["Physically Handicapped", "5%"],
    ["Economically Weaker Sections (EWS)", "10%"],
    ["Maharashtra Institutional Quota", "Specific seats reserved"],
  ];

  return (
    <>
      <SEO
        title="MBBS in Maharashtra - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Maharashtra with government and private colleges, eligibility, domicile, fees, reservation, and NEET UG counselling dates."
        keywords={[
          "MBBS Maharashtra",
          "NEET UG Maharashtra",
          "Maharashtra Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Maharashtra"
      />

      <Header
        title="MBBS in Maharashtra"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Maharashtra with eligibility criteria, domicile requirements, counselling process, reservation, and top colleges."
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
                  state === "Maharashtra"
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
          <section>
            <p className="leading-relaxed text-gray-700 mb-4">
              Maharashtra boasts some of the finest medical colleges in India,
              renowned for their exceptional infrastructure, state-of-the-art
              teaching hospitals, and advanced laboratories. Students gain
              excellent clinical exposure and receive support through stipends
              and scholarships.
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

          {/* Counselling Dates */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Maharashtra NEET UG Counselling 2025 (Tentative Dates)
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

          {/* How Global Edulogy Helps */}
          <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">
              How Global Edulogy Helps You
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

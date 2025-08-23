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
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const privateColleges = [
    [
      1,
      "School Of Medical Sciences, (Sharda University), Greater Noida",
      2009,
      250,
    ],
    [
      2,
      "Sri Rammurti Smarak Institute Of Medical Sciences, Bareilly",
      2005,
      150,
    ],
    [3, "Hind Institute Of Medical Sciences, Barabanki", 2008, 100],
    [4, "Hind Institute Of Medical Sciences, Sitapur", 2009, 150],
    [5, "Muzaffarnagar Medical College, Muzaffarnagar", 2006, 200],
    [6, "K.D. Medical College Hospital & Research Centre, Mathura", 2015, 250],
    [7, "Rohilkhand Medical College & Hospital, Bareilly", 2006, 250],
    [
      8,
      "Noida International Institute Of Medical Sciences, Gautam Budh Nagar",
      2020,
      150,
    ],
    [9, "Saraswati Institute Of Medical Sciences, Hapur", 2008, 250],
    [10, "Rama Medical College Hospital & Research Centre, Kanpur", 2008, 150],
    [11, "United Institute Of Medical Sciences, Prayagraj", 2020, 150],
    [12, "GS Medical College, Hapur", 2017, 250],
    [13, "Heritage Institute Of Medical Sciences, Varanasi", 2015, 200],
    [14, "Rama Medical College Hospital & Research Centre, Hapur", 2011, 250],
    [
      15,
      "Shri Gorakshnath Medical College, Hospital and Research Centre, Gorakhpur",
      2024,
      100,
    ],
    [
      16,
      "National Capital Region Institute Of Medical Sciences, Meerut",
      2017,
      150,
    ],
    [17, "T.S. Mishra Medical College & Hospital, Lucknow", 2016, 250],
    [18, "Mayo Institute Of Medical Sciences, Barabanki", 2012, 250],
    [19, "Prasad Institute Of Medical Sciences, Lucknow", 2016, 150],
    [20, "Krishna Mohan Medical College & Hospital, Mathura", 2014, 150],
    [
      21,
      "Varun Arjun Medical College & Rohilkhand Hospital, Sahjahanpur",
      2016,
      250,
    ],
    [22, "Naraina Medical College & Hospital, Kanpur", 2013, 150],
    [23, "Venkateswara Institute Of Medical Sciences, Gajraula", 2016, 250],
    [24, "SKS Medical College, Mathura", 2023, 150],
    [25, "Saraswati Medical College, Unnao", 2016, 150],
    [
      26,
      "Ajay Sangaal Institute Of Medical Sciences & Research And Ayushmaan Hospital, Shamli",
      2024,
      150,
    ],
    [27, "Shri Siddhi Vinayak Medicxal College, Sambhal", 2024, 50],
    [28, "KMC Medical College & Hospital, Maharajganj", 2024, 150],
    [29, "Rajshree Medical Research Institute, Bareilly", 2014, 250],
    [30, "Dr. B.S. Kushwah Institute Of Medical College, Kanpur", 2024, 150],
    [31, "Subharti Medical College, Meerut", 1996, 200],
    [
      32,
      "Teerthankar Mahaveer Medical College & Research Centre, Moradabad (Jain Minority)",
      2008,
      250,
    ],
    [33, "Era's Lucknow Medical College, Lucknow (Muslim Minority)", 1997, 200],
    [
      34,
      "Integral Institute Of Medical Sciences & Research, Lucknow (Muslim Minority)",
      2013,
      150,
    ],
    [
      35,
      "Career Institute Of Medical Sciences, Lucknow (Muslim Minority)",
      2011,
      150,
    ],
    [36, "F.H. Medical College, Agra (Muslim Minority)", 2014, 150],
  ];

  const governmentColleges = [
    [1, "King George's Medical University, Lucknow", 1911, 250],
    [
      2,
      "Dr. Ram Manohar Lohia Institute of Medical Sciences, Gomti Nagar, Lucknow",
      2017,
      200,
    ],
    [3, "Ganesh Shanker Vidyarthi Memorial Medical College, Kanpur", 1956, 250],
    [4, "Moti Lal Nehru Medical College, Prayagraj", 1961, 200],
    [5, "Government Institute of Medical Sciences, Greater Noida", 2019, 100],
    [6, "Lala Lajpat Rai Memorial Medical College, Meerut", 1966, 150],
    [7, "Sarojini Naidu Medical College, Agra", 1947, 200],
    [8, "Baba Raghavdas Medical College, Gorakhpur", 1972, 150],
    [9, "Maharani Laxmibai Medical College, Jhansi", 1968, 150],
    [
      10,
      "Uttar Pradesh University of Medical Sciences, Saifai, Etawah",
      2006,
      200,
    ],
    [11, "Government Medical College, Saharanpur", 2015, 100],
    [12, "Government Medical College, Kannauj", 2012, 100],
    [13, "Government Medical College, Jalaun", 2013, 100],
    [14, "Autonomous State Medical College, Ayodhya", 2019, 100],
    [15, "Government Medical College, Ambedkar Nagar", 2011, 100],
    [16, "Government Medical College, Azamgarh", 2013, 100],
    [17, "Government Medical College, Badaun", 2019, 100],
    [18, "Government Medical College, Banda", 2016, 100],
    [19, "Autonomous State Medical College, Firozabad", 2019, 100],
    [20, "Autonomous State Medical College, Shahjahanpur", 2019, 100],
    [21, "Autonomous State Medical College, Bahraich", 2019, 100],
    [22, "Autonomous State Medical College, Basti", 2019, 100],
    [23, "Autonomous State Medical College, Bulandshahr", 2024, 100],
    [24, "Autonomous State Medical College, Etah", 2021, 100],
    [25, "Autonomous State Medical College, Siddharth Nagar", 2021, 100],
    [26, "Autonomous State Medical College, Deoria", 2021, 100],
    [27, "Autonomous State Medical College, Fatehpur", 2021, 100],
    [28, "Autonomous State Medical College, Hardoi", 2021, 100],
    [29, "Autonomous State Medical College, Pratapgarh", 2021, 100],
    [30, "Autonomous State Medical College, Mirzapur", 2021, 100],
    [31, "Autonomous State Medical College, Bijnor", 2024, 100],
    [32, "Autonomous State Medical College, Jaunpur", 2021, 100],
    [33, "Autonomous State Medical College, Ghazipur", 2021, 100],
    [34, "Autonomous State Medical College, Kanpur Dehat", 2024, 100],
    [35, "Autonomous State Medical College, Sultanpur", 2024, 100],
    [36, "Autonomous State Medical College, Pilibhit", 2024, 100],
    [37, "Autonomous State Medical College, Gonda", 2024, 100],
    [38, "Autonomous State Medical College, Kushinagar", 2024, 100],
    [39, "Autonomous State Medical College, Lalitpur", 2024, 100],
    [40, "Autonomous State Medical College, Kaushambi", 2024, 100],
    [41, "Autonomous State Medical College, Auraiya", 2024, 100],
    [42, "Autonomous State Medical College, Lakhimpur Kheri", 2024, 100],
    [43, "Autonomous State Medical College, Chandauli", 2024, 100],
    [44, "Autonomous State Medical College, Sonbhadra", 2024, 100],
  ];

  const eligibility = [
    "Indian citizenship required",
    "Minimum age: 17 years on or before 31st December of admission year",
    "Passed 12th with Physics, Chemistry, Biology & English",
    "Minimum 50% marks (40% for SC/ST/OBC) in PCB aggregate",
    "Must appear for NEET UG and meet required percentile",
  ];

  const neetDetails = [
    "Duration: 3 hours, 180 Questions",
    "Subjects: Physics, Chemistry, Biology & Zoology",
    "Marking: +4 for correct, -1 for incorrect answers",
    "Total Marks: 720",
  ];

  const domicileCriteria = [
    "Must be a resident of Uttar Pradesh",
    "Valid UP domicile certificate required",
    "Should have lived in UP for 5 years or have parents as permanent residents",
    "Students completing 10+2 in UP are eligible",
  ];

  const documentsRequired = [
    "NEET UG Admit Card",
    "NEET UG Scorecard/Rank Letter",
    "Class 10th & 12th Marksheet",
    "Domicile Certificate (for state quota seats)",
    "Transfer Certificate & Character Certificate",
    "Category Certificate (if applicable)",
    "Passport-sized Photographs",
    "Aadhar Card",
    "Income Certificate (if applying for scholarships)",
  ];

  const counsellingSteps = [
    "Visit the official website, fill in personal details, and submit the form",
    "Document Verification: Verify NEET admit card, mark sheets, identity proof, caste/domicile certificate, etc.",
    "Choice Filling: Select and prioritize college choices, and lock them",
    "Seat Allotment: Check the seat allotment result and accept or decline the seat",
    "Reporting to College: Report to allotted college, pay fees, and complete formalities",
    "Upgradation: Optionally participate in the upgradation round if desired",
  ];

  const reservationVertical = [
    ["Scheduled Caste (SC)", "21%"],
    ["Scheduled Tribe (ST)", "2%"],
    ["Other Backward Class (OBC)", "27%"],
    ["Economically Weaker Section (EWS)", "10%"],
  ];

  const reservationHorizontal = [
    ["Female Candidates", "20%"],
    ["Dependents of Freedom Fighters", "2%"],
    ["Sons/Daughters of Ex-Servicemen", "2%"],
    ["Disabled Candidates", "5%"],
    ["NCC Cadets (C Certificate with B Grade)", "1%"],
  ];

  const renderTable = (data, headers) => (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#003366] text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 text-left font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) => (
                <td key={i} className="p-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MBBS in Uttar Pradesh - NEET UG Admission & Top Colleges"
        description="Complete guide for MBBS admission in Uttar Pradesh with eligibility, counselling, reservation, fees, and top medical colleges."
        keywords={[
          "MBBS Uttar Pradesh",
          "NEET UG Uttar Pradesh",
          "UP Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/Uttar-Pradesh"
      />

      <Header
        title="MBBS in Uttar Pradesh"
        subtitle="Top Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Uttar Pradesh with eligibility, counselling, reservation, and top colleges."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <aside className=" md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border p-2 text-sm font-medium shadow-sm ${
                  state === "Uttar Pradesh"
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

        <main className="col-span-3 space-y-12 text-gray-800">
          <section>
            <p className="leading-relaxed text-gray-700 mb-4">
              Pursuing MBBS in Uttar Pradesh offers a wide range of options,
              with government and private medical colleges providing quality
              education. Admission is through NEET UG and UP NEET counselling
              conducted by DMET, Uttar Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Private Medical Colleges in Uttar Pradesh
            </h2>
            {renderTable(privateColleges, [
              "S.No",
              "College Name",
              "Established Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Government Medical Colleges in Uttar Pradesh
            </h2>
            {renderTable(governmentColleges, [
              "S.No",
              "College Name",
              "Established Year",
              "Seats",
            ])}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {eligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              NEET UG Exam Details
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {neetDetails.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Domicile Criteria</h2>
            <ul className="list-disc pl-6 space-y-1">
              {domicileCriteria.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-1">
              {documentsRequired.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              NEET UG Counselling Process
            </h2>
            <ol className="list-decimal pl-6 space-y-1">
              {counsellingSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reservation Policy</h2>
            <h3 className="text-xl font-semibold mb-2">Vertical Reservation</h3>
            {renderTable(reservationVertical, ["Category", "Reservation (%)"])}
            <h3 className="text-xl font-semibold mb-2">
              Horizontal Reservation
            </h3>
            {renderTable(reservationHorizontal, [
              "Category",
              "Reservation (%)",
            ])}
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

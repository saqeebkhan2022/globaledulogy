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
    [1, "Indira Gandhi Medical College, Shimla", 1966, 120],
    [2, "Dr. Rajendra Prasad Government Medical College, Tanda", 1996, 120],
    [3, "Dr YS Parmar Medical College, Nahan", 2016, 120],
    [4, "Pt. Jawaharlal Nehru Government Medical College, Chamba", 2017, 120],
    [
      5,
      "Shri Lal Bahadur Shastri Government Medical College, Mandi",
      2017,
      120,
    ],
    [6, "Dr. Radhakrishnan Government Medical College, Hamirpur", 2018, 120],
    [7, "All India Institute of Medical Sciences (AIIMS), Bilaspur", 2019, 100],
  ];

  const privateColleges = [
    [1, "Maharshi Markandeshwar Medical College & Hospital, Solan", 2013, 150],
  ];

  return (
    <>
      <SEO
        title="MBBS in Himachal Pradesh - NEET UG Counselling & Top Colleges"
        description="Complete guide for MBBS admission in Himachal Pradesh with government and private colleges, NEET UG counselling details, eligibility, fees, and important dates."
        keywords={[
          "MBBS Himachal Pradesh",
          "NEET UG Himachal Pradesh",
          "Himachal Pradesh Medical Colleges",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs/himachal-pradesh"
      />

      <Header
        title="MBBS in Himachal Pradesh"
        subtitle="Top Government & Private Medical Colleges and NEET UG Counselling"
        description="Explore MBBS admission in Himachal Pradesh with details on eligibility, counselling process, fees, reservation, and top colleges."
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
                  state === "Himachal Pradesh"
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
              Himachal Pradesh is a preferred destination for MBBS aspirants,
              offering high-quality medical education, experienced faculty, and
              advanced healthcare facilities. With top government and private
              medical colleges, students gain extensive clinical exposure and
              hands-on training, combining both theoretical and practical
              learning in a peaceful environment.
            </p>
            <p className="leading-relaxed text-gray-700">
              Global Edulogy simplifies MBBS admission in Himachal Pradesh with
              personalized guidance, expert counselling, and support throughout
              the admission process to help students secure a seat in top
              medical colleges.
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
              Himachal Pradesh NEET UG Counselling 2025
            </h2>
            <p className="mb-4">
              Counselling is conducted by Atal Medical & Research University
              (AMRU) for MBBS and BDS admissions. The process is online and
              includes multiple rounds based on merit, reservation, and seat
              availability.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Particulars</th>
                    <th className="p-3 text-left font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">Conducting Authority</td>
                    <td className="p-3">
                      Atal Medical & Research University (AMRU)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Counselling Mode</td>
                    <td className="p-3">Online</td>
                  </tr>
                  <tr>
                    <td className="p-3">Courses Covered</td>
                    <td className="p-3">MBBS, BDS</td>
                  </tr>
                  <tr>
                    <td className="p-3">Exam Accepted</td>
                    <td className="p-3">NEET UG 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Official Website</td>
                    <td className="p-3">AMRU Official Website</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Counselling Tentative Dates */}
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
                    <td className="p-3">Release of Application Form</td>
                    <td className="p-3">June 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Last Date for Registration</td>
                    <td className="p-3">July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Provisional Merit List</td>
                    <td className="p-3">July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Choice Filling & Locking</td>
                    <td className="p-3">July 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Seat Allotment Round 1</td>
                    <td className="p-3">August 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Reporting to Allotted College</td>
                    <td className="p-3">August 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Round 2 Counselling</td>
                    <td className="p-3">August 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Mop-Up Round</td>
                    <td className="p-3">September 2025</td>
                  </tr>
                  <tr>
                    <td className="p-3">Stray Vacancy Round</td>
                    <td className="p-3">September 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Eligibility */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and
                English.
              </li>
              <li>Minimum Marks: General – 50%, OBC/SC/ST – 40%, PwD – 45%.</li>
              <li>Must have qualified NEET UG 2025.</li>
              <li>Minimum age: 17 years as of December 31, 2025.</li>
            </ul>

            {/* Domicile */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Domicile Criteria
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Candidates must be domiciled in Himachal Pradesh for state quota
                seats.
              </li>
              <li>
                Non-domicile candidates can apply for management/NRI quota
                seats.
              </li>
            </ul>

            {/* Registration */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Registration Process
            </h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Visit the official AMRU website.</li>
              <li>Register with basic details and NEET UG roll number.</li>
              <li>Fill the application form and upload documents.</li>
              <li>Pay the registration fee.</li>
              <li>Submit the form and download the confirmation.</li>
            </ol>

            {/* Counselling Steps */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Counselling Rounds
            </h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Registration & Fee Payment</li>
              <li>Merit List Release</li>
              <li>Choice Filling & Locking</li>
              <li>Seat Allotment Result</li>
              <li>Document Verification & Reporting</li>
              <li>Stray Vacancy Round (if seats remain vacant)</li>
            </ol>

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
                    <td className="p-3">General/OBC</td>
                    <td className="p-3">2000</td>
                  </tr>
                  <tr>
                    <td className="p-3">SC/ST/PwD</td>
                    <td className="p-3">1000</td>
                  </tr>
                  <tr>
                    <td className="p-3">NRI Candidates</td>
                    <td className="p-3">5000</td>
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
                    <td className="p-3">13%</td>
                  </tr>
                  <tr>
                    <td className="p-3">ST</td>
                    <td className="p-3">7%</td>
                  </tr>
                  <tr>
                    <td className="p-3">OBC</td>
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
                  <tr>
                    <td className="p-3">Freedom Fighter Ward</td>
                    <td className="p-3">2%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Ex-Servicemen Ward</td>
                    <td className="p-3">1%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Documents */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Documents Required
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET UG 2025 Admit Card & Scorecard</li>
              <li>Class 10 & 12 Mark Sheets</li>
              <li>Domicile Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
              <li>PwD Certificate (if applicable)</li>
              <li>Passport Size Photographs</li>
              <li>Valid ID Proof (Aadhar, Passport, etc.)</li>
              <li>Allotment Letter (post seat allotment)</li>
              <li>Migration Certificate (if applicable)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

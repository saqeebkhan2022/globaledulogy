"use client";
import React from "react";
import Header from "../../utils/Header";
import Link from "next/link";
import SEO from "../../../components/SEO";

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

  const getStateUrl = (name) => `/Medical/PG/MdMs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="MD/MS Admission in India 2025 - Course, Fees, Seats, Eligibility"
        description="Step-by-step guidance for securing MD/MS admission in India through NEET PG counselling including eligibility, seats, cutoff, and fee structure."
        keywords={[
          "MD Admission",
          "MS Admission",
          "NEET PG Counselling",
          "Medical PG Courses",
          "Global Edulogy",
        ]}
        canonical="https://www.globaledulogy.com/Medical/PG/MdMs"
      />

      <Header
        title="MD/MS Admission in India 2025"
        subtitle="Postgraduate Medical Education through NEET PG Counselling"
        description="Comprehensive guide on MD/MS admissions including eligibility, specializations, fees, seat matrix, cutoff, and counselling process."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar for States */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className={`block rounded-lg text-center border border-gray-200 transition p-2 text-sm font-medium shadow-sm bg-[#003366] hover:bg-[#0055aa] text-white`}
              >
                {state}
              </Link>
            ))}
          </div>
        </aside>

        {/* Mobile Dropdown */}
        <div className="md:hidden flex justify-center items-center w-full">
          <div className="w-full relative group">
            <label
              htmlFor="stateDropdown"
              className="mb-4 text-2xl font-bold text-[#EA4E14] text-center block"
            >
              State Wise Counselling
            </label>
            <select
              id="stateDropdown"
              className="w-full bg-[#EA4E14] text-white text-center text-lg font-medium p-3 rounded-full shadow-lg hover:bg-[#ff5e2b] focus:outline-none focus:ring-4 focus:ring-[#FFAB91] transition-colors appearance-none cursor-pointer"
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
                className="h-6 w-6 mt-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
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
            <h1 className="text-3xl font-bold mb-4">MD/MS Courses in India</h1>
            <p className="leading-relaxed text-gray-700">
              The MD (Doctor of Medicine) and MS (Master of Surgery) are
              prestigious postgraduate programs for MBBS graduates. MD focuses
              on medical specializations like General Medicine, Pediatrics, and
              Radiology, while MS focuses on surgical disciplines like General
              Surgery, Orthopedics, and Neurosurgery. Graduates can pursue
              careers in hospitals, academics, or research.
            </p>
          </section>

          {/* Duration */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Course Duration</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Duration: 3 years after MBBS (some institutes may offer 2
                years).
              </li>
              <li>Includes clinical training and mandatory internship.</li>
            </ul>
          </section>

          {/* Branch Specification */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  MD Specializations
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>General Medicine</li>
                  <li>Pediatrics</li>
                  <li>Obstetrics & Gynecology</li>
                  <li>Dermatology</li>
                  <li>Psychiatry</li>
                  <li>Anesthesia</li>
                  <li>Radiology</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  MS Specializations
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>General Surgery</li>
                  <li>Orthopedics</li>
                  <li>Ophthalmology</li>
                  <li>ENT (Otorhinolaryngology)</li>
                  <li>Plastic Surgery</li>
                  <li>Neurosurgery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Entrance Exam */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Entrance Exam</h2>
            <p className="mb-4">
              Admission to MD/MS courses is through NEET PG conducted by the
              National Board of Examinations (NBE). The exam has 300 MCQs,
              duration of 3 hours 30 minutes.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>MBBS degree from an MCI/NMC recognized institution.</li>
              <li>Completion of one-year internship.</li>
              <li>Valid NEET PG score above cutoff percentile.</li>
              <li>No specific upper age limit (institute norms may apply).</li>
            </ul>
          </section>

          {/* Admission Process */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Appear for NEET PG exam.</li>
              <li>Check result and merit list.</li>
              <li>Participate in counselling (MCC/State authorities).</li>
              <li>Seat allotment based on rank and preferences.</li>
              <li>Pay fees and confirm admission.</li>
            </ol>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>NEET PG Scorecard</li>
              <li>MBBS Degree Certificate</li>
              <li>Internship Completion Certificate</li>
              <li>Caste/Domicile Certificate (if applicable)</li>
              <li>Government ID Proof</li>
              <li>Passport-size Photographs</li>
              <li>Migration Certificate (if applicable)</li>
              <li>Medical Fitness Certificate</li>
            </ul>
          </section>

          {/* Fee Structure */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="p-3 text-left">Program</th>
                    <th className="p-3 text-left">Government Colleges</th>
                    <th className="p-3 text-left">Private Colleges</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="p-3">MD/MS</td>
                    <td className="p-3">₹30,000 - ₹1,50,000 per year</td>
                    <td className="p-3">₹10,00,000 - ₹1,00,00,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Additional hostel, exam, and library fees may apply.
            </p>
          </section>

          {/* Seat Matrix */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Seats Matrix</h2>
            <p>
              Seats are divided into All India Quota (AIQ) and State Quota. For
              example, AIIMS/PGIMER offer 50-100 seats for General Medicine or
              Surgery, but competitive fields like Radiology may have only 20-30
              seats.
            </p>
          </section>

          {/* Cutoff */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cutoff</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>General: 50th percentile</li>
              <li>OBC/SC/ST: 40th percentile</li>
              <li>PH: 45th percentile</li>
            </ul>
          </section>

          {/* Counselling */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Counselling Process</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Online Registration (MCC or State portal)</li>
              <li>Choice Filling & Locking</li>
              <li>Seat Allotment</li>
              <li>Document Verification</li>
              <li>Fee Payment & Reporting</li>
            </ol>
          </section>

          {/* Colleges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Top Private Colleges
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Christian Medical College (CMC), Vellore</li>
              <li>Kasturba Medical College, Manipal</li>
              <li>Sri Ramachandra Medical College, Chennai</li>
              <li>St. John's Medical College, Bangalore</li>
              <li>Amrita Institute of Medical Sciences, Kochi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Top Government Colleges
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>AIIMS, New Delhi</li>
              <li>PGIMER, Chandigarh</li>
              <li>KGMU, Lucknow</li>
              <li>Madras Medical College, Chennai</li>
              <li>BHU, Varanasi</li>
              <li>Kolkata Medical College</li>
            </ul>
          </section>

          {/* Consultancy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Best Consultancy for MD/MS - Global Edulogy
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Expert counselling for specialization & college selection</li>
              <li>Mock tests & study material for NEET PG</li>
              <li>Admission assistance (forms, documents, fee payment)</li>
              <li>Support during counselling rounds</li>
              <li>Guidance for MD/MS in India & abroad</li>
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>
                  What is the role of consultancy in MD/MS admissions?
                </strong>
                Global Edulogy assists with exams, college selection,
                applications, and counselling.
              </li>
              <li>
                <strong>Why choose Global Edulogy?</strong>
                Trusted for transparent process, expert guidance, and nationwide
                support.
              </li>
              <li>
                <strong>Does Global Edulogy help with scholarships?</strong>
                Yes, they help identify & apply for scholarships in India &
                abroad.
              </li>
              <li>
                <strong>
                  Does Global Edulogy assist with private colleges?
                </strong>
                Yes, providing end-to-end guidance for private MD/MS admissions.
              </li>
            </ol>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;

"use client";
import React from "react";
import Header from "../utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  // Program Overview
  const overview = [
    "Nepal, officially the Federal Democratic Republic of Nepal, is a Himalayan nation famous for its rich culture and natural beauty. The northern region hosts Mount Everest and seven other of the world's highest peaks.",
    "Lumbini, the birthplace of Lord Buddha, is a UNESCO heritage site and a spiritual hub for millions worldwide.",
    "Kathmandu, the capital, is known for its diversity and cultural heritage, making Nepal a unique blend of tradition and modernity.",
    "For Indian students, MBBS in Nepal offers a cost-effective medical education recognized by NMC, WHO, and UNESCO.",
    "This page provides complete details about MBBS in Nepal for 2025 including eligibility, fees, admission process, and top colleges.",
  ];

  // MBBS Course Overview Table
  const courseOverview = [
    ["Courses Offered", "MBBS (Bachelor of Medicine and Bachelor of Surgery)"],
    ["Course Duration", "5.5 Years (including 1-year internship)"],
    ["Eligibility", "50% in 10+2 with Physics, Chemistry, Biology"],
    ["Entrance Exams", "NEET UG, MECEE UG"],
    ["Medium of Instruction", "English"],
    ["University Recognition", "NMC, WHO, UNESCO"],
    ["Minimum Course Fee", "45 Lakhs (Total)"],
    ["Maximum Course Fee", "65 Lakhs (Total)"],
    ["Cost of Living", "₹5,000 – ₹10,000 per month"],
  ];

  // Govt Colleges Table
  const govtColleges = [
    [1, "Institute of Medicine (IOM)", 1970, 100, 8, "78,772 USD"],
    [
      2,
      "B.P Koirala Institute of Health Sciences (BPKHIS)",
      1993,
      100,
      8,
      "74,555 USD",
    ],
    [3, "Karnali Academy of Health Science", 2011, 50, 4, "75,000 USD"],
    [
      4,
      "Patan Academy of Health Sciences (PAHS), Lalitpur",
      2008,
      65,
      5,
      "75,000 USD",
    ],
    [5, "National Academy of Medical Sciences", 2001, 0, 0, "-"],
    [
      6,
      "Nepalese Army Institute of Health Sciences",
      1982,
      100,
      4,
      "78,772 USD",
    ],
    [
      7,
      "Madhesh Institute of Health Sciences (MIHS)",
      2021,
      50,
      4,
      "75,000 USD",
    ],
    [
      8,
      "Rapti Academy of Health Sciences (RAHS), Dang",
      2017,
      50,
      4,
      "75,000 USD",
    ],
    [9, "Pokhara Academy of Health Sciences", 2015, 50, 4, "75,000 USD"],
  ];

  // Private Colleges (Kathmandu Univ)
  const privateKU = [
    [
      1,
      "Manipal Medical College of Medical Science (MCOMS), Pokhara",
      1994,
      100,
      50,
      "75,000 USD",
    ],
    [2, "College of Medical Science, Bharatpur", 1993, 100, 50, "64 Lakh"],
    [
      3,
      "Kathmandu University School of Medical Sciences, Dhulikhel",
      1990,
      100,
      33,
      "65.25 Lakh",
    ],
    [
      4,
      "Nepal Medical College, Jorpati, Kathmandu",
      1997,
      100,
      33,
      "61.50 Lakh",
    ],
    [5, "Kathmandu Medical College, Kathmandu", 1997, 100, 33, "57 Lakh"],
    [6, "Birat Medical College, Biratnagar", 2014, 100, 33, "55 Lakh"],
    [7, "Nepalgunj Medical College, Nepalgunj", 1996, 100, 33, "55.31 Lakh"],
    [8, "Lumbini Medical College (LMC), Tansen", 2005, 100, 33, "52 Lakh"],
    [9, "Nobel Medical College, Biratnagar", 2004, 100, 33, "52 Lakh"],
    [
      10,
      "Devdaha Medical College & Teaching Hospital",
      2008,
      75,
      24,
      "50 Lakh",
    ],
    [11, "B & C Medical College and Research Center", 2024, 50, 17, "55 Lakh"],
  ];

  // Private Colleges (Tribhuvan Univ)
  const privateTU = [
    [1, "KIST Medical College, Imadol, Lalitpur", 2006, 100, 33, "60.50 Lakh"],
    [2, "Chitwan Medical College (CMC), Chitwan", 2006, 100, 33, "60 Lakh"],
    [3, "Gandaki Medical College (GMCTHRC), Pokhara", 2007, 100, 33, "55 Lakh"],
    [4, "National Medical College (NMC), Birgunj", 2001, 100, 33, "57 Lakh"],
    [
      5,
      "Universal Medical College (UCMS), Bhairahawa",
      1998,
      100,
      33,
      "55 Lakh",
    ],
    [6, "Janaki Medical College (JMC), Janakpur", 2003, 50, 17, "52 Lakh"],
  ];

  // MECEE Exam Dates
  const examDates = [
    ["Application Form Release", "Till July 26, 2025"],
    ["Last Date to Submit Application", "Till August 30, 2025"],
    ["Exam Conduct", "Till September 20, 2025"],
    ["Result Declaration", "Till September 27, 2025"],
    ["Re-totaling & Final Result", "Till October 11, 2025"],
    ["Priority Form Fill-Up", "Till October 25, 2025"],
    ["Matching & Final Enrollment", "Till January 10, 2026"],
    ["Classes Begin", "January 4–10, 2026"],
  ];

  // MECEE Exam Format
  const examFormat = [
    ["Type of Questions", "MCQs (Single Best Response)"],
    ["Total Questions", "200"],
    ["Subjects Covered", "Physics, Chemistry, Biology"],
    ["Exam Duration", "3 Hours"],
    ["Total Marks", "200"],
    ["Marking Scheme", "+1 for correct, -0.25 for wrong"],
    ["Mode", "Offline (Pen & Paper)"],
    ["Medium", "English"],
    ["Qualifying Criteria", "50th Percentile"],
  ];

  // Eligibility for Indian Students
  const eligibility = [
    "Applicant must be a foreign citizen (Indian students are eligible).",
    "Must have completed 10+2 with Physics, Chemistry, and Biology.",
    "Minimum 50% aggregate marks or CGPA of 2.4.",
    "NEET UG 50th percentile for Subcategory II admission.",
    "MECEE-BL takers apply under Subcategory I.",
  ];

  // Documents Required
  const documents = [
    "Recent passport-size photo (JPEG, max 200KB)",
    "Passport or Aadhaar Card",
    "Class 12 mark sheet & certificate",
    "Scanned signature",
    "Payment transaction reference number",
  ];

  // Benefits of studying MBBS in Nepal
  const benefits = [
    "High quality education with experienced faculty and modern curriculum.",
    "Affordable tuition fees compared to other countries (approx. 50–60 lakhs).",
    "No visa required for Indian students (valid ID sufficient).",
    "Globally recognized degrees (NMC, WHO, WFME, ECFMG, FAIMER).",
    "English medium courses with easy communication.",
    "Close proximity to India with cultural and lifestyle similarities.",
    "Rich cultural heritage and natural beauty alongside studies.",
    "Strong career opportunities after clearing NEXT or USMLE.",
  ];

  const renderList = (items) => (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

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

  return (
    <>
      <SEO
        title="MBBS in Nepal 2025 - Admission, Eligibility, Fees & Colleges"
        description="Complete guide for MBBS in Nepal 2025 including eligibility, admission process, fee structure, top colleges, MECEE exam, and benefits for Indian students."
        keywords={[
          "MBBS in Nepal",
          "Nepal Medical Colleges",
          "MBBS Admission Nepal",
          "MECEE UG 2025",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs-Abroad/Nepal"
      />

      <Header
        title="MBBS in Nepal 2025"
        subtitle="Course Details, Fees, Admission Process & Top Colleges"
        description="Explore everything about MBBS in Nepal 2025 including eligibility, fee structure, admission process, top colleges, and benefits."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Nepal</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Overview of MBBS in Nepal
          </h2>
          {renderTable(courseOverview, ["Particulars", "Description"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Government MBBS Colleges in Nepal
          </h2>
          {renderTable(govtColleges, [
            "S.No",
            "College Name",
            "Year",
            "Seats",
            "Foreign Seats",
            "Total Fees",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Private MBBS Colleges in Nepal (Kathmandu University)
          </h2>
          {renderTable(privateKU, [
            "S.No",
            "College Name",
            "Year",
            "Seats",
            "Foreign Seats",
            "Total Fees",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Private MBBS Colleges in Nepal (Tribhuvan University)
          </h2>
          {renderTable(privateTU, [
            "S.No",
            "College Name",
            "Year",
            "Seats",
            "Foreign Seats",
            "Total Fees",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            MECEE UG 2025 Exam Schedule
          </h2>
          {renderTable(examDates, ["Activity", "Schedule"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            MECEE UG 2025 Exam Format
          </h2>
          {renderTable(examFormat, ["Component", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Eligibility Criteria for Indian Students
          </h2>
          {renderList(eligibility)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          {renderList(documents)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Study MBBS in Nepal?
          </h2>
          {renderList(benefits)}
        </section>
      </main>
    </>
  );
};

export default Page;

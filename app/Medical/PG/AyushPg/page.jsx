"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "The AYUSH PG Programs encompass postgraduate studies in Ayurveda, Yoga, Unani, Siddha, and Homeopathy.",
    "These programs provide in-depth knowledge and expertise in traditional Indian medicine systems.",
    "Admission is based on entrance exams conducted by NTA, NEET-PG (AYUSH), or state-level authorities.",
    "Bodmas Education helps aspirants with eligibility, seat matrix, fee details, and the admission process.",
  ];

  const examDetails = [
    ["Mode of Exam", "Computer-Based Test (CBT)"],
    ["Exam Type", "Multiple Choice Questions (MCQs)"],
    ["Duration", "3 hours"],
    [
      "Subjects",
      "General Knowledge, Relevant AYUSH Subjects (Ayurveda, Homeopathy, Unani, Siddha, Yoga)",
    ],
    ["Application Fee", "Varies by category and college"],
  ];

  const programs = [
    [
      "MD (Ayurveda)",
      "Specialization in Ayurvedic medicine and treatment systems",
    ],
    ["MD (Homeopathy)", "Advanced study of homeopathic treatments"],
    ["MD (Unani)", "Postgraduate focus on Unani medicine systems"],
    ["MS (Siddha)", "Traditional treatments in Siddha system"],
    [
      "M.Sc. (Yoga Therapy)",
      "Specialization in yoga-based therapeutic practices",
    ],
  ];

  const eligibility = [
    ["Nationality", "Indian nationals are eligible"],
    ["Age Limit", "21 – 45 years (varies by college)"],
    ["Qualification", "BAMS/BHMS/BUMS/BSMS/BYS or equivalent degree"],
    [
      "M.Sc. Yoga Therapy",
      "B.Sc. or equivalent degree in Yoga, Science, or related field",
    ],
    [
      "Entrance Exam",
      "Must clear AYUSH PG Entrance (NEET-PG or institutional exam)",
    ],
    ["Internship", "1-year compulsory internship (as applicable)"],
    ["Reservation", "SC/ST/OBC/PwD as per government norms"],
  ];

  const admissionSteps = [
    ["Step 1", "Register for AYUSH PG Entrance Exam via NTA or state portals"],
    ["Step 2", "Appear for the exam (based on chosen AYUSH discipline)"],
    ["Step 3", "Check results & merit rank released by authorities"],
    ["Step 4", "Participate in counseling & seat allocation"],
    ["Step 5", "Document verification at allotted college"],
    ["Step 6", "Pay admission fee & confirm your seat"],
  ];

  const govtColleges = [
    [
      "National Institute of Ayurveda (NIA)",
      "Jaipur, Rajasthan",
      "MD/MS Ayurveda, Yoga",
    ],
    ["All India Institute of Ayurveda (AIIA)", "New Delhi", "MD/MS Ayurveda"],
    [
      "Banaras Hindu University (BHU)",
      "Varanasi, Uttar Pradesh",
      "MD Ayurveda, MD Homeopathy",
    ],
    ["Gujarat Ayurved University", "Jamnagar, Gujarat", "MD/MS Ayurveda"],
    [
      "Institute of PG Teaching & Research in Ayurveda",
      "Jamnagar, Gujarat",
      "MD/MS Ayurveda",
    ],
    ["Tata Memorial Hospital", "Mumbai, Maharashtra", "M.Sc. Yoga Therapy"],
    ["University of Madras", "Chennai, TamilNadu", "MD Homeopathy, M.Sc. Yoga"],
    ["Dr. BR Ambedkar University", "Agra, Uttar Pradesh", "M.Sc. Yoga Therapy"],
    ["Ayurvedic College & Hospital", "Pune, Maharashtra", "MD/MS Ayurveda"],
  ];

  const privateColleges = [
    ["SDM College of Ayurveda", "Udupi, Karnataka", "MD Ayurveda"],
    ["Bharati Vidyapeeth University", "Pune, Maharashtra", "MD/MS Ayurveda"],
    ["KLE University", "Belgaum, Karnataka", "MD Ayurveda, M.Sc. Yoga"],
    ["Patanjali University", "Haridwar, Uttarakhand", "M.Sc. Yoga Therapy"],
    ["Dr. MGR Medical University", "Chennai, TamilNadu", "MD/MS Ayurveda"],
    ["Sree Sankara University of Sanskrit", "Kalady, Kerala", "MD/MS Ayurveda"],
    [
      "Kerala University of Health Sciences",
      "Thrissur, Kerala",
      "MD/MS Ayurveda",
    ],
    ["Ramaiah University", "Bangalore, Karnataka", "MD Homeopathy, M.Sc. Yoga"],
    [
      "Dr. NTR University of Health Sciences",
      "Vijayawada, Andhra Pradesh",
      "MD Homeopathy, MS Siddha",
    ],
    ["Bangalore University", "Bangalore, Karnataka", "M.Sc. Yoga Therapy"],
  ];

  const seatMatrix = [
    [
      "National Institute of Ayurveda (NIA)",
      "Jaipur",
      "100",
      "General, SC, ST, OBC",
    ],
    [
      "All India Institute of Ayurveda (AIIA)",
      "New Delhi",
      "80",
      "General, SC, ST, OBC",
    ],
    [
      "Banaras Hindu University (BHU)",
      "Varanasi",
      "120",
      "General, SC, ST, OBC",
    ],
    ["Gujarat Ayurved University", "Jamnagar", "150", "General, SC, ST, OBC"],
    [
      "Sree Sankara University of Sanskrit",
      "Kerala",
      "90",
      "General, SC, ST, OBC",
    ],
    ["Patanjali University", "Uttarakhand", "50", "General, SC, ST, OBC"],
  ];

  const feeStructure = [
    ["Government Colleges", "₹20,000 – ₹1,50,000 per year"],
    ["Private Colleges", "₹1,50,000 – ₹5,00,000 per year"],
    ["Example (Govt)", "BHU: ₹50,000 – ₹1,00,000 | NIA: ₹30,000 – ₹80,000"],
    [
      "Example (Private)",
      "SDM Ayurveda: ₹2 – 3 Lakhs | Patanjali University: ₹3 – 5 Lakhs",
    ],
  ];

  const whyChoose = [
    "Personalized Counseling: One-on-one sessions with expert counselors.",
    "Entrance Exam Preparation: Study materials, mock tests & guidance.",
    "Application Assistance: Support with form filling & documentation.",
    "College Shortlisting: Based on merit, preferences & budget.",
    "Seat Allotment Strategy: Guidance during counseling rounds.",
    "Post-Admission Support: Document verification & fee payment help.",
  ];

  const renderTable = (data, headers) => (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#003366] text-white">
          <tr>
            {headers.map((h, idx) => (
              <th key={idx} className="p-3 text-left font-medium">
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

  const renderList = (items) => (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

  return (
    <>
      <SEO
        title="AYUSH PG Admission 2025 - Ayurveda, Homeopathy, Unani, Siddha, Yoga"
        description="AYUSH PG Admission 2025: Explore MD/MS Ayurveda, Homeopathy, Unani, Siddha & M.Sc Yoga. Eligibility, entrance exam, fee structure, seat matrix & top colleges."
        keywords={[
          "AYUSH PG Admission 2025",
          "AYUSH PG Entrance Exam",
          "MD Ayurveda Admission",
          "M.Sc Yoga Therapy",
        ]}
        canonical="https://www.globaledulogy.com/Medical/PG/AYUSH"
      />

      <Header
        title="AYUSH PG Admission 2025"
        subtitle="Comprehensive Guide to Ayurveda, Homeopathy, Unani, Siddha & Yoga PG Programs"
        description="Get expert guidance on AYUSH PG admissions: eligibility, entrance exam, seat matrix, fee structure, and counseling process."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            AYUSH PG Entrance Exam 2025
          </h2>
          {renderTable(examDetails, ["Aspect", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Programs Offered</h2>
          {renderTable(programs, ["Program", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Requirement", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionSteps, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Government AYUSH PG Colleges
          </h2>
          {renderTable(govtColleges, [
            "College",
            "Location",
            "Programs Offered",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Private AYUSH PG Colleges
          </h2>
          {renderTable(privateColleges, [
            "College",
            "Location",
            "Programs Offered",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">AYUSH PG Seat Matrix</h2>
          {renderTable(seatMatrix, [
            "College",
            "Location",
            "Total Seats",
            "Categories",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>
          {renderTable(feeStructure, ["Category", "Fee Range / Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Bodmas Education?
          </h2>
          {renderList(whyChoose)}
        </section>
      </main>
    </>
  );
};

export default Page;

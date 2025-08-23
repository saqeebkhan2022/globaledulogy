"use client";
import React from "react";
import Header from "../../Medical/utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  const overview = [
    "JAC Chandigarh Counselling 2025 is the centralized admission process for B.E., B.Tech., and B.Arch courses in Chandigarh's premier technical institutions.",
    "Admissions are based on JEE Main 2025 ranks.",
    "Online registration starts from April 29, 2025, and is managed by the Joint Admission Committee, Chandigarh.",
  ];

  const participatingInstitutes = [
    [
      "University Institute of Engineering and Technology (UIET), Panjab University, Chandigarh",
    ],
    [
      "Dr. S.S. Bhatnagar University Institute of Chemical Engineering and Technology (SSBUICET), Panjab University, Chandigarh",
    ],
    [
      "Chandigarh College of Engineering and Technology (CCET), Sector-26, Chandigarh",
    ],
    ["UIET, Panjab University SSG Regional Centre, Hoshiarpur"],
    ["Chandigarh College of Architecture (CCA), Chandigarh"],
  ];

  const eligibilityCriteria = [
    ["Entrance Exam", "Must have appeared in JEE Main 2025 conducted by NTA."],
    ["Year of Passing", "Class 12 passed in 2023, 2024, or appearing in 2025."],
    [
      "B.E./Integrated B.E.-MBA",
      "10+2 with 5 subjects including Language, Physics, Mathematics, one of Chemistry/Biology/Biotech/Vocational Subject, and one additional subject OR 10+3 Diploma with Mathematics.",
    ],
    [
      "B.Arch",
      "10+2 with Physics, Mathematics, and one of Chemistry/Biology/CS/IT/Engg Graphics/Business Studies with minimum 45% OR 10+3 Diploma with Mathematics and 45%.",
    ],
    [
      "Category & State Quota",
      "Chandigarh quota applies only to CCET & CCA students passing 12th from Chandigarh. PU institutes do not offer OBC reservation; OBC candidates may apply under BC norms.",
    ],
  ];

  const selectionCriteria = [
    ["B.E./Integrated B.E.-MBA", "Based on JEE Main 2025 Paper 1 CRL Rank."],
    ["B.Arch", "Based on JEE Main 2025 Paper 2A Rank."],
    [
      "Special Categories",
      "Sports and Defence category may have special criteria.",
    ],
  ];

  const registrationFee = [
    ["General", "₹2800"],
    ["SC/ST/PwD", "₹1400"],
  ];

  const counsellingRounds = [
    [
      "Round 1",
      "Choice Filling: July 5–7",
      "Mock Allotment: July 8",
      "Locking: July 9–10",
      "Seat Allotment: July 11 (8:00 PM)",
      "Fee Payment: July 11–14",
      "Withdrawal: July 15",
    ],
    [
      "Round 2",
      "Choice Locking: July 16–18",
      "Seat Allotment: July 19 (8:00 PM)",
      "Fee Payment: July 19–21",
      "Withdrawal: July 22",
    ],
    [
      "Round 3",
      "Choice Locking: July 23–25",
      "Seat Allotment: July 26 (8:00 PM)",
      "Fee Payment: July 26–28",
      "Withdrawal: July 29",
      "Physical Reporting: July 30–31",
    ],
    [
      "Special Round",
      "Vacant Seats Display: August 1",
      "New Registration: August 1–4",
      "Verification: August 5–6",
      "Final List: August 7",
      "Choice Filling: August 7–8",
      "Seat Allotment: August 9",
      "Fee Payment: August 9–11",
      "Withdrawal: August 11–13",
    ],
    [
      "Spot Round",
      "Vacant Seats Display: August 11",
      "Choice Filling: August 11–13",
      "Revised Vacancy List: August 13",
      "Seat Allotment: August 14",
      "Final Physical Reporting: August 19",
    ],
  ];

  const documentsRequired = [
    "JEE Main 2025 Scorecard",
    "Class 10 and 12 Mark Sheets",
    "Character & Migration Certificate",
    "Gap Affidavit (if any)",
    "Reserved Category Certificates (if applicable)",
    "Seat acceptance fee proof",
    "Scrutiny form",
    "Photographs",
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
        title="JAC Chandigarh Counselling 2025 - Registration, Eligibility, Seat Allotment & Admission"
        description="Complete guide for JAC Chandigarh 2025 including highlights, participating institutes, eligibility, application, counselling schedule, documents required, and admission process."
        keywords={[
          "JAC Chandigarh 2025",
          "JEE Main Chandigarh Admission",
          "B.Tech B.Arch Admission",
          "UIET CCET CCA",
        ]}
        canonical="https://www.globaledulogy.com/Engineering/JacChandigarh"
      />

      <Header
        title="JAC Chandigarh Counselling 2025"
        subtitle="Centralized B.E., B.Tech & B.Arch Admission in Chandigarh"
        description="Guide on JAC Chandigarh 2025 including participating institutes, eligibility criteria, registration, counselling schedule, documents, and admission process."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Participating Institutes
          </h2>
          {renderTable(participatingInstitutes, ["Institute Name"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibilityCriteria, ["Category / Criteria", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Selection Criteria</h2>
          {renderTable(selectionCriteria, [
            "Course / Category",
            "Selection Basis",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Registration Fee</h2>
          {renderTable(registrationFee, ["Category", "Fee"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Counselling Rounds & Schedule
          </h2>
          {renderTable(counsellingRounds, ["Round", "Activities"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          {renderList(documentsRequired)}
        </section>
      </main>
    </>
  );
};

export default Page;

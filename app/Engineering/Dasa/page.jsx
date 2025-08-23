"use client";
import React from "react";
import Header from "../../Medical/utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  const overview = [
    "The Direct Admission of Students Abroad (DASA) scheme allows foreign nationals, PIOs, OCIs, and NRIs to pursue UG and PG programs in India.",
    "DASA primarily focuses on engineering and architecture programs in NITs, IIITs, SPAs, and other CFTIs.",
    "It ensures quality education for students from Indian-origin and international backgrounds.",
    "Admissions are based on JEE Main 2025 scores and merit.",
  ];

  const highlights = [
    ["Admission Scheme", "DASA UG 2025 (Direct Admission of Students Abroad)"],
    ["Offered Programs", "B.Tech / B.E / B.Arch"],
    [
      "Participating Institutes",
      "NITs, IIITs, SPAs, and other centrally funded technical institutions (CFTIs)",
    ],
    ["Eligibility Exam", "JEE Main 2025 (Paper 1) – Mandatory"],
    [
      "Academic Requirement",
      "10+2 or equivalent with Physics, Mathematics & one of: Chemistry/Biology/CS",
    ],
    ["Minimum Marks", "60% aggregate OR 6.5 CGPA on a 10-point scale"],
    ["Date of Birth Cutoff", "Born on or after October 1, 1996"],
    ["Eligible Categories", "Foreign Nationals, NRI, PIO, OCI"],
    ["Application Mode", "Online via official DASA portal"],
    ["Seat Allocation Basis", "JEE Main 2025 Rank (CRL)"],
    ["Counselling Conducted By", "CSAB (Central Seat Allocation Board)"],
    ["Official Website", "https://dasanit.org"],
  ];

  const eligibility = [
    [
      "Educational Qualification",
      "Completed 10+2 with Physics, Mathematics & Chemistry/Biology/CS/Biotech",
    ],
    ["Minimum Marks", "60% aggregate or 6.5 CGPA on 10-point scale"],
    ["Date of Birth", "Born on or after October 1, 1996"],
    ["Valid Exam Score", "JEE Main 2025 score required"],
    ["Eligible Categories", "Foreign nationals, PIO, OCI, or NRI"],
  ];

  const participatingInstitutes = [
    ["IITs", "IIT Delhi, IIT Roorkee, IIT Kanpur, IIT Kharagpur, etc."],
    ["NITs", "NIT Trichy, NIT Warangal, NIT Surathkal, etc."],
    ["SPAs", "Delhi, Bhopal, Vijayawada"],
  ];

  const counsellingSchedule = [
    [
      "Registration, Fee Payment (DEF), Choice Filling Start",
      "Wed, 30 July 2025, 10:00 AM",
    ],
    ["Document Upload Start", "Wed, 30 July 2025, 10:00 AM"],
    ["Display of Mock Seat Allocation", "Sun, 3 August 2025, 10:00 AM"],
    [
      "Registration, Fee Payment, Document Upload End",
      "Sun, 3 August 2025, 5:00 PM",
    ],
    ["Payment Issue Resolution Deadline", "Mon, 4 August 2025, 5:00 PM"],
    [
      "Last date to respond to DV Officer queries",
      "Wed, 6 August 2025, 5:00 PM",
    ],
    ["Last date to pay balance DEF", "Thu, 7 August 2025, 2:00 PM"],
    ["Choice Filling & Locking End (Auto-Lock)", "Thu, 7 August 2025, 8:00 PM"],
    [
      "Data Reconciliation for Eligible Candidates",
      "Fri, 8 August 2025, 5:00 PM",
    ],
  ];

  const seatAllotmentRounds = [
    [
      "Round 1",
      "Seat Allotment Result: Sat, 9 August 2025, 5:00 PM",
      "Willingness Options (Freeze/Slide/Float): 9–12 August 2025, up to 5:00 PM",
    ],
    [
      "Round 2",
      "Seat Allotment Result: Thu, 14 August 2025, 5:00 PM",
      "Willingness Options: 14–16 August 2025, up to 5:00 PM",
    ],
    ["Round 3", "Seat Allotment Result: Tue, 19 August 2025, 5:00 PM", ""],
    [
      "Final Reporting",
      "Physical Reporting at Institutes: Wed, 20 August – Sat, 23 August 2025",
      "Balance Fee Payment as per institute rules",
    ],
  ];

  const admissionProcess = [
    [
      "Registration",
      "Candidates register online and upload necessary documents.",
    ],
    [
      "Choice Filling & Locking",
      "Select desired courses/institutes and lock preferences.",
    ],
    ["Seat Allotment", "Merit-based allotment in multiple rounds."],
    [
      "Confirmation & Reporting",
      "Confirm allotted seat, report to the institution, and pay fees.",
    ],
  ];

  const tuitionFees = [
    [
      "Foreign Nationals",
      "Varies by course and institute; generally higher than Indian students.",
    ],
    ["Fee Components", "Tuition fees, hostel charges, administrative costs."],
  ];

  const documentsRequired = [
    "Passport copy",
    "10th and 12th-grade marksheets and certificates",
    "JEE Main scorecard",
    "Birth certificate",
    "Proof of nationality (PIO/OCI/NRI status)",
    "Medical fitness certificate (if applicable)",
    "Photographs",
  ];

  const counsellingTable = [
    ["1st Round", "Seat Allotment", "Based on merit and preferences"],
    [
      "2nd Round",
      "Confirmation & Reporting",
      "Candidates confirm seat and report to college",
    ],
    ["3rd Round", "Second Allotment", "Available in case of vacant seats"],
    [
      "Final Round",
      "Final Allotment",
      "If seats remain unfilled, final allotment is done",
    ],
    [
      "Seat Confirmation",
      "Final Confirmation & Document Verification",
      "Report to allocated college for final verification",
    ],
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
        title="DASA Counselling 2025 - UG/PG Admissions for NRIs, PIO, OCI & Foreign Nationals"
        description="Complete guide for DASA Counselling 2025 including highlights, eligibility, schedule, seat allotment rounds, admission process, tuition fees, and required documents."
        keywords={[
          "DASA 2025",
          "DASA Counselling",
          "NRIs",
          "PIO",
          "OCI",
          "Engineering Admission",
        ]}
        canonical="https://www.globaledulogy.com/Engineering/DASA"
      />

      <Header
        title="DASA Counselling 2025"
        subtitle="Direct Admission of Students Abroad"
        description="Guide on DASA 2025 counselling including highlights, eligibility criteria, participating institutes, schedule, admission process, tuition fees, scholarships, and required documents."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          {renderTable(highlights, ["Feature", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Criteria", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Participating Institutes
          </h2>
          {renderTable(participatingInstitutes, ["Institute Type", "Examples"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Counselling Schedule</h2>
          {renderTable(counsellingSchedule, ["Event", "Date & Time (IST)"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Seat Allotment Rounds</h2>
          {renderTable(seatAllotmentRounds, [
            "Round",
            "Seat Allotment Result",
            "Willingness Options",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionProcess, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tuition Fees</h2>
          {renderTable(tuitionFees, ["Category", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          {renderList(documentsRequired)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            DASA Counselling & Seat Allotment
          </h2>
          {renderTable(counsellingTable, ["Round", "Action", "Details"])}
        </section>
      </main>
    </>
  );
};

export default Page;

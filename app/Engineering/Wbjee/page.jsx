"use client";
import React from "react";
import Header from "../../Medical/utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  const overview = [
    "WBJEE Counselling 2025 is for candidates who qualified WBJEE 2025 and wish to join undergraduate engineering courses in West Bengal.",
    "Conducted by WBJEEB, the process ensures merit-based seat allocation in government, government-aided, and private engineering colleges.",
    "The online process includes registration, choice filling, seat allotment, and document verification.",
  ];

  const participatingInstitutes = [
    ["Jadavpur University", "Government", "B.Tech in various branches"],
    [
      "Kalyani Government Engineering College",
      "Government",
      "B.Tech in core engineering",
    ],
    [
      "Bengal Engineering and Science University",
      "Government",
      "B.Tech in multiple disciplines",
    ],
    [
      "Haldia Institute of Technology",
      "Government",
      "B.Tech in engineering streams",
    ],
    [
      "RCC Institute of Information Technology",
      "Government-Aided",
      "B.Tech in Computer Science etc.",
    ],
    [
      "Heritage Institute of Technology",
      "Private",
      "B.Tech in engineering branches",
    ],
    ["Techno India University", "Private", "B.Tech courses"],
    ["Academy of Technology", "Private", "B.Tech programs"],
    ["Narula Institute of Technology", "Private", "B.Tech engineering"],
  ];

  const importantDates = [
    ["WBJEE 2025 Exam", "April 2025"],
    ["Result Declaration", "May 2025"],
    ["Counselling Registration Begins", "June 2025"],
    ["Choice Filling & Locking", "June 2025"],
    ["Seat Allotment Result", "June – July 2025"],
    ["Document Verification", "June – July 2025"],
  ];

  const eligibilityCriteria = [
    [
      "WBJEE Qualification",
      "Candidate must have qualified WBJEE 2025 with minimum cut-off marks for engineering.",
    ],
    [
      "Academic Requirement",
      "Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics.",
    ],
    ["Age Criteria", "Must meet age requirements as per WBJEE rules."],
  ];

  const registrationFee = [
    ["General Male", "₹500"],
    ["General Female", "₹400"],
    ["Reserved Categories", "₹250 (varies)"],
  ];

  const wbjeeCutoff = [
    ["Category", "Opening Rank", "Closing Rank"],
    ["General", "Varies", "Varies"],
    ["SC", "Varies", "Varies"],
    ["ST", "Varies", "Varies"],
    ["OBC-A", "Varies", "Varies"],
    ["OBC-B", "Varies", "Varies"],
    ["EWS", "Varies", "Varies"],
    ["TFW", "Varies", "Varies"],
  ];

  const examPattern = [
    ["Paper", "Subject(s)"],
    ["Paper 1", "Mathematics"],
    ["Paper 2", "Physics and Chemistry"],
  ];

  const questionDistribution = [
    [
      "Subject",
      "Category I (1 mark)",
      "Category II (2 marks)",
      "Category III (2 marks, partial)",
    ],
    ["Mathematics", 50, 15, 10],
    ["Physics", 30, 5, 5],
    ["Chemistry", 30, 5, 5],
  ];

  const tips = [
    "Register and fill choices early to avoid last-minute issues.",
    "Research participating institutes and branch preferences carefully.",
    "Keep all necessary documents ready for smooth verification.",
    "Stay updated with official WBJEE notifications and deadlines.",
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
        title="WBJEE Counselling 2025 - Dates, Eligibility, Colleges, and Seat Allotment"
        description="Complete guide for WBJEE Counselling 2025 including participating institutes, eligibility, registration fee, seat allotment, exam pattern, and important dates."
        keywords={[
          "WBJEE 2025",
          "WBJEE Counselling 2025",
          "Engineering Admission West Bengal",
          "B.Tech Admission WBJEE",
        ]}
        canonical="https://www.globaledulogy.com/Engineering/WBJEE-Counselling"
      />

      <Header
        title="WBJEE Counselling 2025"
        subtitle="West Bengal Joint Entrance Examination Engineering Admission"
        description="Guide for WBJEE Counselling 2025 including participating institutes, eligibility, registration fee, important dates, seat allotment, and exam pattern."
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
          {renderTable(participatingInstitutes, [
            "Institute Name",
            "Type",
            "Courses Offered",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Important Dates (Tentative)
          </h2>
          {renderTable(importantDates, ["Activity", "Tentative Date"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibilityCriteria, ["Criteria", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Registration Fee</h2>
          {renderTable(registrationFee, ["Category", "Fee"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">WBJEE 2025 Cut Off</h2>
          {renderTable(wbjeeCutoff, [
            "Category",
            "Opening Rank",
            "Closing Rank",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            WBJEE 2025 Exam Pattern
          </h2>
          {renderTable(examPattern, ["Paper", "Subject(s)"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Question Distribution</h2>
          {renderTable(questionDistribution, [
            "Subject",
            "Category I",
            "Category II",
            "Category III",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Tips for WBJEE Counselling 2025
          </h2>
          {renderList(tips)}
        </section>
      </main>
    </>
  );
};

export default Page;

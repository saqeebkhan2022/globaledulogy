"use client";
import React from "react";
import Header from "../../Medical/utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  const overview = [
    "The Central Seat Allocation Board (CSAB) conducts counselling for undergraduate engineering and architecture programs in NITs, IIITs, GFTIs, and other technical institutes.",
    "CSAB 2025 counselling will be conducted online through three main channels: Special Round, NEUT Round, and Supernumerary Round.",
    "This counselling is specifically for candidates who have qualified JEE Main 2025.",
    "CSAB facilitates seat allocation for candidates not allotted seats in JoSAA counselling or from specific regions/UTs.",
  ];

  const counsellingRounds = [
    [
      "CSAB Special Round",
      "Allocates unfilled seats after JoSAA. Open for candidates not allotted in JoSAA or those who didn’t participate.",
    ],
    [
      "CSAB NEUT Round",
      "For candidates from North-Eastern states and UTs, allocating seats in AICTE-approved technical courses.",
    ],
    [
      "CSAB Supernumerary Round",
      "For candidates from UTs like Andaman & Nicobar, Lakshadweep, Daman & Diu, Dadra & Nagar Haveli; seats in select NITs.",
    ],
  ];

  const highlights = [
    [
      "Admission Process Name",
      "Central Seat Allocation Board (CSAB) Counselling",
    ],
    ["Popularly Known As", "CSAB Counselling"],
    ["Conducting Body", "Central Seat Allocation Board (CSAB)"],
    ["Level of Counselling", "Undergraduate Level"],
    ["Mode of Counselling", "Online"],
    ["Admission Channel", "JEE Main"],
    ["Official Website", "csab.nic.in"],
  ];

  const specialRoundSchedule = [
    [
      "Online request for category restoration – START",
      "Thu, 24 July 2025, 10:00 AM",
    ],
    [
      "Online request for category restoration – END",
      "Fri, 25 July 2025, 5:00 PM",
    ],
    [
      "Last date to respond to queries regarding category restoration",
      "Sat, 26 July 2025, 12:00 PM",
    ],
    ["Display of vacancies after JoSAA rounds", "Wed, 30 July 2025, 10:00 AM"],
    ["Registration & Payment of SREF START", "Wed, 30 July 2025, 10:00 AM"],
    ["Choice Filling START", "Wed, 30 July 2025, 10:00 AM"],
    ["Display of Mock Seat Allotment", "Sun, 3 August 2025, 10:00 AM"],
    [
      "Registration, Payment & Document Upload – END",
      "Sun, 3 August 2025, 5:00 PM",
    ],
    ["Resolution of payment issues", "Mon, 4 August 2025, 5:00 PM"],
    ["Choice Filling & Locking – END", "Thu, 7 August 2025, 8:00 PM"],
    [
      "Data Reconciliation for eligible candidates",
      "Fri, 8 August 2025, 5:00 PM",
    ],
  ];

  const seatAllotmentRounds = [
    [
      "Round 1",
      "Seat Allotment Result Display: Sat, 9 August 2025, 5:00 PM",
      "Online Reporting: 9–12 Aug 2025, up to 5:00 PM",
      "Last date to respond to DV Officer queries: Wed, 13 Aug 2025, 5:00 PM",
    ],
    [
      "Round 2",
      "Seat Allotment Result Display: Thu, 14 August 2025, 5:00 PM",
      "Online Reporting: 14–16 Aug 2025, up to 5:00 PM",
      "Last date to respond to DV Officer queries: Mon, 18 Aug 2025, 5:00 PM",
    ],
    [
      "Round 3",
      "Seat Allotment Result Display: Tue, 19 August 2025, 5:00 PM",
      "Online Reporting: 19–21 Aug 2025, up to 5:00 PM",
      "Last date to respond to DV Officer queries: Fri, 22 Aug 2025, 5:00 PM",
    ],
    [
      "Final Reporting",
      "Physical Reporting & Balance Fee Payment at Institute",
      "Tentative Dates: Wed, 20 Aug – Sat, 23 Aug 2025",
      "",
    ],
  ];

  const eligibility = [
    [
      "JEE Main 2025",
      "Candidates must have appeared in JEE Main 2025 and obtained a valid rank.",
    ],
    [
      "Age Limit",
      "Candidates must satisfy age criteria as per JEE Main 2025 guidelines.",
    ],
    [
      "Educational Qualification",
      "Candidates must have passed Class 12 or equivalent with Physics, Chemistry, and Mathematics.",
    ],
  ];

  const registrationSteps = [
    [
      "Step 1",
      "Online Registration on official CSAB portal using JEE Main credentials.",
    ],
    ["Step 2", "Filling Choices: Select preferred institutes and programs."],
    [
      "Step 3",
      "Document Verification: Upload proof of eligibility, category, and JEE Main score.",
    ],
    [
      "Step 4",
      "Seat Allotment: System allocates seats based on preferences and availability.",
    ],
    [
      "Step 5",
      "Seat Acceptance: Accept seat and pay acceptance fee to confirm admission.",
    ],
  ];

  const specialRoundFees = [
    ["GEN/GEN-EWS/OBC-NCL", "₹45,000 (Adjustable)"],
    ["SC/ST/PwD", "₹25,000 (Adjustable)"],
  ];

  const neutFees = [["Seat Acceptance Fee (SAF)", "₹5,000 per round"]];

  const supernumeraryFees = [
    ["GEN/GEN-EWS/OBC-NCL", "₹45,000"],
    ["SC/ST/PwD", "₹25,000"],
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
        title="CSAB Counselling 2025 - Special, NEUT & Supernumerary Rounds"
        description="Complete guide for CSAB Counselling 2025 including registration, seat allotment, schedule, eligibility, fees, and admission process."
        keywords={[
          "CSAB 2025",
          "CSAB Counselling",
          "CSAB Special Round",
          "CSAB NEUT Round",
          "CSAB Supernumerary Round",
          "Engineering Admission",
        ]}
        canonical="https://www.globaledulogy.com/Engineering/CSAB"
      />

      <Header
        title="CSAB Counselling 2025"
        subtitle="Special, NEUT & Supernumerary Rounds"
        description="Complete guide on CSAB Counselling 2025 including highlights, schedule, eligibility, registration steps, seat allotment rounds, and fees."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Counselling Rounds</h2>
          {renderTable(counsellingRounds, ["Round", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">CSAB 2025 Highlights</h2>
          {renderTable(highlights, ["Particulars", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Special Round Schedule
          </h2>
          {renderTable(specialRoundSchedule, ["Event", "Date & Time (IST)"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Seat Allotment Rounds</h2>
          {renderTable(seatAllotmentRounds, [
            "Round",
            "Seat Allotment Result",
            "Online Reporting",
            "DV Queries/Payment Issues",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Criteria", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Registration Steps</h2>
          {renderTable(registrationSteps, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            CSAB Special Round Fees
          </h2>
          {renderTable(specialRoundFees, ["Candidate Type", "SREF Amount"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            CSAB NEUT Counselling Fees
          </h2>
          {renderTable(neutFees, ["Fee Type", "Amount"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            CSAB Supernumerary Counselling Fees
          </h2>
          {renderTable(supernumeraryFees, ["Category", "SSAF Amount"])}
        </section>
      </main>
    </>
  );
};

export default Page;

"use client";
import React from "react";
import Header from "../../Medical/utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  const overview = [
    "JAC Delhi 2025 (Joint Admission Counselling, Delhi) is the centralized counselling process for admission to B.Tech and B.Arch courses in Delhi.",
    "Admissions are based on JEE Main 2025 scores and merit.",
    "Candidates must register online through the official JAC Delhi portal.",
  ];

  const highlights = [
    ["Name of Process", "JAC Delhi 2025"],
    ["Full Form", "Joint Admission Counselling, Delhi"],
    ["Courses Offered", "B.Tech, B.Arch"],
    ["Mode of Admission", "JEE Main 2025 Score Based"],
    ["Application Mode", "Online"],
    ["Participating Institutes", "5 Institutes"],
    ["Total B.Tech Seats", "7,333"],
    ["Total B.Arch Seats", "90 (IGDTUW only)"],
    ["Official Website", "jacdelhi.admissions.nic.in"],
  ];

  const participatingColleges = [
    ["Delhi Technological University (DTU)"],
    ["Netaji Subhas University of Technology (NSUT)"],
    ["Indira Gandhi Delhi Technical University for Women (IGDTUW)"],
    ["Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)"],
    ["Delhi Skill and Entrepreneurship University (DSEU)"],
  ];

  const registrationDates = [
    [
      "Start of Online Registration & Choice Filling",
      "May 21, 2025",
      "From 10:00 AM",
    ],
    [
      "Last Date for Registration & Choice Filling",
      "June 2, 2025",
      "Till 10:30 PM",
    ],
    [
      "Special One-Day Registration Window",
      "June 19, 2025",
      "10:00 AM – 10:30 PM",
    ],
  ];

  const bonusCWKMVerification = [
    [
      "IIIT-Delhi Bonus Point, Defence (CW Priority I–V)",
      "June 4, 2025",
      "09:00 AM",
      "DTU, Bawana Road, Delhi",
    ],
    ["KM Category – Priority I", "June 5, 2025", "09:00 AM", "DTU"],
    ["KM Category – Priority II", "June 5, 2025", "2:00 PM", "DTU"],
  ];

  const counsellingRounds = [
    [
      "Round 1",
      "Seat Allotment Result: June 9, 2025",
      "Physical Reporting: June 10–18, 2025",
      "Seat Freezing Deadline: June 18, 2025",
      "Withdrawal: July 8, 2025",
    ],
    [
      "Round 2",
      "Seat Allotment Result: June 24, 2025",
      "Physical Reporting: June 25–26, 2025",
      "Seat Freezing Deadline: June 26, 2025",
      "Withdrawal: July 8, 2025",
    ],
    [
      "Round 3",
      "Seat Allotment Result: June 30, 2025",
      "Physical Reporting: July 1–2, 2025",
      "Seat Freezing Deadline: July 2, 2025",
      "Withdrawal: July 8, 2025",
    ],
    [
      "Round 4",
      "Seat Allotment Result: July 4, 2025",
      "Physical Reporting: July 7–8, 2025",
      "Seat Freezing Deadline: July 8, 2025",
      "Final Withdrawal: July 8, 2025",
    ],
    [
      "Upgradation & Spot Round",
      "Display of Upgraded Branches: July 10, 2025",
      "Final Seat Freezing: July 10, 2025",
      "Spot Round Vacancy List: July 11, 2025",
      "",
    ],
  ];

  const eligibilityCriteria = [
    [
      "Common Eligibility",
      "Appear in JEE Main 2025 (Paper 1 for B.Tech / Paper 2 for B.Arch). Passed 10+2 with required subjects and percentage.",
    ],
    [
      "DTU / NSUT / IGDTUW (B.Tech)",
      "Minimum 60% in PCM, passed English, JEE Main Paper 1 rank.",
    ],
    [
      "IIIT Delhi (B.Tech)",
      "70% in best 5 subjects including PCM, 70% in Mathematics, JEE Main Paper 1 + bonus points.",
    ],
    [
      "IGDTUW (B.Arch)",
      "Minimum 50% aggregate with Mathematics, admission via JEE Main Paper 2.",
    ],
    [
      "Region-based Reservation",
      "Delhi Region: 85% seats; Outside Delhi: 15% seats.",
    ],
  ];

  const reservationPolicy = [
    ["Delhi Region Students", "85%"],
    ["Outside Delhi Region", "15%"],
    ["SC", "15%"],
    ["ST", "7.5%"],
    ["OBC-NCL (Delhi only)", "27%"],
    ["PwD", "5%"],
    ["Defence (CW)", "5%"],
  ];

  const applicationSteps = [
    ["Pay Counselling Fee", "₹1500 (non-refundable)"],
    ["Register", "Use JEE Main 2025 application number and name."],
    ["Fill Details", "Provide academic, contact, and category info."],
    ["Choice Filling", "Select preferred branches and institutes."],
    ["Choice Locking", "Confirm and lock choices before deadline."],
    ["Download Confirmation Page", "For future reference."],
  ];

  const admissionProcess = [
    ["Registration", "Apply online and pay counselling fee."],
    ["Choice Filling", "Fill preferred college and branch combinations."],
    ["Seat Allotment", "Based on JEE Main rank, preferences, and category."],
    ["Seat Acceptance", "Pay seat acceptance fee to confirm allotment."],
    ["Reporting", "Report physically to the allotted college with documents."],
    ["Spot Round", "Held only if seats remain after regular rounds."],
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
        title="JAC Delhi Counselling 2025 - Registration, Eligibility, Seat Allotment & Admission"
        description="Complete guide for JAC Delhi 2025 including highlights, participating colleges, eligibility, application, counselling rounds, reservation, and admission process."
        keywords={[
          "JAC Delhi 2025",
          "JEE Main Admission Delhi",
          "B.Tech B.Arch Admission",
          "DTU NSUT IIIT Delhi",
        ]}
        canonical="https://www.globaledulogy.com/Engineering/JAC-Delhi"
      />

      <Header
        title="JAC Delhi Counselling 2025"
        subtitle="Centralized B.Tech & B.Arch Admission in Delhi"
        description="Guide on JAC Delhi 2025 including highlights, eligibility criteria, participating colleges, registration, counselling schedule, reservation, and admission process."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          {renderTable(highlights, ["Particulars", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Participating Colleges
          </h2>
          {renderTable(participatingColleges, ["College Name"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Registration & Choice Filling Dates
          </h2>
          {renderTable(registrationDates, ["Event", "Date", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Bonus / CW / KM Document Verification
          </h2>
          {renderTable(bonusCWKMVerification, [
            "Category",
            "Date",
            "Reporting Time",
            "Venue",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Counselling Rounds & Schedule
          </h2>
          {renderTable(counsellingRounds, [
            "Round",
            "Seat Allotment Result",
            "Physical Reporting",
            "Seat Freezing",
            "Withdrawal",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibilityCriteria, [
            "Category / Institute",
            "Details",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Reservation Policy</h2>
          {renderTable(reservationPolicy, ["Category", "Reservation"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Application Form Steps
          </h2>
          {renderTable(applicationSteps, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionProcess, ["Stage", "Description"])}
        </section>
      </main>
    </>
  );
};

export default Page;

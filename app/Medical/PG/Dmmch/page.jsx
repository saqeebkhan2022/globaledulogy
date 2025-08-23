"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "DM (Doctorate of Medicine) and MCh (Master of Chirurgiae) are highly specialized super-specialty programs for advanced medical training.",
    "DM focuses on non-surgical specialties such as Cardiology, Neurology, Endocrinology, etc.",
    "MCh is designed for surgical specialties such as Urology, Cardiothoracic Surgery, Plastic Surgery, and more.",
    "These programs represent the highest academic achievement in medicine and prepare candidates to tackle complex clinical, surgical, and research challenges.",
  ];

  const entranceExams = [
    [
      "NEET SS (National Eligibility cum Entrance Test - Super Specialty)",
      "Conducted by NBE, primary exam for DM/MCh admissions, domain-specific, 150 MCQs.",
    ],
    [
      "INI SS (Institute of National Importance - Super Specialty)",
      "Conducted by AIIMS for AIIMS, JIPMER, PGIMER, NIMHANS; includes general and specialty questions.",
    ],
    [
      "State-Level/Institutional Exams",
      "Some states/universities conduct their own exams for super-specialty admissions.",
    ],
  ];

  const eligibility = [
    [
      "Educational Qualification",
      "DM: MD or equivalent in relevant specialty. MCh: MS or equivalent in surgical field.",
    ],
    ["Recognized Degree", "MD/MS degree must be recognized by MCI/NMC."],
    [
      "Internship",
      "MBBS internship completion is mandatory before postgraduate degree.",
    ],
    [
      "Citizenship",
      "Indian citizens or foreign nationals (as per institute rules).",
    ],
    ["Age Limit", "No specific age limit unless specified by the institution."],
  ];

  const stipendDetails = [
    [
      "Government Medical Colleges",
      "₹70,000 – ₹1,00,000",
      "Annual increments per year",
    ],
    ["Private Medical Colleges", "₹40,000 – ₹70,000", "Varies by institution"],
    [
      "Central Institutes (AIIMS, PGIMER, etc.)",
      "₹90,000 – ₹1,25,000",
      "Additional incentives may apply",
    ],
  ];

  const bondDetails = [
    [
      "Government Colleges",
      "1–3 Years",
      "₹10 Lakhs – ₹2 Crores",
      "e.g. Tamil Nadu: ₹50 lakh for 2 years",
    ],
    [
      "Private Colleges",
      "Usually None",
      "Not Applicable",
      "Some exceptions if subsidized seats",
    ],
  ];

  const feeStructure = [
    [
      "Government Medical Colleges",
      "₹50,000 – ₹1,00,000",
      "Nominal exam/library fees",
    ],
    [
      "Private Medical Colleges",
      "₹5 Lakhs – ₹15 Lakhs",
      "Depends on specialty",
    ],
    [
      "Central Institutes",
      "₹3,000 – ₹10,000",
      "Highly subsidized with incentives",
    ],
  ];

  const admissionProcess = [
    ["Qualify Entrance Exam", "Clear NEET SS or INI SS"],
    [
      "Online Registration",
      "Register on official portals (e.g., MCC for NEET SS)",
    ],
    [
      "Choice Filling & Locking",
      "Provide preferences for institutions and specialties",
    ],
    ["Seat Allotment", "Merit and preference-based allocation"],
    [
      "Document Verification",
      "Submit degree certificates, NEET SS scorecard, internship, etc.",
    ],
    [
      "Fee Payment & Reporting",
      "Pay tuition fees and join allotted institution",
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
        title="DM/MCh Admission in India - Course, Fees, Stipend & Process"
        description="Detailed guide on DM and MCh programs including entrance exams, eligibility, stipend, bond details, fees, and admission process."
        keywords={[
          "DM Admission",
          "MCh Admission",
          "NEET SS",
          "Super Specialty Medical Courses",
        ]}
        canonical="https://www.globaledulogy.com/Medical/PG/Dmmch"
      />

      <Header
        title="DM/MCh (Doctorate of Medicine / Master of Chirurgiae)"
        subtitle="Super Specialty Medical Programs in India"
        description="Comprehensive guide on DM and MCh programs including entrance exams, eligibility, stipend, bond rules, fee structure, and admission process."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Entrance Exams</h2>
          {renderTable(entranceExams, ["Exam", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Criteria", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Stipend Details</h2>
          {renderTable(stipendDetails, [
            "Institute Type",
            "Monthly Stipend",
            "Additional",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Bond Details</h2>
          {renderTable(bondDetails, [
            "Institute Type",
            "Bond Duration",
            "Penalty",
            "Examples",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>
          {renderTable(feeStructure, [
            "Institute Type",
            "Tuition Fee (Annual)",
            "Additional Cost",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionProcess, ["Step", "Details"])}
        </section>
      </main>
    </>
  );
};

export default Page;

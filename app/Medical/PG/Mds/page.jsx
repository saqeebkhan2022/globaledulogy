"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "The Master of Dental Surgery (MDS) is a three-year postgraduate program for dental graduates who wish to specialize in various fields of dentistry.",
    "MDS enhances career opportunities, improves patient outcomes, and contributes to dental science through research and academia.",
    "Admission to MDS programs is based on the NEET MDS examination conducted by the National Board of Examinations (NBE).",
    "Global Edulogy provides expert guidance to help candidates navigate eligibility, fees, cutoffs, and the admission process smoothly.",
  ];

  const specializations = [
    "Orthodontics – Alignment of teeth and jaws",
    "Oral and Maxillofacial Surgery – Complex surgical interventions",
    "Endodontics – Root canal and pulp treatment",
    "Periodontics – Gum care and dental implants",
    "Prosthodontics – Designing and fitting prosthetic teeth",
    "Pedodontics – Dental care for children",
    "Public Health Dentistry – Community dental health",
  ];

  const eligibility = [
    [
      "BDS Degree",
      "Must have a valid BDS degree from a recognized institution or university.",
    ],
    [
      "Internship Completion",
      "One-year compulsory rotating internship must be completed.",
    ],
    ["Entrance Exam", "NEET MDS qualification is mandatory for admission."],
    ["Age Limit", "No upper age limit for MDS admission through NEET MDS."],
    ["Nationality", "Both Indian and foreign nationals are eligible."],
    ["Minimum Marks", "At least 50% in BDS (40% for reserved categories)."],
  ];

  const examDetails = [
    ["Conducted By", "National Board of Examinations (NBE)"],
    ["Mode", "Computer-Based Test (CBT)"],
    ["Exam Duration", "3 hours"],
    ["Total Marks", "960"],
    ["Subjects", "General and Clinical Dentistry"],
  ];

  const admissionSteps = [
    ["Step 1", "Register for NEET MDS at the NBE portal."],
    ["Step 2", "Qualify NEET MDS above the required percentile."],
    ["Step 3", "Register for counseling via MCC or state authorities."],
    ["Step 4", "Fill and lock choices for colleges and specializations."],
    ["Step 5", "Seat allotment based on rank, preference, and reservation."],
    ["Step 6", "Document verification and payment of admission fees."],
  ];

  const govtFees = [
    ["AIIMS, New Delhi", "₹50,000 – ₹70,000"],
    ["KGMU, Lucknow", "₹1,00,000 – ₹1,30,000"],
    ["MAIDS, New Delhi", "₹75,000 – ₹1,00,000"],
    ["Government Dental College, Mumbai", "₹80,000 – ₹1,00,000"],
  ];

  const privateFees = [
    ["Manipal College of Dental Sciences, Manipal", "₹4,00,000 – ₹7,00,000"],
    ["Sri Ramachandra University, Chennai", "₹4,50,000 – ₹7,50,000"],
    ["BRS Dental College, Sonipat", "₹2,00,000 – ₹4,00,000"],
  ];

  const deemedFees = [
    ["Dr. D.Y. Patil Dental College, Pune", "₹6,00,000 – ₹8,00,000"],
    ["Vokkaligara Sangha Dental College, Bangalore", "₹5,00,000 – ₹8,00,000"],
    ["Saveetha Dental College, Chennai", "₹8,00,000 – ₹12,00,000"],
  ];

  const nriFees = [
    ["NRI Students (Private Colleges)", "₹6,00,000 – ₹15,00,000 per year"],
  ];

  const cutoff = [
    ["General / UR", "50th percentile", "250 – 350"],
    ["OBC", "40th percentile", "200 – 300"],
    ["SC/ST", "40th percentile", "180 – 250"],
    ["PwD", "45th percentile", "200 – 270"],
  ];

  const collegeCutoff = [
    ["AIIMS, New Delhi", "250 – 350"],
    ["KGMU, Lucknow", "270 – 350"],
    ["Manipal College of Dental Sciences", "300 – 400"],
    ["Saveetha Dental College, Chennai", "280 – 380"],
    ["BRS Dental College, Sonipat", "250 – 320"],
    ["Sri Ramachandra University, Chennai", "300 – 400"],
  ];

  const whyChoose = [
    "Expert Guidance: Personalized advice from experienced counselors.",
    "Document Support: Assistance with organizing required documents.",
    "College Insights: In-depth knowledge about top colleges and courses.",
    "Financial Planning: Support in exploring scholarships and fee structures.",
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
        title="MDS Admission Guidance 2025 - Fees, Cutoff, Process"
        description="Explore MDS admission guidance 2025: eligibility, NEET MDS exam, admission process, fee structure, cutoff, and top dental colleges in India."
        keywords={[
          "MDS Admission 2025",
          "NEET MDS Counselling",
          "MDS Fees",
          "MDS Cutoff",
        ]}
        canonical="https://www.globaledulogy.com/Medical/PG/Mds"
      />

      <Header
        title="MDS Admission Guidance 2025"
        subtitle="Comprehensive Guide to Master of Dental Surgery"
        description="Get expert counseling on MDS admission: eligibility, NEET MDS, admission process, fees, cutoff, and seat allotment."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Specializations in MDS
          </h2>
          {renderList(specializations)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Requirement", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">NEET MDS Examination</h2>
          {renderTable(examDetails, ["Aspect", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionSteps, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Fee Structure - Government Colleges
          </h2>
          {renderTable(govtFees, ["College", "Fee Range"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Fee Structure - Private Colleges
          </h2>
          {renderTable(privateFees, ["College", "Fee Range"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Fee Structure - Deemed Universities
          </h2>
          {renderTable(deemedFees, ["College", "Fee Range"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            NRI & Foreign Students Fee Structure
          </h2>
          {renderTable(nriFees, ["Category", "Fee Range"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            NEET MDS 2024 Expected Cutoff
          </h2>
          {renderTable(cutoff, ["Category", "Percentile", "Score Range"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            College-Specific Cutoff
          </h2>
          {renderTable(collegeCutoff, ["College", "Expected Cutoff Marks"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Global Edulogy for MDS Admissions?
          </h2>
          {renderList(whyChoose)}
        </section>
      </main>
    </>
  );
};

export default Page;

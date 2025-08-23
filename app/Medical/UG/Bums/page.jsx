"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "BUMS (Bachelor of Unani Medicine and Surgery) is a 5-year undergraduate program in the Unani system of medicine.",
    "It focuses on balancing the four humors—Phlegm, Blood, Yellow Bile, and Black Bile—using natural healing, herbs, diet, and lifestyle modifications.",
    "In India, the program is regulated by the Central Council of Indian Medicine (CCIM) and has 35+ accredited colleges.",
    "Graduates earn the title of Doctor and can specialize in treating chronic diseases naturally.",
    "Global Edulogy provides guidance for admission, syllabus, fees, seat matrix, and career counseling for BUMS aspirants.",
  ];

  const eligibilityCriteria = [
    [
      "Educational Qualification",
      "Passed 10+2 with ≥50% marks in Physics, Chemistry, Biology & English from a recognized board",
    ],
    [
      "Reserved Category (ST/SC/OBC)",
      "Minimum 40% marks in 10+2 for reserved category candidates",
    ],
    ["NEET Exam", "Must clear NEET exam with valid merit for admission"],
    [
      "Age Limit",
      "Minimum 17 years; candidates above 25 can also register as per Supreme Court ruling",
    ],
  ];

  const admissionProcess = [
    [
      "Step 1: NEET Examination",
      "Appear for NEET (National Eligibility cum Entrance Test) exam",
    ],
    [
      "Step 2: NEET Result",
      "Check scores and merit list to see qualification for BUMS program",
    ],
    [
      "Step 3: Counseling & Seat Allotment",
      "Merit-based seat allocation at counseling sessions",
    ],
    [
      "Step 4: Document Verification",
      "Submit mark sheets, NEET scorecard, ID proof, caste certificate, etc.",
    ],
    ["Step 5: Final Admission", "Pay fees and complete admission formalities"],
    [
      "Step 6: Commencement of Classes",
      "Begin academic sessions as per university calendar",
    ],
  ];

  const documentsRequired = [
    "10+2 Mark Sheet & Certificate",
    "NEET Scorecard",
    "Transfer Certificate",
    "Character Certificate",
    "Caste Certificate (if applicable)",
    "Passport-size Photographs",
    "Proof of Age (Birth certificate / 10th Mark Sheet)",
    "NEET Admit Card",
    "Medical Fitness Certificate",
    "Domicile Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Government ID Proof (Aadhaar/Passport)",
    "Migration Certificate (if applicable)",
    "Bank Details for fee payment",
  ];

  const bumsSyllabus = [
    [
      "First Year - Semester 1",
      "Anatomy-I, Physiology-I, Principles of Unani Medicine-I, Ilm-ul-Advia, Tafseer (Arabic), Unani Kulliyat-I",
    ],
    [
      "First Year - Semester 2",
      "Anatomy-II, Physiology-II, Principles of Unani Medicine-II, Ilm-ul-Advia, Tafseer, Unani Kulliyat-II",
    ],
    [
      "Second Year - Semester 3",
      "Pathology, Microbiology, Ilm-ul-Asmiah, Anatomy (General & Systems), Unani Surgery-I, Tafseer (Advanced Arabic)",
    ],
    [
      "Second Year - Semester 4",
      "Pathology, Microbiology, Ilm-ul-Asmiah, Unani Kulliyat (Advanced), Unani Surgery-II, Tafseer",
    ],
    [
      "Third Year - Semester 5",
      "Ilm-ul-Muzawarah, Therapeutics-I, Medical Jurisprudence, Gynaecology & Obstetrics (Unani), Paediatrics, Unani Surgery (Advanced)",
    ],
    [
      "Third Year - Semester 6",
      "Ilm-ul-Muzawarah (Advanced), Therapeutics-II, Medical Ethics & Laws, Gynaecology & Obstetrics (Advanced), Paediatrics (Advanced), Unani Surgery (Advanced)",
    ],
    [
      "Final Year - Semester 7",
      "Clinical Practice (Internship), Clinical Training, Research Methodology & Dissertation, Community Medicine, Ayurveda & Alternative Medicine",
    ],
    [
      "Final Year - Semester 8",
      "Clinical Practice (Internship), Clinical Training (Advanced), Research Methodology & Dissertation, Community Medicine, Ayurveda & Alternative Medicine",
    ],
  ];

  const feesStructure = [
    ["Category", "Government Colleges (₹)", "Private Colleges (₹)"],
    [
      "Tuition Fees",
      "20,000 - 50,000 per year",
      "1,00,000 - 2,50,000 per year",
    ],
    ["Hostel Fees", "10,000 - 30,000 per year", "20,000 - 50,000 per year"],
    ["Registration Fees", "1,000 - 5,000", "5,000 - 10,000"],
    ["Examination Fees", "2,000 - 5,000", "5,000 - 10,000"],
    ["Library Fees", "1,000 - 2,000", "2,000 - 5,000"],
    ["Miscellaneous Charges", "5,000 - 10,000", "10,000 - 20,000"],
    ["Total Fees", "40,000 - 1,00,000", "1,40,000 - 3,35,000"],
  ];

  const renderTable = (data, headers = null) => (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        {headers && (
          <thead className="bg-[#003366] text-white">
            <tr>
              {headers.map((h, idx) => (
                <th key={idx} className="p-3 text-left font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
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
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );

  return (
    <>
      <SEO
        title="BUMS Admission in India - Course, Fees & Top Colleges"
        description="Complete guide on BUMS including course details, admission process, fees, seat matrix, NEET cutoff, and career opportunities."
        keywords={[
          "BUMS Admission",
          "Unani Colleges India",
          "BUMS Course",
          "NEET UG BUMS",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Bums"
      />

      <Header
        title="BUMS (Bachelor of Unani Medicine and Surgery)"
        subtitle="Program Details, Admission, Fees, Seat Matrix & Syllabus"
        description="Learn everything about BUMS including eligibility, syllabus, admission process, fees, colleges, and career guidance with Global Edulogy."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibilityCriteria, ["Criteria", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionProcess, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          {renderList(documentsRequired)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">BUMS Syllabus</h2>
          {renderTable(bumsSyllabus, ["Semester", "Subjects / Topics"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>
          {renderTable(feesStructure)}
        </section>
      </main>
    </>
  );
};

export default Page;

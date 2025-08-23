"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "The Diplomate of National Board (DNB) is a postgraduate medical qualification awarded by the National Board of Examinations (NBE).",
    "It is considered equivalent to MD/MS degrees granted by Indian universities.",
    "DNB programs cover a wide range of medical and surgical specialties such as Medicine, Pediatrics, Surgery, Orthopedics, Radiology, and more.",
    "The program duration is generally 3 years (Post MBBS) or 2 years (Post MD/MS in relevant specialties).",
  ];

  const branches = [
    ["Medical Specialties", "Surgical Specialties"],
    ["DNB General Medicine", "DNB General Surgery"],
    ["DNB Pediatrics", "DNB Orthopedics"],
    ["DNB Dermatology", "DNB Obstetrics & Gynecology"],
    ["DNB Psychiatry", "DNB Urology"],
    ["DNB Radiology", "DNB Plastic Surgery"],
    ["DNB Anesthesia", "DNB Neurosurgery"],
    ["DNB Respiratory Medicine", "DNB ENT (Otorhinolaryngology)"],
    ["DNB Cardiology", "DNB Ophthalmology"],
    ["DNB Nephrology", "DNB Cardiothoracic Surgery"],
    ["DNB Gastroenterology", ""],
    ["DNB Endocrinology", ""],
  ];

  const entranceExams = [
    [
      "DNB CET (Common Entrance Test)",
      "Conducted for entry into 3-year DNB programs after MBBS. Tests overall medical knowledge and clinical skills.",
    ],
    [
      "DNB SS (Super Specialty Exam)",
      "For MD/MS holders seeking advanced DNB specializations. Focused on domain-specific knowledge.",
    ],
  ];

  const eligibility = [
    [
      "DNB (Post MBBS)",
      "MBBS degree, Internship completion, Qualified NEET-UG, Minimum 50% marks in MBBS.",
    ],
    [
      "DNB (Post MD/MS)",
      "MD/MS in relevant specialty, Qualified NEET-PG, Eligible for 2-year DNB Super-specialty.",
    ],
  ];

  const admissionProcess = [
    [
      "Application Submission",
      "Apply online via NBE portal with documents & fee.",
    ],
    ["Entrance Exam", "Appear for DNB CET or DNB SS as per eligibility."],
    ["Result & Merit List", "Scores released, merit-based ranking prepared."],
    [
      "Counseling & Seat Allotment",
      "Online/offline counseling, select preferred institution & specialty.",
    ],
    [
      "Document Verification",
      "Submit degree, internship, NEET score, ID proof, etc.",
    ],
    ["Final Admission", "Pay tuition fee and confirm admission."],
  ];

  const documentsRequired = [
    "MBBS Degree or MD/MS Degree (as applicable)",
    "NEET UG/PG/SS Scorecard",
    "Internship Completion Certificate",
    "Mark Sheets & Passing Certificates",
    "Caste Certificate (if applicable)",
    "Date of Birth Proof (Aadhaar/Birth Certificate)",
    "Passport-size Photographs",
    "Valid Photo ID Proof",
  ];

  const feeStructure = [
    [
      "Government Institutions",
      "₹30,000 – ₹80,000/year",
      "Hostel: ₹10k–30k/year, Exam: ₹3k–5k",
      "Total: ₹50k–₹1.2L/year",
    ],
    [
      "Private Institutions",
      "₹1,00,000 – ₹2,50,000/year",
      "Hostel: ₹20k–50k/year, Exam: ₹5k–8k",
      "Total: ₹1.25L–₹3L/year",
    ],
  ];

  const topColleges = [
    "AIIMS, New Delhi",
    "PGIMER, Chandigarh",
    "JIPMER, Puducherry",
    "Christian Medical College, Vellore",
    "Kasturba Medical College, Manipal",
    "NIMHANS, Bangalore",
    "King George’s Medical University, Lucknow",
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
        title="DNB Admission in India - Course, Fees, Seat Matrix & Process"
        description="Detailed guide on Diplomate of National Board (DNB) programs including entrance exams, eligibility, fees, counseling, and top colleges in India."
        keywords={[
          "DNB Admission",
          "DNB CET",
          "DNB SS",
          "DNB Medical Courses",
          "Postgraduate Medical Programs",
        ]}
        canonical="https://www.globaledulogy.com/Medical/PG/DNB"
      />

      <Header
        title="DNB (Diplomate of National Board)"
        subtitle="Postgraduate Medical Programs in India"
        description="Comprehensive guide on DNB program including overview, entrance exams, eligibility, fee structure, counseling, and top institutions."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Branches / Specializations
          </h2>
          {renderTable(branches.slice(1), branches[0])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Entrance Exams</h2>
          {renderTable(entranceExams, ["Exam", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Program", "Requirements"])}
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
          <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>
          {renderTable(feeStructure, [
            "Institution Type",
            "Tuition Fees",
            "Additional Cost",
            "Total",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top DNB Colleges in India
          </h2>
          {renderList(topColleges)}
        </section>
      </main>
    </>
  );
};

export default Page;

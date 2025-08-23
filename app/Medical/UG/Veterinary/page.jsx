"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "B.V.Sc & A.H. (Bachelor of Veterinary Science & Animal Husbandry) is a 5.5-year professional undergraduate program.",
    "It trains competent veterinarians to treat animals, manage livestock health, and contribute to animal husbandry development.",
    "The course is regulated by the Veterinary Council of India (VCI) with a standardized curriculum across India.",
    "Includes 4.5 years of academics + 1-year mandatory internship in veterinary hospitals, animal farms, and clinics.",
    "Graduates can pursue M.V.Sc., government jobs, private practice, or research careers in veterinary sciences.",
  ];

  const eligibilityCriteria = [
    [
      "Educational Qualification",
      "Completed 10+2 in Science stream with Physics, Chemistry, Biology (PCB)",
    ],
    ["Minimum Age", "17 years (as of year of admission)"],
    ["Maximum Age", "25 years (may vary; relaxations for reserved categories)"],
    [
      "Entrance Exam",
      "NEET (National Eligibility cum Entrance Test) is mandatory",
    ],
    ["Minimum NEET Marks", "50% for general, 45% for reserved categories"],
  ];

  const neetExamFormat = [
    ["Mode", "Online (Pen or Paper Mode)"],
    ["Duration", "3 Hours"],
    ["Subjects", "Physics, Chemistry, Biology"],
    ["Total Questions", "180 (45+45+90)"],
    ["Total Marks", "720"],
    ["Question Type", "Multiple Choice Questions (MCQs)"],
  ];

  const veterinaryColleges = [
    ["Type of College", "Number of Colleges", "Details"],
    [
      "Recognized Government Colleges",
      "56",
      "Fully recognized by VCI; 15% AIQ, 85% state quota",
    ],
    [
      "Provisionally Recognized Colleges",
      "14",
      "Temporary approval; admission depends on NEET & state norms",
    ],
    [
      "Total Recognized + Provisionally",
      "70",
      "All institutions eligible for veterinary science admission in India",
    ],
    [
      "Private Veterinary Colleges",
      "5",
      "Limited number; under management quota",
    ],
    ["Delhi/NCR Veterinary Colleges", "7", "2 Government + 5 Private Colleges"],
  ];

  const seatMatrix = [
    ["Type", "Number of Seats"],
    ["Government Veterinary Colleges", "734+"],
    ["Total Veterinary Seats in India", "5087+"],
    ["Management/NRI Quota (Private Colleges)", "Available as per institution"],
  ];

  const topPrivateColleges = [
    ["S.No", "Private Veterinary College Name", "State"],
    ["1", "Apollo College of Veterinary Medicine", "Rajasthan"],
    ["2", "MJF College of Veterinary and Animal Science", "Rajasthan"],
    ["3", "Khalsa College of Veterinary and Animal Sciences", "Haryana"],
    [
      "4",
      "Rajasthan University of Veterinary and Animal Sciences (Private Wing)",
      "Rajasthan",
    ],
    [
      "5",
      "Sardar Vallabhbhai Patel University of Agriculture & Technology (Private Dept.)",
      "Uttar Pradesh",
    ],
  ];

  const feesStructure = [
    ["Type of College", "Fee Range (Per Year)"],
    ["Government Colleges", "₹15,000 – ₹75,000"],
    ["Private Colleges", "₹2.5 Lakh – ₹5 Lakh"],
  ];

  const admissionProcess = [
    ["Step 1", "Qualify NEET-UG"],
    ["Step 2", "Register for State Counseling via VCI/State Authorities"],
    ["Step 3", "Choice Filling & Document Verification"],
    ["Step 4", "Merit List & Seat Allotment"],
    ["Step 5", "Reporting to College & Fee Payment"],
  ];

  const cutoff = [
    ["College Type", "NEET Cutoff"],
    ["Government Colleges", "450–580 marks"],
    ["Private Colleges", "250–400 marks (varies by state)"],
    ["Management Quota", "Flexible based on availability"],
  ];

  const careerOpportunities = [
    "Veterinary Officer (Govt. Jobs via UPSC/PSC)",
    "Livestock Development Officer",
    "Veterinary Surgeon in Hospitals and Clinics",
    "Animal Research Scientist",
    "Veterinary Pathologist",
    "Pet Care Consultant",
    "Wildlife and Zoo Veterinarian",
    "Animal Husbandry Departments",
    "Veterinary Pharma Industry",
    "Teaching & Academia in Veterinary Colleges",
  ];

  const documentsRequired = [
    "10th & 12th Mark Sheets",
    "NEET Scorecard",
    "Domicile Certificate (if applicable)",
    "Caste/Category Certificate (if applicable)",
    "Migration Certificate",
    "Passport-size Photographs",
    "ID Proof (Aadhar/Passport)",
    "Allotment Letter (for counseling applicants)",
  ];

  const renderTable = (data, headers = null) => (
    <div className="overflow-x-auto rounded-lg shadow-md border  mb-6">
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
        title="BVSc & AH Admission 2025 - Veterinary Science Course, Fees & Colleges"
        description="Complete guide on BVSc & AH including eligibility, NEET, admission process, fees, seat matrix, top colleges & career opportunities."
        keywords={[
          "BVSc Admission",
          "Veterinary Colleges India",
          "BVSc & AH Course",
          "NEET UG BVSc",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/BVSc"
      />

      <Header
        title="BVSc & AH (Bachelor of Veterinary Science & Animal Husbandry)"
        subtitle="Program Details, Admission, Fees, Seat Matrix & Career Opportunities"
        description="Learn everything about BVSc including eligibility, NEET exam, admission process, fees, colleges, cutoffs, and career guidance with Global Edulogy."
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
          <h2 className="text-2xl font-semibold mb-4">NEET Exam Format 2025</h2>
          {renderTable(neetExamFormat, ["Component", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Veterinary Colleges in India
          </h2>
          {renderTable(veterinaryColleges)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Seat Matrix</h2>
          {renderTable(seatMatrix)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Private Veterinary Colleges
          </h2>
          {renderTable(topPrivateColleges)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>
          {renderTable(feesStructure)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Admission Process 2025
          </h2>
          {renderTable(admissionProcess, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Cutoff for Veterinary Admission
          </h2>
          {renderTable(cutoff)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
          {renderList(careerOpportunities)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Documents Required for Admission
          </h2>
          {renderList(documentsRequired)}
        </section>
      </main>
    </>
  );
};

export default Page;

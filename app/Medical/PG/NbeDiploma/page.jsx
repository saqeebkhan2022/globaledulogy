"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "The NBE Diploma is a specialized postgraduate medical qualification awarded by the National Board of Examinations (NBE).",
    "These programs are designed for MBBS graduates who wish to specialize in specific fields of medicine.",
    "The diploma ensures comprehensive knowledge, clinical skills, and hands-on training.",
    "All courses are recognized by the National Medical Commission (NMC/MCI).",
  ];

  const specializations = [
    "Diploma in Anesthesia",
    "Diploma in Child Health (DCH)",
    "Diploma in Obstetrics & Gynecology (DGO)",
    "Diploma in Radiology",
    "Diploma in Pathology",
    "Diploma in Ophthalmology (DO)",
    "Diploma in Orthopedics (D Orth)",
    "Diploma in Dermatology, Venereology, and Leprosy (DDVL)",
    "Diploma in Otorhinolaryngology (DLO)",
  ];

  const topHospitals = [
    [
      "Christian Medical College (CMC)",
      "Vellore",
      "Orthopedics, Ophthalmology, Radiology, Dermatology",
      "NEET-PG",
    ],
    [
      "Tata Memorial Hospital",
      "Mumbai",
      "Anesthesia, OBG, Child Health, Orthopedics",
      "NEET-PG",
    ],
    [
      "Madras Medical College",
      "Chennai",
      "Medicine, Surgery, Radiology, Pathology, Anesthesia",
      "NEET-PG",
    ],
    [
      "PGIMER",
      "Chandigarh",
      "Medicine, Surgery, Radiology, Pathology, Anesthesia",
      "PGIMER",
    ],
    [
      "Sree Chitra Tirunal Institute",
      "New Delhi",
      "Cardiology, Neurology, Radiology, Anesthesia",
      "NEET-PG",
    ],
    [
      "KEM Hospital",
      "Mumbai",
      "OBG, Pediatrics, Radiology, Anesthesia",
      "NEET-PG",
    ],
    [
      "Sir Ganga Ram Hospital",
      "Thiruvananthapuram",
      "Radiology, Anesthesia, Surgery, OBG",
      "NEET-PG",
    ],
    [
      "Safdarjung Hospital",
      "New Delhi",
      "General Surgery, Pediatrics, Orthopedics, Dermatology",
      "NEET-PG",
    ],
  ];

  const entranceExams = [
    [
      "NEET-PG",
      "Conducted by NBE. Required for most NBE Diploma programs. Eligibility: MBBS + MCI/NMC registration.",
    ],
    [
      "PGIMER Entrance Exam",
      "Conducted by PGIMER, Chandigarh. Program-specific diploma admissions.",
    ],
  ];

  const eligibility = [
    [
      "Educational Qualification",
      "MBBS degree from a recognized institution + MCI/NMC or State registration",
    ],
    [
      "Entrance Exam",
      "Must qualify NEET-PG or specific institutional entrance test",
    ],
    [
      "Clinical Experience",
      "Some specialties may require prior clinical exposure",
    ],
  ];

  const admissionSteps = [
    ["Step 1", "Check eligibility (MBBS + Registration)."],
    ["Step 2", "Register for NEET-PG / PGIMER entrance exam."],
    ["Step 3", "Prepare and appear for the exam."],
    ["Step 4", "Participate in counseling for seat allocation."],
    ["Step 5", "Complete admission by paying fees and verifying documents."],
  ];

  const seatMatrix = [
    [
      "Total Diploma Seats (as of Nov 2024)",
      "3,203 across India (NBEMS accredited)",
    ],
  ];

  const stipend = [
    ["Andhra Pradesh - AMC, Visakhapatnam", "₹50,686"],
    ["Assam - AMC, Dibrugarh", "₹48,000"],
    ["Bihar - Patna Medical College", "₹69,115"],
    ["Delhi - MAMC, New Delhi", "₹1,20,535"],
    ["Goa - GMC, Panaji", "₹60,000"],
    ["Gujarat - BJMC, Ahmedabad", "₹84,000"],
    ["Karnataka - BMC, Bangalore", "₹45,000"],
    ["Maharashtra - Grant Medical College, Mumbai", "₹54,686"],
    ["TamilNadu - MMC, Chennai", "₹40,000"],
    ["Uttar Pradesh - KGMU, Lucknow", "₹55,000"],
  ];

  const feeStructure = [
    ["TamilNadu (Govt.)", "₹1,25,000/year tuition + ₹30,000 security deposit"],
    [
      "Other States/Institutions",
      "Varies by hospital policy, usually lower in govt. hospitals",
    ],
  ];

  const whyChoose = [
    "Career Advancement: Opens doors to govt. & private hospitals, research, teaching, and higher pay.",
    "National Recognition: Respected qualification recognized across India.",
    "Diverse Specializations: Flexibility to pursue chosen specialty.",
    "High-Quality Education: Training in top hospitals with clinical exposure.",
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
        title="NBE Diploma Admission in India - Course, Fees, Seats & Process"
        description="Comprehensive guide on NBE Diploma programs including eligibility, fees, seat matrix, stipend, and top hospitals in India."
        keywords={[
          "NBE Diploma",
          "NBE Diploma Admission",
          "NEET-PG Diploma",
          "NBEMS",
        ]}
        canonical="https://www.globaledulogy.com/Medical/PG/NBE-Diploma"
      />

      <Header
        title="NBE Diploma Program"
        subtitle="Specialized Postgraduate Medical Qualifications"
        description="Explore NBE Diploma courses with details on eligibility, entrance exams, fees, stipends, bond, and top hospitals."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            What is the NBE Diploma?
          </h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Available Specializations
          </h2>
          {renderList(specializations)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Best Hospitals for NBE Diploma Courses
          </h2>
          {renderTable(topHospitals, [
            "Hospital",
            "Location",
            "Specializations",
            "Entrance Exam",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Entrance Exams</h2>
          {renderTable(entranceExams, ["Exam", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderTable(eligibility, ["Requirement", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How to Apply - Step by Step
          </h2>
          {renderTable(admissionSteps, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Seat Matrix</h2>
          {renderTable(seatMatrix, ["Category", "Seats"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Stipend Details</h2>
          {renderTable(stipend, ["State & Hospital", "Monthly Stipend"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fee Structure</h2>
          {renderTable(feeStructure, ["Institution", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose the NBE Diploma?
          </h2>
          {renderList(whyChoose)}
        </section>
      </main>
    </>
  );
};

export default Page;

"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "BHMS (Bachelor of Homeopathic Medicine and Surgery) is an undergraduate program that combines homeopathy principles with modern medical science for holistic healing.",
    "The course duration is 5.5 years, including a 1-year internship.",
    "Graduates can treat illnesses using homeopathic remedies and contribute to healthcare, research, and education.",
    "Global Edulogy provides guidance for admission, seat matrix, fees, and career counseling for BHMS aspirants.",
  ];

  const courseDuration = [
    [
      "Academic Study",
      "4.5 years (Theory, Practicals, Laboratory Work, Clinical Training)",
    ],
    ["Internship", "1 year (Hands-on experience in hospitals or clinics)"],
  ];

  const admissionProcess = [
    [
      "Eligibility Criteria",
      "Completed 10+2 with Science (Physics, Chemistry, Biology), Minimum 50% marks for general category, Age 17-25 years",
    ],
    ["Entrance Exams", "NEET UG or state-level BHMS entrance exams"],
    [
      "Counseling & Seat Allocation",
      "Merit-based counseling according to reservation policies and seat availability, conducted by state medical councils",
    ],
    [
      "Document Verification",
      "Submission of mark sheets, entrance scorecards, identity proof, and other required documents",
    ],
    [
      "Payment of Fees",
      "Payment to confirm admission after document verification",
    ],
    ["Reporting to College", "Joining college to start the academic program"],
  ];

  const feesStructure = [
    ["Government Colleges", "₹25,000 - ₹2,00,000 per year"],
    ["Private Colleges", "₹1,00,000 - ₹10,00,000 per year"],
  ];

  const seatsMatrixGov = [
    ["Total Seats", "30-100 seats per college"],
    ["Reservation (SC/ST/OBC)", "As per government norms"],
  ];

  const seatsMatrixPrivate = [
    ["Total Seats", "60-200 seats per college depending on infrastructure"],
    ["Reservation (SC/ST/OBC)", "As per college policy"],
  ];

  const neetCutoff = [
    ["General Category", "50th percentile or above"],
    ["Reserved Categories (SC/ST/OBC)", "40-45th percentile"],
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
        title="BHMS Admission in India - Course, Fees & Top Colleges"
        description="Complete guide on BHMS including course details, admission process, fees, seat matrix, NEET cutoff, and career opportunities."
        keywords={[
          "BHMS Admission",
          "Homeopathy Colleges India",
          "BHMS Course",
          "NEET UG BHMS",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Bhms"
      />

      <Header
        title="BHMS (Bachelor of Homeopathic Medicine and Surgery)"
        subtitle="Program Details, Admission, Fees, Seat Matrix & NEET Cutoff"
        description="Learn everything about BHMS including eligibility, course structure, admission process, fees, cutoff, seat matrix, and career guidance with Global Edulogy."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Course Duration</h2>
          {renderTable(courseDuration, ["Part", "Duration / Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionProcess, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>
          {renderTable(feesStructure, ["Type of College", "Annual Fees"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Seats Matrix - Government Colleges
          </h2>
          {renderTable(seatsMatrixGov, ["Category / Detail", "Seats"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Seats Matrix - Private Colleges
          </h2>
          {renderTable(seatsMatrixPrivate, ["Category / Detail", "Seats"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">NEET Cutoff for BHMS</h2>
          {renderTable(neetCutoff, ["Category", "Cutoff"])}
        </section>
      </main>
    </>
  );
};

export default Page;

"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "BAMS (Bachelor of Ayurvedic Medicine and Surgery) is an undergraduate degree in Ayurveda, combining traditional medicine with modern medical science.",
    "The course duration is 5.5 years: 4.5 years of academics + 1 year internship.",
    "Graduates can practice as Ayurvedic doctors, contribute to research, education, and healthcare management.",
    "The program provides holistic health knowledge and prepares students for diverse career opportunities in India and abroad.",
  ];

  const courseDuration = [
    [
      "Academic Study",
      "4.5 years (Classroom lectures, practicals, lab work, clinical training)",
    ],
    ["Internship", "1 year (Hospital/Clinic/Healthcare institution)"],
  ];

  const curriculum = [
    ["Sharir Rachana", "Anatomy"],
    ["Sharir Kriya", "Physiology"],
    ["Dravyaguna Vigyan", "Pharmacology"],
    ["Agad Tantra", "Toxicology"],
    ["Kayachikitsa", "General Medicine"],
    ["Shalyatantra", "Surgery"],
    ["Panchakarma", "Detoxification Therapy"],
    ["Rog Nidan", "Diagnostic Techniques"],
  ];

  const topGovColleges = [
    [1, "Institute of Medical Sciences, BHU", "Varanasi", 1920],
    [2, "National Institute of Ayurveda", "Jaipur", 1976],
    [3, "Government Ayurvedic College", "Patiala", 1952],
    [4, "Ayurvedic and Unani Tibbia College", "New Delhi", 1921],
    [5, "Government Ayurvedic College", "Guwahati", 1948],
  ];

  const topPrivateColleges = [
    [1, "SDM College of Ayurveda and Hospital", "Udupi", 1922],
    [2, "KLE University’s Shri BMK Ayurveda Mahavidyalaya", "Belgaum", 1933],
    [3, "D.Y. Patil College of Ayurved and Research Centre", "Pune", 1999],
    [4, "Vaidyaratnam P.S. Varier Ayurveda College", "Kottakkal", 1917],
    [
      5,
      "Sri Dharmasthala Manjunatheshwara College of Ayurveda",
      "Hassan",
      1922,
    ],
  ];

  const feesStructure = [
    ["Government Colleges (Indian)", "INR 20,000 - 80,000 per year"],
    ["Government Colleges (International)", "INR 1,00,000 - 3,00,000 per year"],
    ["Private Colleges (Indian)", "INR 1,50,000 - 5,00,000 per year"],
    ["Private Colleges (International)", "INR 3,00,000 - 10,00,000 per year"],
    ["Hostel Fees", "INR 50,000 - 1,00,000 per year"],
    ["Books & Study Materials", "INR 10,000 - 30,000 per year"],
  ];

  const neetCutoff = [
    ["General", "450 - 550"],
    ["OBC", "400 - 500"],
    ["SC", "300 - 400"],
    ["ST", "250 - 350"],
  ];

  const seatsMatrixGov = [
    ["General", "40% - 50%"],
    ["OBC", "25% - 30%"],
    ["SC", "15% - 20%"],
    ["ST", "5% - 10%"],
    ["PwD", "2% - 5%"],
  ];

  const seatsMatrixPrivate = [
    [
      "General/Management/NRI",
      "Higher % depending on college, usually 100-200 seats",
    ],
    ["OBC/SC/ST", "As per college policy"],
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
        title="BAMS Admission in India - Course, Fees & Top Colleges"
        description="Detailed guide on BAMS including course, curriculum, top colleges, fees, cutoff, seat matrix, and admission process."
        keywords={[
          "BAMS Admission",
          "Ayurvedic Colleges India",
          "BAMS Course",
          "NEET UG BAMS",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Bams"
      />

      <Header
        title="BAMS (Bachelor of Ayurvedic Medicine and Surgery)"
        subtitle="Program Details, Curriculum, Admission, Top Colleges & Fees"
        description="Learn everything about BAMS including eligibility, course structure, top colleges, fees, cutoff, seat matrix, and admission process."
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
          <h2 className="text-2xl font-semibold mb-4">BAMS Curriculum</h2>
          {renderTable(curriculum, ["Subject", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Government BAMS Colleges
          </h2>
          {renderTable(topGovColleges, [
            "S.No",
            "College Name",
            "State",
            "Established",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Private BAMS Colleges
          </h2>
          {renderTable(topPrivateColleges, [
            "S.No",
            "College Name",
            "State",
            "Established",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>
          {renderTable(feesStructure, ["Type / Expense", "Annual Fees"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            NEET-UG Cutoff for BAMS
          </h2>
          {renderTable(neetCutoff, ["Category", "Marks Range"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Seats Matrix - Government Colleges
          </h2>
          {renderTable(seatsMatrixGov, ["Category", "Seats %"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Seats Matrix - Private Colleges
          </h2>
          {renderTable(seatsMatrixPrivate, ["Category", "Seats Details"])}
        </section>
      </main>
    </>
  );
};

export default Page;

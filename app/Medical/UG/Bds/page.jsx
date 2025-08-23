"use client";
import React from "react";
import Header from "../../utils/Header";
import SEO from "../../../components/SEO";

const Page = () => {
  const overview = [
    "The BDS (Bachelor of Dental Surgery) program trains students in diagnosing, treating, and preventing dental conditions.",
    "It includes subjects like oral anatomy, physiology, biochemistry, pathology, pharmacology, and clinical dentistry.",
    "Students gain both theoretical knowledge and practical clinical experience, preparing them for professional dental practice.",
    "Graduates can pursue advanced studies or specializations in orthodontics, periodontology, prosthodontics, and oral surgery.",
    "This guide covers the program duration, admission process, fees, eligibility, syllabus, career prospects, and salary expectations.",
  ];

  const eligibility = [
    "Candidates must have completed 10+2 (or equivalent) with Physics, Chemistry, Biology, and English.",
    "A minimum of 50% marks in the qualifying exam (40% for reserved categories) is required.",
    "Candidates must be at least 17 years old as of December 31 of the admission year.",
    "Some colleges require NEET scores for admission into the BDS program.",
  ];

  const courseStructure = [
    [
      "Year 1",
      "Introduction to Dentistry, Human Anatomy, Oral Histology, Biochemistry, Physiology",
    ],
    [
      "Year 2",
      "Dental Materials, Microbiology, Pathology, General Medicine, General Surgery, Preventive & Community Dentistry",
    ],
    [
      "Year 3",
      "Oral Medicine and Radiology, Oral Pathology, Pharmacology, Conservative Dentistry",
    ],
    [
      "Year 4",
      "Periodontology, Prosthodontics, Pedodontics, Oral & Maxillofacial Surgery, Orthodontics",
    ],
    [
      "Year 5",
      "Clinical postings, Internship, Specialization training in various disciplines",
    ],
  ];

  const subjectsCovered = [
    "Human Anatomy & Physiology: Study of human body systems and their relevance to oral health.",
    "Oral Pathology & Microbiology: Understanding oral diseases and their microbial causes.",
    "Dental Materials: Knowledge of materials used in dental treatments including crowns, fillings, and braces.",
    "Preventive Dentistry: Emphasis on oral hygiene, preventive care, and community health practices.",
    "Prosthodontics: Design and fitting of dental prostheses such as dentures, bridges, and implants.",
    "Oral & Maxillofacial Surgery: Techniques to manage diseases or injuries affecting the mouth, jaws, and face.",
  ];

  const documentsRequired = [
    "Class 12 Mark Sheet & Passing Certificate",
    "Class 10 Mark Sheet for age verification",
    "NEET Scorecard (if applicable)",
    "Passport-size photographs (3-6 recent photos)",
    "Government-issued photo ID (Aadhar, Passport, Voter ID, etc.)",
    "Caste Certificate (if applicable)",
    "Transfer Certificate / School Leaving Certificate",
    "Migration Certificate (if applicable)",
    "Medical Fitness Certificate",
    "Character Certificate",
    "Income Certificate (if applying for concessions or scholarships)",
    "Domicile Certificate (if required)",
    "Gap Certificate (if applicable)",
  ];

  const admissionProcess = [
    "Submit the application form online or offline as per the institution's guidelines.",
    "Appear for entrance exams such as NEET where required.",
    "Selection through merit-based counseling for seat allocation.",
    "Document verification including educational certificates and identity proof.",
    "Final admission confirmation after completing all formalities.",
  ];

  const benefits = [
    "High demand for dental professionals due to increased awareness of oral health.",
    "Flexible career opportunities in private clinics, hospitals, or academia.",
    "Opportunities to specialize in fields like orthodontics, periodontology, or prosthodontics.",
    "Recognition as a professional dentist, with opportunities to work nationally or internationally.",
  ];

  const topColleges = [
    "Saveetha Institute of Medical and Technical Sciences",
    "Manipal College of Dental Sciences, Manipal",
    "Maulana Azad Institute of Dental Sciences",
    "King George's Medical University",
    "Dr. D. Y. Patil Vidyapeeth",
    "A.B. Shetty Memorial Institute of Dental Sciences",
    "SRM Dental College",
    "Jamia Millia Islamia",
    "Siksha 'O' Anusandhan",
    "Sri Ramachandra Institute of Higher Education and Research",
  ];

  const faqs = [
    {
      question: "What is the duration of the BDS program?",
      answer:
        "The BDS program is typically five years long, including one year of internship.",
    },
    {
      question:
        "Can I pursue BDS after 12th Science with Physics, Chemistry, and Biology?",
      answer:
        "Yes, completion of 12th Science with the required subjects is mandatory to pursue BDS.",
    },
    {
      question: "What is the career scope of BDS in India?",
      answer:
        "BDS graduates can work in private clinics, dental hospitals, government healthcare, or pursue higher studies.",
    },
    {
      question:
        "Can I practice dentistry abroad after completing BDS in India?",
      answer:
        "Yes, but you may need to pass the licensing exams or meet requirements specific to the country.",
    },
    {
      question: "How can I specialize after BDS?",
      answer:
        "Graduates can pursue MDS (Master of Dental Surgery) in fields like orthodontics, periodontology, prosthodontics, etc.",
    },
    {
      question: "What is the BDS cutoff for general category?",
      answer:
        "Typically, a score above 450 is favorable for admission to a government college, though it varies by state.",
    },
    {
      question: "Can a candidate with 256 NEET marks get a BDS seat?",
      answer:
        "Yes, in some private colleges or under state quota for SC/ST candidates, admission is possible.",
    },
  ];

  const renderList = (items) => (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

  const renderTable = (data, headers) => (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#003366] text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 text-left font-medium">
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

  // Table data for top colleges
  const topCollegesTable = topColleges.map((college, idx) => [
    idx + 1,
    college,
  ]);

  return (
    <>
      <SEO
        title="BDS Admission in India - Course, Eligibility & Top Colleges"
        description="Complete guide for BDS admission in India including eligibility, course structure, top colleges, documents required, and career benefits."
        keywords={[
          "BDS Admission",
          "Dental Colleges India",
          "BDS Course",
          "NEET UG BDS",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Bds"
      />

      <Header
        title="BDS (Bachelor of Dental Surgery)"
        subtitle="Program Details, Eligibility, Admission, Top Colleges "
        description="Learn everything about BDS including eligibility, course structure, admission process, top colleges, benefits."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
          {renderList(overview)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          {renderList(eligibility)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
          {renderTable(courseStructure, ["Year", "Subjects / Activities"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Subjects Covered</h2>
          {renderList(subjectsCovered)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Documents Required for Admission
          </h2>
          {renderList(documentsRequired)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderList(admissionProcess)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Dental Colleges in India
          </h2>
          {renderTable(topCollegesTable, ["S.No", "College Name"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Benefits of Pursuing BDS
          </h2>
          {renderList(benefits)}
        </section>
      </main>
    </>
  );
};

export default Page;

"use client";
import React from "react";
import Header from "../Medical/utils/Header";
import SEO from "../components/SEO";

const Page = () => {
  const overview = [
    "Pursue MBBS in top international destinations with globally recognized curricula and clinical exposure.",
    "Benefit from affordable tuition options, English-medium instruction, and diverse cultural experience.",
    "Global Edulogy provides end-to-end guidance: university selection, applications, visas, and pre-departure.",
  ];

  const countries = [
    "Nepal",
    "Bangladesh",
    "Russia",
    "Georgia",
    "Kazakhstan",
    "Kyrgyzstan",
    "Philippines",
    "Armenia",
    "Vietnam",
    "Uzbekistan",
    "Egypt",
    "China",
    "Romania",
    "Belarus",
    "Mauritius",
    "Lithuania",
    "Caribbean",
    "Latvia",
  ];

  const services = [
    [
      "University Selection",
      "Shortlisting based on budget, recognition (NMC/WHO-listed), language, and clinical exposure.",
    ],
    [
      "Application Assistance",
      "Form filling, SOP/LOR guidance, document review, and submission tracking.",
    ],
    [
      "Visa & Documentation",
      "Complete visa file preparation, appointment scheduling, and compliance checks.",
    ],
    [
      "Scholarship & Budget Planning",
      "Cost estimates (tuition + living), fee schedules, and available waivers/scholarships.",
    ],
    [
      "Pre-Departure Support",
      "Accommodation help, insurance, forex, SIM, and cultural orientation.",
    ],
    [
      "Post-Arrival Care",
      "Airport pickup coordination (where available), onboarding, and local support.",
    ],
  ];

  const benefits = [
    "Expertise & Experience: Dedicated MBBS-abroad team with strong university relationships.",
    "Comprehensive Support: From counseling to post-arrival assistance.",
    "Tailored Guidance: Country, university, and curriculum matched to your goals.",
    "Transparent Processes: Clear timelines, document lists, and fee breakdowns.",
  ];

  const admissionSteps = [
    [
      "Initial Counseling",
      "Profile evaluation, country & university shortlisting.",
    ],
    [
      "Document Preparation",
      "Transcripts, passport, photos, medical and police clearance (as applicable).",
    ],
    [
      "Applications & Offers",
      "Submit applications, receive offer/LOA, and confirm acceptance.",
    ],
    ["Fee Payment", "Tuition/seat confirmation as per university invoice."],
    [
      "Visa Process",
      "File preparation, interview (if required), and visa decision.",
    ],
    [
      "Pre-Departure",
      "Ticketing, accommodation, orientation, and packing checklist.",
    ],
    [
      "Enrollment",
      "University reporting, medical check (if needed), and class registration.",
    ],
  ];

  const docsRequired = [
    ["Academics", "10th & 12th mark sheets/certificates, transcripts."],
    ["Identity", "Valid passport (with required validity)."],
    ["Photos", "Recent passport-size photographs (specs vary by embassy)."],
    ["Financials", "Bank statements/affidavit/sponsorship (country-specific)."],
    ["Medical", "Fitness certificate/vaccinations (country-specific)."],
    ["Police Clearance", "PCC if required by destination/embassy."],
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
        title="MBBS Abroad - Countries, Process, Visa & Guidance | Global Edulogy"
        description="Explore MBBS abroad with Global Edulogy: top countries, admission steps, documents, visa guidance, and comprehensive support for medical aspirants."
        keywords={[
          "MBBS Abroad",
          "Study Medicine Overseas",
          "MBBS Consultants",
          "Medical Admission Abroad",
          "Global Edulogy",
        ]}
        canonical="https://www.globaledulogy.com/Abroad/MBBS"
      />

      <Header
        title="MBBS Abroad"
        subtitle="Study Medicine Overseas with Expert Guidance"
        description="Discover top destinations, understand the complete admission workflow, and get end-to-end support from Global Edulogy."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>
        {/* Countries Grid */}

        {/* Countries Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Popular Countries for MBBS Abroad
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((c) => {
              // Normalize country codes for flags (using flagcdn)
              const flagMap = {
                Nepal: "np",
                Bangladesh: "bd",
                Russia: "ru",
                Georgia: "ge",
                Kazakhstan: "kz",
                Kyrgyzstan: "kg",
                Philippines: "ph",
                Armenia: "am",
                Vietnam: "vn",
                Uzbekistan: "uz",
                Egypt: "eg",
                China: "cn",
                Romania: "ro",
                Belarus: "by",
                Mauritius: "mu",
                Lithuania: "lt",
                Caribbean: "do", // default to Dominican Republic flag
                Latvia: "lv",
              };

              const code = flagMap[c] || "un"; // fallback unknown flag

              return (
                <div
                  key={c}
                  className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`https://flagcdn.com/w40/${code}.png`}
                    alt={`${c} flag`}
                    className="w-10 h-7 object-cover rounded mb-2"
                  />
                  <span className="text-gray-800 font-medium text-center">
                    {c}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            MBBS Abroad Services by Global Edulogy
          </h2>
          {renderTable(services, ["Service", "Details"])}
        </section>
        {/* Why Choose */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Global Edulogy?
          </h2>
          {renderList(benefits)}
        </section>
        {/* Admission Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          {renderTable(admissionSteps, ["Step", "Details"])}
        </section>
        {/* Documents */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          {renderTable(docsRequired, ["Category", "Documents"])}
          <p className="text-sm text-gray-600">
            * Country/university specific requirements may apply. Global Edulogy
            provides a destination-wise checklist and formats.
          </p>
        </section>
        {/* CTA */}
        <section className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">
            Start Your MBBS Abroad Journey
          </h2>
          <p className="text-gray-700">
            Connect with Global Edulogy for personalized counseling, transparent
            timelines, and step-by-step support—right from shortlisting to
            enrollment.
          </p>
        </section>
      </main>
    </>
  );
};

export default Page;

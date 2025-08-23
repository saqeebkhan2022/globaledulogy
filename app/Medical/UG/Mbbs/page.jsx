"use client";
import React from "react";
import Header from "../../utils/Header";
import Link from "next/link";
import SEO from "../../../components/SEO";

const Page = () => {
  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Deemed",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",

    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "TamilNadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Convert state name to URL-friendly slug
  const getStateUrl = (name) => `/Medical/UG/Mbbs/${name.replace(/\s+/g, "-")}`;

  return (
    <>
      <SEO
        title="NEET UG Counselling for MBBS"
        description="Step-by-step guidance for securing your MBBS admission through NEET UG Counselling in India"
        keywords={["NEET", "UG", "Counselling", "MBBS", "Admission", "India"]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs"
      />
      <Header
        title="NEET UG Counselling in Karnataka - MBBS Admissions 2025"
        subtitle="Step-by-step guidance for MBBS admission in Karnataka"
        description="Complete guide for NEET UG counselling in Karnataka including eligibility, seat matrix, and registration process."
      />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar - Table of Contents */}
        <aside className="hidden md:block col-span-1 sticky top-24 self-start bg-gray-50 shadow-sm rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#EA4E14]">
            State Wise Counselling
          </h2>
          <p className="text-sm text-black mb-6">
            Select your state below to check counselling details, seat matrix,
            eligibility, and registration process.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {states.map((state) => (
              <Link
                key={state}
                href={getStateUrl(state)}
                className="block rounded-lg text-center bg-[#003366] border border-gray-200  transition p-2 text-sm font-medium text-white"
              >
                {state}
              </Link>
            ))}
          </div>
        </aside>

        {/* Mobile State Dropdown */}
        <div className="md:hidden ml-[40px] flex justify-center items-center w-full">
          <div className="w-full max-w-xs items-center relative group">
            <label
              htmlFor="stateDropdown"
              className="mb-4 text-2xl ml- font-bold text-[#EA4E14] text-center block"
            >
              State Wise Counselling
            </label>
            <select
              id="stateDropdown"
              className="w-full bg-[#EA4E14] text-white text-center text-lg font-medium p-3 rounded-full shadow-lg hover:bg-[#ff5e2b] focus:outline-none focus:ring-4 focus:ring-[#FFAB91] transition-colors appearance-none pr-8 cursor-pointer"
              onChange={(e) => {
                const url = e.target.value;
                if (url) window.location.href = url;
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select your state
              </option>
              {states.map((state) => (
                <option key={state} value={getStateUrl(state)}>
                  {state}
                </option>
              ))}
            </select>
            {/* The custom chevron icon */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-8 w-8 mt-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="col-span-3 space-y-10 text-gray-800 leading-relaxed">
          <p className="text-lg">
            The{" "}
            <strong>National Eligibility cum Entrance Test (NEET) UG</strong>
            is the mandatory exam for students aspiring to study medicine in
            India. While qualifying NEET UG is the first step, the next and
            equally important stage is the <strong>counselling process</strong>,
            which decides admission to MBBS seats across the country.
            <strong> Global Edulogy</strong> has created this comprehensive
            guide to help students navigate NEET UG counselling confidently.
          </p>

          {/* Overview */}
          <div id="overview">
            <h2 className="text-2xl font-semibold mb-3">
              Overview of NEET UG Counselling
            </h2>
            <p>
              NEET UG counselling is conducted for admission to MBBS seats in
              both government and private medical colleges in India.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>15% All India Quota (AIQ)</strong> – Conducted by MCC
                under DGHS.
              </li>
              <li>
                <strong>85% State Quota</strong> – Managed by respective state
                counselling authorities.
              </li>
              <li>
                Separate rounds for{" "}
                <strong>
                  deemed universities, central universities, AIIMS, JIPMER, and
                  private colleges
                </strong>
                .
              </li>
            </ul>
          </div>

          {/* Eligibility */}
          <div id="eligibility">
            <h2 className="text-2xl font-semibold mb-3">
              Eligibility for NEET UG Counselling
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Qualify the NEET UG examination.</li>
              <li>Register within the given counselling schedule.</li>
              <li>
                Meet the specific eligibility criteria of the concerned
                authority.
              </li>
            </ol>
          </div>

          {/* Counselling Process */}
          <div id="process">
            <h2 className="text-2xl font-semibold mb-3">
              Counselling Procedure
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Registration</strong> – Sign up on MCC/state portals
                with NEET details.
              </li>
              <li>
                <strong>Fee Payment</strong> – Pay the non-refundable
                counselling fee.
              </li>
              <li>
                <strong>Choice Filling & Locking</strong> – Select preferred
                colleges and confirm choices.
              </li>
              <li>
                <strong>Seat Allotment</strong> – Allocation based on rank,
                preference, and availability.
              </li>
              <li>
                <strong>Reporting</strong> – Visit allotted college with
                required documents.
              </li>
              <li>
                <strong>Upgradation</strong> – Apply for a better seat in later
                rounds, if desired.
              </li>
            </ol>
          </div>

          {/* Documents */}
          <div id="documents">
            <h2 className="text-2xl font-semibold mb-3">Documents Required</h2>
            <div className="bg-blue-50 border-l-4 border-[#003366] p-4 rounded-md">
              <ul className="list-disc pl-6 space-y-2">
                <li>NEET UG Admit Card & Scorecard</li>
                <li>Class 10 & 12 Mark Sheets and Certificates</li>
                <li>Birth Certificate</li>
                <li>Category / Domicile Certificates (if applicable)</li>
                <li>Passport-sized Photographs</li>
                <li>Provisional Allotment Letter</li>
                <li>Valid ID Proof (Aadhaar, PAN, etc.)</li>
              </ul>
            </div>
          </div>

          {/* Tips */}
          <div id="tips">
            <h2 className="text-2xl font-semibold mb-3">Important Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stay updated with official counselling notices.</li>
              <li>
                Choose colleges wisely considering ranking, location, and
                facilities.
              </li>
              <li>
                Keep originals and copies of all required documents ready.
              </li>
              <li>
                Seek professional guidance from <strong>Global Edulogy</strong>{" "}
                for expert support.
              </li>
            </ul>
          </div>

          {/* Quota */}
          <div id="quota">
            <h2 className="text-2xl font-semibold mb-3">
              Types of NEET UG Counselling Quotas
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>All India Quota (AIQ)</strong> – 15% seats across
                government colleges.
              </li>
              <li>
                <strong>State Quota</strong> – 85% in government + 100% in
                private colleges within the state.
              </li>
              <li>
                <strong>Deemed & Central Universities</strong> – MCC handles DU,
                AMU, BHU, etc.
              </li>
              <li>
                <strong>AIIMS & JIPMER</strong> – Separate counselling, but
                admission via NEET.
              </li>
              <li>
                <strong>Private Colleges</strong> – Counselling by state
                authority or college management.
              </li>
            </ul>
          </div>

          {/* Global Edulogy */}
          <div id="global-edulogy">
            <h2 className="text-2xl font-semibold mb-3">
              How Global Edulogy Supports Students
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration support for MCC and state portals.</li>
              <li>Expert advice on course and college selection.</li>
              <li>Assistance with document verification.</li>
              <li>Timely updates on allotment rounds.</li>
              <li>Guidance for seat upgradation.</li>
              <li>One-on-one personalised counselling.</li>
              <li>Continuous support until final admission.</li>
            </ul>
          </div>

          {/* Final Words */}
          <div id="final">
            <h2 className="text-2xl font-semibold mb-3">Final Words</h2>
            <p>
              Securing admission to MBBS through NEET UG is not only about a
              good score but also making informed counselling decisions. With
              <strong> Global Edulogy</strong>, students can confidently
              navigate the process and improve their chances of admission to top
              medical colleges in India.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

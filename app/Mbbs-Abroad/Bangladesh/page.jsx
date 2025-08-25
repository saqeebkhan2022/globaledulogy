"use client";
import React from "react";
import Header from "../utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  // Why Study MBBS in Bangladesh
  const whyBangladesh = [
    "English is the medium of instruction, ensuring clarity for Indian students.",
    "Food and lifestyle are similar to India, making it easy to adapt.",
    "Affordable MBBS fees range from ₹24–30 Lakhs.",
    "Climate and culture closely resemble India.",
    "Universities recognized by NMC, WHO, WDOMS, ECFMG, FAIMER, BMDC, IMED, and others.",
    "Safe hostels with proper security.",
    "Low travel cost; flights from India start at ₹10,000.",
    "High FMGE/NEXT passing rate compared to other destinations.",
  ];

  // Eligibility Criteria
  const eligibility = [
    ["NEET Qualification", "Mandatory for admission"],
    ["Core Subjects", "Physics, Chemistry, Biology in 10+2"],
    ["Minimum GPA Requirement", "7.0 out of 10 (SSC + HSC combined)"],
    ["GPA in Biology", "Minimum 4.0 (70%)"],
    ["Age Limit", "17 years by 31st Dec of admission year"],
    ["Year of Passing 10th", "Not before 2020"],
    ["Year of Passing 12th", "Not before 2022"],
    ["English Proficiency", "No IELTS/TOEFL required; English in 10+2"],
  ];

  // Admission Step 1
  const admissionStep1 = [
    ["Registration", "Apply through Bangladesh Medical & Dental Council"],
    [
      "Document Upload",
      "Photo, passport, certificates, mark sheets, $100 SWIFT receipt",
    ],
    [
      "Document Attestation",
      "By Ministry of Education & Ministry of Foreign Affairs",
    ],
    ["Application Submission", "Submit online & print system-generated copy"],
    ["Visa Process", "Submit attested form to Bangladesh mission for visa"],
  ];

  // Admission Step 2
  const admissionStep2 = [
    ["Visit University Website", "Apply via official portal"],
    ["Fill Application Form", "Submit before deadline"],
    ["Submit Documents", "Upload academic & passport documents"],
    ["Admission Letter", "Issued if eligible"],
    ["Migration Process", "Begin after admission letter"],
    ["Visa Application", "Submit with documents"],
    ["Visa Approval", "Within 6–8 weeks"],
  ];

  // GPA Requirement Table
  const gpaRequirements = [
    ["Government Medical Colleges", "Minimum GPA 8.0", "Biology 3.5"],
    ["Private Medical Colleges", "Minimum GPA 7.0", "Biology 3.5"],
  ];

  // Documents Required
  const documents = [
    "Valid Passport (6+ months)",
    "Passport-size photographs",
    "Birth Certificate",
    "10th & 12th mark sheets & certificates",
    "Residential proof",
    "Financial documents (bank statement, sponsorship letter)",
    "Additional documents as per university",
  ];

  // Govt Colleges
  const govtColleges = [
    [1, "Chattogram Medical College, Chattogram", 1962, 250],
    [2, "Dhaka Medical College, Dhaka", 1948, 250],
    [3, "M.A.G. Osmani Medical College, Sylhet", 1966, 250],
    [4, "Mymensingh Medical College, Mymensingh", 1962, 250],
    [5, "Rajshahi Medical College, Rajshahi", 1962, 250],
    [6, "Rangpur Medical College, Rangpur", 1972, 250],
    [7, "Sher-E-Bangla Medical College, Barisal", 1968, 250],
    [8, "Sir Salimullah Medical College, Dhaka", 1972, 250],
    [9, "Shaheed Suhrawardy Medical College, Dhaka", 2005, 230],
    [10, "Bangabandhu Sheikh Mujib Medical College, Faridpur", 1992, 200],
    [11, "Cumilla Medical College, Cumilla", 1992, 200],
    [12, "Khulna Medical College, Khulna", 1992, 200],
    [13, "M Abdur Rahim Medical College, Dinajpur", 1992, 200],
    [14, "Shaheed Ziaur Rahman Medical College, Bogura", 1992, 200],
    [15, "Colonel Malek Medical College, Manikganj", 2014, 125],
    [16, "Sheikh Sayera Khatun Medical College, Gopalganj", 2011, 125],
    [17, "Abdul Malek Ukil Medical College, Noakhali", 2008, 100],
    [18, "Cox’s Bazar Medical College, Cox’s Bazar", 2008, 100],
    [19, "Jashore Medical College, Jashore", 2010, 100],
    [20, "Kushtia Medical College, Kushtia", 2011, 100],
    [21, "Mugda Medical College, Mugda, Dhaka", 2015, 100],
    [22, "Pabna Medical College, Pabna", 2008, 100],
    [23, "Satkhira Medical College, Satkhira", 2011, 100],
    [24, "Shaheed M. Monsur Ali Medical College, Sirajganj", 2014, 100],
    [25, "Shaheed Syed Nazrul Islam Medical College, Kishoreganj", 2011, 100],
    [26, "Shaheed Taj Uddin Ahmad Medical College, Gazipur", 2013, 100],
    [27, "Sheikh Hasina Medical College, Habiganj", 2017, 100],
    [28, "Sheikh Hasina Medical College, Jamalpur", 2014, 100],
    [29, "Sheikh Hasina Medical College, Tangail", 2014, 100],
    [30, "Bangabandhu Medical College, Sunamganj", 2020, 75],
    [31, "Chandpur Medical College, Chandpur", 2018, 75],
    [32, "Magura Medical College, Magura", 2018, 75],
    [33, "Naogaon Medical College, Naogaon", 2018, 75],
    [34, "Netrokona Medical College, Netrokona", 2018, 75],
    [35, "Nilphamari Medical College, Nilphamari", 2018, 75],
    [36, "Patuakhali Medical College, Patuakhali", 2014, 75],
    [37, "Rangamati Medical College, Rangamati", 2014, 75],
  ];

  // Private Colleges (Sample)
  const privateColleges = [
    [1, "Ad-din Akij Medical College", "Khulna", "2013", 60, "$33,000"],
    [2, "Dhaka National Medical College", "Dhaka", "1995", 130, "$35,000"],
    [
      3,
      "Parkview Medical College & Hospital",
      "Sylhet",
      "2014-15",
      82,
      "$36,000",
    ],
    [4, "BGC Trust Medical College", "Chattogram", "2002", 100, "$36,000"],
    [5, "Ad-din Sakina Medical College", "Jashore", "2012", 75, "$37,000"],
    [
      6,
      "Monowara Sikder Medical College & Hospital",
      "Shariatpur",
      "2015",
      50,
      "$37,000",
    ],
    [
      7,
      "President Abdul Hamid Medical College & Hospital",
      "Kishoreganj",
      "2014-15",
      100,
      "$38,000",
    ],
    [
      8,
      "Brahmanbaria Medical College",
      "Brahmanbaria",
      "2014-15",
      60,
      "$38,000",
    ],
    [9, "North Bengal Medical College", "Sirajganj", "2000", 85, "$38,000"],
    [10, "Ad-din Bashundhara Medical College", "Dhaka", "2013", 50, "$38,500"],
    [11, "Marks Medical College", "Dhaka", "2011", 70, "$39,000"],
    [12, "Gazi Medical College", "Khulna", "2012", 100, "$39,500"],
    [13, "Barind Medical College", "Rajshahi", "2012", 105, "$40,000"],
    [14, "City Medical College", "Gazipur", "2012", 80, "$40,000"],
    [15, "Islami Bank Medical College", "Rajshahi", "2004", 85, "$40,000"],
    [16, "Khulna City Medical College", "Khulna", "2016", 50, "$40,000"],
    [
      17,
      "Marine City Medical College & Hospital",
      "Chattogram",
      "2014-15",
      65,
      "$40,000",
    ],
    [18, "Moinamoti Medical College", "Comilla", "2012", 100, "$40,000"],
    [19, "US-Bangla Medical College", "Narayanganj", "2015", 60, "$40,000"],
    [20, "Southern Medical College", "Chattogram", "2006", 65, "$41,000"],
    [21, "Central Medical College", "Comilla", "2005", 80, "$41,000"],
    [
      22,
      "Jahurul Islam Medical College",
      "Kishoreganj",
      "1992",
      100,
      "$41,000",
    ],
    [
      23,
      "Diabetic Association Medical College",
      "Faridpur",
      "2010",
      90,
      "$42,000",
    ],
    [
      24,
      "Institute of Applied Health Sciences",
      "Chattogram",
      "1990",
      80,
      "$42,000",
    ],
    [25, "Popular Medical College", "Dhaka", "2010", 135, "$42,000"],
    [26, "Prime Medical College", "Rangpur", "2008", 135, "$42,000"],
    [
      27,
      "Rangpur Community Hospital Medical College",
      "Rangpur",
      "2008",
      135,
      "$42,000",
    ],
    [28, "Shahabuddin Medical College", "Dhaka", "2003", 90, "$42,000"],
    [29, "Sylhet Women’s Medical College", "Sylhet", "2006", 100, "$42,000"],
    [
      30,
      "Z.H. Sikder Women's Medical College",
      "Dhaka",
      "1992",
      100,
      "$42,000",
    ],
    [
      31,
      "Chattagram Maa-O-Shishu Hospital Medical College",
      "Chattogram",
      "2006",
      115,
      "$43,000",
    ],
    [32, "Ad-din Women’s Medical College", "Dhaka", "2008", 100, "$43,000"],
    [33, "Eastern Medical College", "Comilla", "2005", 115, "$43,000"],
    [34, "MH Samorita Medical College", "Dhaka", "2011", 115, "$43,000"],
    [
      35,
      "Dhaka Central International Medical College",
      "Dhaka",
      "2011",
      100,
      "$43,200",
    ],
    [
      36,
      "Jalalabad Ragib-Rabeya Medical College",
      "Sylhet",
      "1996",
      130,
      "$43,950",
    ],
    [37, "North East Medical College", "Sylhet", "1998", 125, "$44,000"],
    [38, "Universal Medical College", "Dhaka", "2014-15", 60, "$44,000"],
    [39, "Anwer Khan Modern Medical College", "Dhaka", "2008", 147, "$45,000"],
    [40, "Ashiyan Medical College", "Dhaka", "2013", 50, "$45,000"],
    [41, "IBN Sina Medical College", "Dhaka", "2005", 60, "$45,000"],
    [
      42,
      "Medical College for Women & Hospital",
      "Dhaka",
      "1992",
      95,
      "$47,000",
    ],
    [43, "Monno Medical College", "Manikganj", "2011", 85, "$45,000"],
    [44, "Tairunnessa Medical College", "Gazipur", "2001", 107, "$45,000"],
    [45, "TMSS Medical College", "Bogura", "2001", 107, "$45,000"],
    [46, "Kumudini Women's Medical College", "Tangail", "2001", 120, "$45,300"],
    [47, "International Medical College", "Gazipur", "2000", 130, "$44,000"],
    [48, "Shaheed Monsur Ali Medical College", "Dhaka", "1998", 140, "$46,000"],
    [
      49,
      "Khawja Yunus Ali Medical College",
      "Sirajganj",
      "2005",
      105,
      "$47,000",
    ],
    [50, "Delta Medical College", "Dhaka", "2008", 90, "$47,500"],
    [
      51,
      "Community-Based Medical College",
      "Mymensingh",
      "1995",
      140,
      "$48,000",
    ],
    [52, "Bangladesh Medical College", "Dhaka", "1985", 120, "$49,000"],
    [53, "East-West Medical College", "Dhaka", "2000", 127, "$50,000"],
    [54, "Enam Medical College", "Dhaka", "2003", 155, "$50,000"],
    [55, "Green Life Medical College", "Dhaka", "2010", 120, "$50,000"],
    [
      56,
      "Holy Family Red Crescent Medical College",
      "Dhaka",
      "2000",
      145,
      "$52,250",
    ],
    [
      57,
      "Bikrampur Bhuiyan Medical College & Hospital",
      "Munshiganj",
      "2014-15",
      57,
      "N/A",
    ],
    [
      58,
      "Chattagram International Medical College",
      "Chattogram",
      "2015",
      60,
      "N/A",
    ],
    [59, "Dhaka Community Medical College", "Dhaka", "2008", 100, "N/A"],
    [60, "Dr. Sirajul Islam Medical College", "Dhaka", "2011", 100, "N/A"],
    [
      61,
      "Gonoshasthaya Samaj Vittik Medical College",
      "Dhaka",
      "1989",
      50,
      "N/A",
    ],
    [62, "Ibrahim Medical College", "Dhaka", "2002", 120, "N/A"],
    [63, "Uttara Adhunik Medical College", "Dhaka", "2007", 90, "N/A"],
    [64, "East-West Medical College", "Dhaka", "2000", 127, "$50,000"],
  ];

  // BDS Colleges
  const bdsColleges = [
    [1, "Pioneer Dental College, 111, Malibagh, DIT Road, Dhaka", 1995, 100],
    [
      2,
      "Rangpur Community Dental College, Medical East Gate, Rangpur",
      2008,
      100,
    ],
    [
      3,
      "University Dental College, 120 Siddeshwari Outer Circular Road, Moghbazar, Dhaka",
      1996,
      100,
    ],
    [4, "Shaphena Women’s Dental College, Boro Mogbazar, Dhaka", 2010, 95],
    [
      5,
      "Sapporo Dental College, Road-1/B, Sector-9, Uttara Model Town, Dhaka",
      2000,
      90,
    ],
    [
      6,
      "Update Dental College, 162, Atish Dipankar Road, West Mugda, Dhaka",
      2008,
      90,
    ],
    [
      7,
      "City Dental College, 1085/1, Malibagh Chowdhury Para, Dhaka",
      1998,
      75,
    ],
    [8, "Bangladesh Dental College, Road # 14/A, Dhanmondi, Dhaka", 1997, 70],
    [
      9,
      "Chittagong International Dental College, Chandgaon, Chittagong",
      2005,
      65,
    ],
    [
      10,
      "Mandy Dental College, Sikdar Real Estate, Dhanmondi (West), Dhaka",
      2010,
      65,
    ],
    [11, "MH Samorita Medical College Dental Unit, Dhaka", 2010, 55],
    [
      12,
      "Gonoshasthaya Samaj Vittik Dental College, Mirzanagar, Savar Cantonment, Dhaka",
      1997,
      50,
    ],
    [13, "Marks Medical College Dental Unit, Mirpur-14, Dhaka", 2008, 50],
    [14, "TMSS Medical College Dental Unit, Bogura", 2011, 50],
    [15, "Udayan Dental College, Rajshahi", 2008, 50],
    [
      16,
      "Khwaja Yunus Ali Medical College, Dental Unit, Enayetpur, Sirajganj",
      2016,
      40,
    ],
    [
      17,
      "Kumudini Women’s Medical College Dental Unit, Mirzapur, Tangail",
      2011,
      40,
    ],
    [18, "Sylhet Central Dental College, Sylhet", 2015, 40],
    [19, "Community Based Medical College Dental Unit, Mymensingh", 2014, 30],
    [
      20,
      "Dhaka Community Medical College Dental Unit, Boro Mogbazar, Dhaka",
      2012,
      30,
    ],
    [
      21,
      "Holy Family Red Crescent Medical College, 1 Eskaton Garden Road, Dhaka",
      2012,
      30,
    ],
    [22, "Delta Medical College Dental Unit, Mirpur, Dhaka", 2013, 25],
    [23, "Ibrahim Medical College, Dental Unit", 2016, 25],
    [24, "North East Medical College Dental Unit, Sylhet", 2014, 25],
    [25, "Dhaka National Medical College, Dental Unit, Dhaka", 2004, 20],
    [26, "Islami Bank Medical College, Dental Unit, Rajshahi", 2014, 20],
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

  return (
    <>
      <SEO
        title="MBBS in Bangladesh 2025 - Admission, Eligibility, Fees & Colleges"
        description="Complete guide for MBBS in Bangladesh 2025 including eligibility, admission process, fees, top government and private colleges, and BDS options."
        keywords={[
          "MBBS in Bangladesh",
          "Bangladesh Medical Colleges",
          "MBBS Admission Bangladesh",
          "BDS in Bangladesh",
        ]}
        canonical="https://www.globaledulogy.com/Medical/UG/Mbbs-Aborad/Bangladesh"
      />

      <Header
        title="MBBS in Bangladesh 2025"
        subtitle="Admission Process, Eligibility, Fees & Top Colleges"
        description="Explore MBBS in Bangladesh 2025: eligibility, fee structure, admission process, top government & private colleges, and benefits for Indian students."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Study MBBS in Bangladesh?
          </h2>
          {renderList(whyBangladesh)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Eligibility Criteria for Indian Students
          </h2>
          {renderTable(eligibility, ["Criteria", "Requirement"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            MBBS Admission Process in Bangladesh (Step 1)
          </h2>
          {renderTable(admissionStep1, ["Step", "Requirement"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            MBBS Admission Process in Bangladesh (Step 2)
          </h2>
          {renderTable(admissionStep2, ["Step", "Details"])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">GPA Requirement</h2>
          {renderTable(gpaRequirements, [
            "College Type",
            "Required GPA",
            "Biology GPA",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          {renderList(documents)}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Government Medical Colleges in Bangladesh
          </h2>
          {renderTable(govtColleges, [
            "S.No",
            "College Name",
            "Established Year",
            "Total Seats",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top Private Medical Colleges in Bangladesh
          </h2>
          {renderTable(privateColleges, [
            "S.No",
            "College Name",
            "Place",
            "Year",
            "Seats",
            "Fees (USD)",
          ])}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Top BDS Colleges in Bangladesh
          </h2>
          {renderTable(bdsColleges, [
            "S.No",
            "College Name",
            "Established Year",
            "Total Seats",
          ])}
        </section>
      </main>
    </>
  );
};

export default Page;

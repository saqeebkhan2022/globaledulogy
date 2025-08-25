"use client";
import React from "react";
import Header from "../../Medical/utils/Header";
import SEO from "../../components/SEO";

const Page = () => {
  const overview = [
    "The Joint Seat Allocation Authority (JoSAA) conducts counselling for admissions into IITs, NITs, IIITs, IIEST, and other GFTIs in India.",
    "Admission to IITs is based on JEE Advanced ranks, while NITs, IIITs, IIEST, and other GFTIs rely on JEE Main ranks.",
    "JoSAA counselling 2025 is expected to begin in June 2025 and will be conducted online over five main rounds.",
    "Allotment of seats, choice filling, and document verification will be done through the official portal josaa.nic.in.",
  ];

  const participatingInstitutes = [
    {
      title: "Indian Institutes of Technology (IITs) - 23",
      data: [
        ["Indian Institute of Technology, Bombay", 1958, 1368],
        ["Indian Institute of Technology, Delhi", 1961, 1209],
        ["Indian Institute of Technology, Madras", 1959, 1128],
        ["Indian Institute of Technology, Kanpur", 1959, 1210],
        ["Indian Institute of Technology, Kharagpur", 1951, 1919],
        ["Indian Institute of Technology, Roorkee", 1847, 1353],
        ["Indian Institute of Technology, Guwahati", 1994, 962],
        ["Indian Institute of Technology, Hyderabad", 2008, 595],
        ["Indian Institute of Technology, (BHU) Varanasi", 1919, 1589],
        ["Indian Institute of Technology, Indore", 2009, 480],
        ["Indian Institute of Technology, Gandhinagar", 2008, 400],
        ["Indian Institute of Technology, Ropar", 2008, 430],
        ["Indian Institute of Technology, Jodhpur", 2008, 600],
        ["Indian Institute of Technology, Mandi", 2009, 520],
        ["Indian Institute of Technology, Patna", 2008, 817],
        ["Indian Institute of Technology, Bhubaneswar", 2008, 496],
        ["Indian Institute of Technology, (ISM) Dhanbad", 1926, 1125],
        ["Indian Institute of Technology, Tirupati", 2015, 254],
        ["Indian Institute of Technology, Goa", 2016, 157],
        ["Indian Institute of Technology, Jammu", 1960, 280],
        ["Indian Institute of Technology, Palakkad", 2015, 200],
        ["Indian Institute of Technology, Dharwad", 2016, 385],
        ["Indian Institute of Technology, Bhilai", 2016, 283],
      ],
    },
    {
      title: "National Institutes of Technology (NITs) - 32 + IIEST Shibpur",
      data: [
        ["National Institute of Technology, Tiruchirappalli", 1964, 1038],
        ["National Institute of Technology Karnataka, Surathkal", 1960, 958],
        ["National Institute of Technology, Warangal", 1959, 1049],
        ["National Institute of Technology, Rourkela", 1961, 1065],
        [
          "Motilal Nehru National Institute of Technology, Allahabad",
          1961,
          1134,
        ],
        ["National Institute of Technology, Calicut", 1961, 1240],
        ["Malaviya National Institute of Technology, Jaipur", 1963, 888],
        ["Visvesvaraya National Institute of Technology, Nagpur", 1960, 933],
        ["National Institute of Technology, Kurukshetra", 1963, 1147],
        [
          "Sardar Vallabhbhai National Institute of Technology, Surat",
          1961,
          1370,
        ],
        ["National Institute of Technology, Jamshedpur", 1960, 751],
        ["National Institute of Technology, Delhi", 2010, 374],
        ["Maulana Azad National Institute of Technology, Bhopal", 1960, 1203],
        ["National Institute of Technology, Durgapur", 1960, 969],
        [
          "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
          1987,
          1106,
        ],
        ["National Institute of Technology, Silchar", 1967, 903],
        ["National Institute of Technology, Hamirpur", 1986, 944],
        ["National Institute of Technology, Goa", 2010, 224],
        ["National Institute of Technology, Raipur", 1956, 1159],
        ["National Institute of Technology, Patna", 1886, 941],
        [
          "Indian Institute of Engineering Science and Technology, Shibpur",
          1920,
          764,
        ],
        ["National Institute of Technology, Puducherry", 2010, 275],
        ["National Institute of Technology, Uttarakhand", 2009, 200],
        ["National Institute of Technology, Andhra Pradesh", 2015, 480],
        ["National Institute of Technology, Agartala", 1965, 1084],
        ["National Institute of Technology, Meghalaya", 2010, 165],
        ["National Institute of Technology, Srinagar", 1960, 899],
        ["National Institute of Technology, Arunachal Pradesh", 2010, 160],
        ["National Institute of Technology, Sikkim", 2010, 190],
        ["National Institute of Technology, Manipur", 2010, 226],
        ["National Institute of Technology, Nagaland", 2010, 200],
        ["National Institute of Technology, Mizoram", 2010, 190],
      ],
    },
    {
      title: "Indian Institutes of Information Technology (IIITs) - 26",
      data: [
        ["Atal Bihari Vajpayee IIIT & Management, Gwalior", 1997, 295],
        ["Pt. Dwarka Prasad Mishra IIIT, Jabalpur", 2005, 552],
        ["IIIT Pune", 2016, 345],
        ["IIIT D&M, Kancheepuram", 2007, 559],
        ["IIIT Guwahati", 2013, 254],
        ["IIIT Vadodara, Gujarat", 2013, 235],
        ["IIIT Surat", 2017, 180],
        ["IIIT Bhopal", 2017, 495],
        ["IIIT Kota, Rajasthan", 2013, 330],
        ["IIIT Tiruchirappalli", 2013, 150],
        ["IIIT Sri City, Chittoor", 2013, 437],
        ["IIIT Nagpur", 2016, 637],
        ["IIIT Kilohrad, Sonepat", 2014, 240],
        ["IIIT Una, Himachal Pradesh", 2014, 294],
        ["IIIT Vadodara International Campus, Diu", 2013, 108],
        ["IIIT Raichur, Karnataka", 2019, 220],
        ["IIIT Ranchi", 2016, 270],
        ["IIIT D&M Kurnool, Andhra Pradesh", 2015, 327],
        ["IIIT Kottayam", 2015, 556],
        ["IIIT Dharwad", 2015, 402],
        ["IIIT Agartala", 2018, 70],
        ["IIIT Bhagalpur", 2017, 344],
        ["IIIT Kalyani, West Bengal", 2014, 193],
        ["IIIT Senapati, Manipur", 2015, 374],
        ["IIIT Allahabad", 1999, 439],
        ["IIIT Lucknow", 2015, 240],
      ],
    },
    {
      title: "Government Funded Technical Institutes (GFTIs) - 40",
      data: [
        ["Assam University, Silchar", 1994, 150],
        ["Birla Institute of Technology, Mesra", 1955, 500],
        ["Gurukula Kangri Vishwavidyalaya, Haridwar", 1902, 300],
        ["IIEST Shibpur, West Bengal", 1856, 600],
        ["IITRAM, Ahmedabad, Gujarat", 2013, 150],
        ["NIFFT, Ranchi, Jharkhand", 1966, 200],
        ["NERIST, Itanagar, Arunachal Pradesh", 1984, 200],
        ["SLIET, Sangrur, Punjab", 1991, 300],
        ["School of Engineering, Tezpur University", 1994, 200],
        ["SMVDU, Katra, Jammu & Kashmir", 1999, 300],
        ["NIELIT, Aurangabad, Maharashtra", 1994, 150],
        ["NIAMT, Ranchi, Jharkhand", 1966, 200],
        ["Mizoram University, Aizawl", 2001, 150],
        ["SPA, Bhopal", 2008, 75],
        ["SPA, New Delhi", 1941, 75],
        ["SPA, Vijayawada", 2008, 75],
        ["IIIT, Naya Raipur, Chhattisgarh", 2013, 200],
        ["University of Hyderabad", 1974, 150],
        ["PEC, Chandigarh", 1921, 500],
        ["JNU, New Delhi", 1969, 150],
        ["IIIT, Bhubaneswar, Odisha", 2006, 200],
        ["CIT, Kokrajhar, Assam", 2006, 150],
        ["PTU, Puducherry", 1984, 300],
        ["GKCIET, Malda, West Bengal", 2010, 150],
        ["CURAJ, Ajmer, Rajasthan", 2009, 150],
        ["NIFTEM, Sonepat, Haryana", 2012, 200],
        ["NIFTEM, Thanjavur, TamilNadu", 2012, 200],
        ["IIHT, Varanasi, Uttar Pradesh", 1993, 100],
        ["CSVTU, Bhilai, Chhattisgarh", 2005, 200],
        ["ICT, Bhubaneswar, Odisha", 2018, 150],
        ["NEHU, Shillong, Meghalaya", 1973, 150],
        ["CUJ, Jammu", 2011, 150],
        ["CUH, Mahendragarh, Haryana", 2009, 150],
        ["IET, Dr. H. S. Gour University, Sagar", 1946, 150],
        ["BIT - Deoghar Off-Campus, Jharkhand", 2007, 150],
        ["BIT - Patna Off-Campus, Bihar", 2006, 150],
        ["IIHT, Salem, TamilNadu", 2001, 100],
        ["CUSB, Gaya, Bihar", 2009, 150],
        ["CUJ, Ranchi, Jharkhand", 2009, 150],
        ["CUK, Kasaragod, Kerala", 2009, 150],
      ],
    },
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
        title="JoSAA Counselling 2025 - IITs, NITs, IIITs & GFTIs"
        description="Complete guide for JoSAA 2025 including participating institutes, seats, admission process, eligibility, and counselling schedule."
        keywords={[
          "JoSAA 2025",
          "JoSAA Counselling",
          "IIT Admission",
          "NIT Admission",
          "IIIT Admission",
          "GFTI Admission",
        ]}
        canonical="https://www.globaledulogy.com/Engineering/JoSAA"
      />

      <Header
        title="JoSAA Counselling 2025"
        subtitle="IITs, NITs, IIITs, IIEST & GFTIs"
        description="Comprehensive guide on participating institutes, seats, admission process, and eligibility criteria for JoSAA 2025."
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          {renderList(overview)}
        </section>

        {participatingInstitutes.map((group, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-semibold mb-4">{group.title}</h2>
            {renderTable(group.data, [
              "Institute Name",
              "Established",
              "Seats",
            ])}
          </section>
        ))}
      </main>
    </>
  );
};

export default Page;

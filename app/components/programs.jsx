"use client";
import { useState } from "react";
import { GraduationCap, Stethoscope, Wrench, BookOpen, X } from "lucide-react";

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      icon: <Stethoscope className="h-8 w-8 text-[#EA4E14]" />,
      title: "Medical Programs UG",
      description:
        "Comprehensive medical education with hands-on clinical experience",
      courses: [
        "MBBS - Bachelor of Medicine, Bachelor of Surgery",
        "BDS - Bachelor of Dental Surgery",
        "BAMS - Bachelor of Ayurvedic Medicine and Surgery",
        "BHMS - Bachelor of Homeopathic Medicine and Surgery",
        "BUMS - Bachelor of Unani Medicine and Surgery",
        "Veterinary - Bachelor of Veterinary Science & Animal Husbandry",
      ],
      duration: "4-6 years",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-[#EA4E14]" />,
      title: "Medical Programs PG",
      description:
        "Advanced postgraduate programs for specialization in medicine",
      courses: [
        "MD - Doctor of Medicine",
        "MS - Master of Surgery",
        "DNB - Diplomate of National Board",
        "PG Diploma - Postgraduate Diploma",
        "NBE Diploma - National Board of Examinations Diploma",
        "MDS - Master of Dental Surgery",
        "AYUSH - Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy",
      ],
      duration: "2-3 years",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#EA4E14]" />,
      title: "Engineering Programs",
      description:
        "Cutting-edge B.Tech, M.Tech and Architecture programs designed with strong industry partnerships to prepare future-ready engineers.",
      courses: [
        "Computer Science",
        "Information Technology",
        "Mechanical",
        "Civil",
        "Electrical",
        "Electronics & Communication",
        "Aerospace",
        "Marine",
        "Architecture",
      ],
      duration: "2-5 years",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#EA4E14]" />,
      title: "Management Programs",
      description:
        "Cutting-edge BBA, MBA and Executive programs designed with strong industry partnerships to prepare future-ready Professionals.",
      courses: [
        "Business Administration",
        "Human Resource Management",
        "Marketing",
        "Finance",
        "Business Analytics",
        "Operations Management",
        "Entrepreneurship",
        "Supply Chain Management",
      ],
      duration: "2-3 years",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#EA4E14]" />,
      title: "Allied Health Programs",
      description: "Advanced degrees for career specialization and research",
      courses: [
        "Nursing",
        "Pharmacy",
        "Physiotherapy",
        "Optometry",
        "Renal Dialysis",
        "Anesthesia",
        "Medical Physics",
        "Health Administration",
        "Nutrition and Dietetics",
        "Hospital Administration",
        "Perfusion Technology",
        "Allied Health Sciences",
      ],
      duration: "2-6 years",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#EA4E14]" />,
      title: "Professional Programs",
      description: "Industry-focused courses for immediate career impact",
      courses: [
        "Computer Applications",
        "Accounts",
        "Data Science",
        "Digital Marketing",
        "Cybersecurity",
        "Artificial Intelligence",
        "Project Management",
        "Graphic Design",
      ],
      duration: "3-4 years",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#EA4E14]">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of globally recognized programs designed
            to advance your career
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Card Top */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="mb-4 p-4 bg-[#EA4E14]/10 rounded-full flex items-center justify-center">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Courses */}
                <div className="w-full">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {" "}
                    Popular Courses:{" "}
                  </h4>{" "}
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {program.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-[#EA4E14]/10 text-[#EA4E14] text-xs rounded-full"
                      >
                        {" "}
                        {course}{" "}
                      </span>
                    ))}{" "}
                  </div>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="px-6 pb-6 mt-auto space-y-3">
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> {program.duration}
                </div>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full bg-[#EA4E14] hover:bg-[#d13d0f] text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="mx-auto mb-5 p-4 bg-[#EA4E14]/10 rounded-full w-fit">
                {selectedProgram.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProgram.title}
              </h2>
              <p className="text-gray-600 mb-5">
                {selectedProgram.description}
              </p>

              <h4 className="font-semibold text-gray-900 mb-3">
                Courses Offered:
              </h4>
              <div className="grid grid-cols-2 gap-2 justify-items-center mb-4">
                {selectedProgram.courses.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#EA4E14]/10 text-[#EA4E14] rounded-lg text-sm text-center"
                  >
                    {course}
                  </span>
                ))}
              </div>

              {selectedProgram.duration && (
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> {selectedProgram.duration}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

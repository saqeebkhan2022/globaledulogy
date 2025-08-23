import { GraduationCap, Stethoscope, Wrench, BookOpen } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: <Stethoscope className="h-8 w-8 text-[#EA4E14]" />,
      title: "Medical Programs",
      description:
        "Comprehensive medical education with hands-on clinical experience",
      courses: ["MBBS", "BDS", "BAMS", "BHMS"],
      duration: "4-6 years",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#EA4E14]" />,
      title: "Engineering Programs",
      description:
        "Cutting-edge engineering programs with industry partnerships",
      courses: ["Computer Science", "Mechanical", "Electrical", "Civil"],
      duration: "4 years",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#EA4E14]" />,
      title: "Postgraduate Studies",
      description: "Advanced degrees for career specialization and research",
      courses: ["Masters", "PhD", "Diploma", "Certificate"],
      duration: "1-3 years",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#EA4E14]" />,
      title: "Professional Courses",
      description: "Industry-focused courses for immediate career impact",
      courses: ["Data Science", "Digital Marketing", "Finance", "Management"],
      duration: "6-12 months",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#EA4E14]">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of globally recognized programs designed
            to advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-[#EA4E14]/10 rounded-full w-fit">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Popular Courses:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-[#EA4E14]/10 text-[#EA4E14] text-xs rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> {program.duration}
                </div>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-[#EA4E14]" />,
      title: "Expert Counsellors",
      description:
        "Our team of experienced counsellors provides personalized guidance for your career path.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#EA4E14]" />,
      title: "Proven Track Record",
      description:
        "Over 25,000 successful admissions with a 95% placement rate in top universities.",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#EA4E14]" />,
      title: "Global Partnerships",
      description:
        "Direct partnerships with top universities in Nepal, Georgia, Bangladesh, and Russia.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#EA4E14]" />,
      title: "End-to-End Support",
      description:
        "From application to admission, we support you throughout your educational journey.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-[#EA4E14]">Global Edulogy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Global Edulogy Services Pvt. Ltd. (Global Edulogy) is a leading
            educational consultancy firm dedicated to providing expert guidance
            and counselling for undergraduate (UG) and postgraduate (PG)
            students. Founded in July 2010, Global Edulogy has successfully
            counselled and guided over 10,000 students, helping them select the
            right career paths and realize their academic and professional
            dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

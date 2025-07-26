import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🧠",
      title: "Expert Mentorship",
      description:
        "Guidance from experienced counselors with global education insights.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🌍",
      title: "Global Partnerships",
      description: "Collaborations with 200+ top universities worldwide.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏆",
      title: "Proven Track Record",
      description: "Thousands of successful student admissions abroad.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "⭐",
      title: "20+ Years Experience",
      description: "Decades of excellence in overseas education consultancy.",
      color: "bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Global Edulogy is Your Trusted Partner for Studying Abroad
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From country and course selection to visa processing and
                post-arrival support, we make your global education journey
                smooth and successful.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${feature.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Optimized Next.js Image */}
          <div className="relative">
            <div className="relative z-10 w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/whychooseus.jpg"
                alt="Female student with books"
                width={500}
                height={600}
                layout="responsive"
                className="rounded-2xl"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full opacity-60 animate-pulse"></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ImpactSection() {
  const stats = [
    {
      icon: "👥",
      number: "25,000+",
      title: "Students Guided",
      description: "Received expert counselling support",
      color: "bg-red-50",
    },
    {
      icon: "🎯",
      number: "95%",
      title: "Admission Success Rate",
      description: "Students placed in top colleges & universities",
      color: "bg-blue-50",
    },
    {
      icon: "📚",
      number: "100+",
      title: "Courses Offered",
      description: "Diverse programs across all streams",
      color: "bg-green-50",
    },
    {
      icon: "🌍",
      number: "20+",
      title: "Countries",
      description: "Global education opportunities",
      color: "bg-purple-50",
    },
    {
      icon: "👍",
      number: "98%",
      title: "Student Satisfaction",
      description: "Positive feedback and recommendations",
      color: "bg-yellow-50",
    },
    {
      icon: "🏢",
      number: "10+",
      title: "Office Locations",
      description: "Convenient access across regions",
      color: "bg-pink-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            📈 Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Transforming Lives Through
            <br />
            <span className="text-red-600">Quality Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the success of our
            students and the trust of industry partners worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

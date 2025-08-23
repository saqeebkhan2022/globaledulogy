import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "MBBS Graduate",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Global Edulogy provided me with world-class medical education. The faculty support and clinical exposure were exceptional.",
      rating: 5,
    },
    {
      name: "Raj Patel",
      program: "Computer Science",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The engineering program here opened doors to amazing career opportunities. I'm now working at a top tech company.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      program: "Postgraduate Studies",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The research opportunities and mentorship I received during my masters program were invaluable for my career growth.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#EA4E14]">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful graduates who have transformed their
            careers with Global Edulogy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-900 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

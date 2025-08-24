// export default function WhyChooseUs() {
//   const programs = [
//     {
//       title: "Ayush",
//       description: "Paid guidance for Ayush",
//       price: "₹20,000.00",
//       gst: "₹3,600.00",
//       total: "₹23,600.00",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "Veterinary",
//       description: "Paid guidance for Veterinary",
//       price: "₹40,000.00",
//       gst: "₹7,200.00",
//       total: "₹47,200.00",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "Nursing",
//       description: "Paid guidance for Nursing",
//       price: "₹10,000.00",
//       gst: "₹1,800.00",
//       total: "₹11,800.00",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "Engineering",
//       description: "Paid guidance for Engineering",
//       price: "₹10,000.00",
//       gst: "₹1,800.00",
//       total: "₹11,800.00",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Stats Section */}

//         {/* Counselling Guidance Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-[#EA4E14]/10 text-[#EA4E14] px-4 py-2 rounded-full text-sm font-medium mb-4">
//             📋 PAID COUNSELLING GUIDANCE
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Counselling Guidance
//           </h2>
//           <div className="flex justify-center">
//             <button className="border border-[#EA4E14] text-[#EA4E14] hover:bg-[#EA4E14] hover:text-white bg-transparent px-6 py-2 rounded-md font-medium transition-colors duration-200">
//               VIEW ALL PAID GUIDANCE →
//             </button>
//           </div>
//         </div>

//         {/* Programs Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative">
//                 <img
//                   src={program.image || "/placeholder.svg"}
//                   alt={program.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-4 left-4 bg-[#EA4E14] text-white px-3 py-1 rounded-full text-xs font-medium">
//                   BOOK NOW
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {program.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {program.description}
//                 </p>
//                 <div className="space-y-1 text-sm mb-4">
//                   <div className="flex justify-between">
//                     <span>Base Price:</span>
//                     <span>{program.price}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>GST:</span>
//                     <span>{program.gst}</span>
//                   </div>
//                   <div className="flex justify-between font-semibold border-t pt-1">
//                     <span>Total:</span>
//                     <span>{program.total}</span>
//                   </div>
//                 </div>
//                 <button className="w-full bg-[#EA4E14] hover:bg-[#d63f0f] text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Award, Users, BookOpen, Star } from "lucide-react";
import "animate.css";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-[#EA4E14]" />,
      title: "Expert Guidance",
      description:
        "Receive mentorship from industry-leading professionals to plan your medical career with confidence.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#EA4E14]" />,
      title: "Trusted Network",
      description:
        "Access a reliable network of successful alumni and top medical colleges across India and Abroad.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#EA4E14]" />,
      title: "Comprehensive Resources",
      description:
        "Benefit from structured NEET prep, study materials, and step-by-step counselling support.",
    },
    {
      icon: <Star className="h-10 w-10 text-[#EA4E14]" />,
      title: "High Success Rate",
      description:
        "Our personalized approach maximizes your chances of securing admission to premium institutions.",
    },
  ];

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Global Edulogy
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Global Edulogy combines experience, expertise, and a proven track
            record of guiding you towards admission in top medical colleges in
            India and Aborad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300
                ${
                  visible
                    ? `animate__animated animate__fadeInUp -${index + 1}s`
                    : ""
                }`}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

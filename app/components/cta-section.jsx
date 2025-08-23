import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of successful graduates and take the first step
            towards your dream career today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+918447374123"
              className="bg-white text-[#EA4E14] hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg flex items-center gap-2 group transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              Call Now For Counselling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

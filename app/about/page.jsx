import Header from "../medical/utils/Header";

export default function page() {
  return (
    <>
      <Header
        title="About Global Edulogy"
        subtitle="Empowering Education Through Technology"
      />

      {/* Rest of the page content */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why Choose Global Edulogy?
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
          At Global Edulogy, we are dedicated to transforming the educational
          landscape through innovative technology solutions. Our mission is to
          empower students and educators worldwide by providing accessible,
          high-quality educational resources and tools.
        </p>
        {/* Your expertise cards go here */}
      </section>
    </>
  );
}

export default function Header({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-[#fff7f3] via-[#fef0ec] to-[#ffece6] overflow-hidden py-40 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-[#EA4E14]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

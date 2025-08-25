// src/components/Header.jsx
import Head from "next/head";

export default function Header({ title, subtitle, images = [], description }) {
  const pageDescription =
    description ||
    "Get complete guidance on NEET UG counselling for MBBS, including process, eligibility, seat matrix, and state-wise details.";

  return (
    <>
      {/* Meta tags for SEO & Social Sharing */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        {images.length > 0 && <meta property="og:image" content={images[0]} />}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={pageDescription} />
        {images.length > 0 && <meta name="twitter:image" content={images[0]} />}
      </Head>

      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#fff7f3] via-[#fef0ec] to-[#ffece6] overflow-hidden py-40 text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-[#EA4E14]">{subtitle}</p>
          )}

          {/* Images Section */}
          {images.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Header image ${index + 1}`}
                  className="h-20 md:h-28 object-contain"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

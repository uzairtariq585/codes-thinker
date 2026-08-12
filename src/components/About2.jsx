import React from "react";

function About2() {
  const cards = [
    {
      number: "01",
      title: "Real-World Learning",
      description:
        "Learn through practical projects that simulate real industry problems.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      title: "Industry Courses",
      description:
        "Modern MERN, backend systems, and advanced development paths.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      title: "Internship Program",
      description:
        "Work on live projects and gain real industry experience.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "04",
      title: "Career Support",
      description:
        "From learning to job placement — we guide your entire journey.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "05",
      title: "Strong Community",
      description:
        "Connect with developers, mentors, and peers globally.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "06",
      title: "Certified Growth",
      description:
        "Earn certifications that boost your professional profile.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Built for{" "}
            <span className="text-blue-600">Future Developers</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything you need to become a professional developer in one
            place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-sm font-bold text-blue-600 shadow-lg backdrop-blur">
                  {card.number}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-blue-600 px-9 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

export default About2;
import React from "react";

function Cards() {
  const cards = [
    {
      title: "New Website",
      description:
        "Discover our latest collection featuring elegant and modern designs made for every style.",
      button: "Explore Collection",
    },
    {
      title: "Best Option",
      description:
        "Explore our most loved products and discover what our customers are choosing the most.",
      button: "Shop Best Sellers",
    },
    {
      title: "Special Offers",
      description:
        "Enjoy exclusive deals and special offers on selected products for a limited time.",
      button: "View Offers",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-md font-semibold uppercase tracking-widest text-gray-500">
            Code Thinker
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#0068c9]  md:text-4xl">
            Discover Something Beautiful
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our collections, discover popular products, and find
            something perfect for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-[#0068c9] ">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-7 leading-7 text-[#1d1e1f] ">
                {card.description}
              </p>

              {/* Button */}
              <button className="rounded-lg bg-[#0068c9] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700">
                {card.button}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Cards;


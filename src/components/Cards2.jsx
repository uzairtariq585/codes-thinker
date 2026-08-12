import React from "react";

function Cards2() {
  const cards = [
    {
      
      title: "Premium Quality",
      text: "Carefully selected products with excellent quality.",
    },
    {
      
      title: "Elegant Style",
      text: "Modern designs created to match your unique style.",
    },
    {
      
      title: "Best Prices",
      text: "Beautiful products at prices you'll love.",
    },
    {
      
      title: "Fast Support",
      text: "We are always here to help you when you need us.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-h-[190px] bg-gray-900 p-6 transition duration-300 hover:bg-gray-800 text-white"
            >
             

              <h3 className="mt-4 text-xl font-bold">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 transition duration-300 group-hover:text-gray-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards2;


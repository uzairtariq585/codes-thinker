import React from "react";

function Bottom2() {
  const cards = [
    {
      
      title: "4.9/5",
      text: "Average Rating",
    },
    {
      
      title: "50+",
      text: "Client Retention",
    },
    {
      
      title: "98%",
      text: "Enterprise Clients",
    },
   
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-h-[190px] bg-gray-200 p-6  text-gray-900"
            >
             

              <h3 className="mt-4 text-3xl font-bold ">
                {card.title}
              </h3>

              <p className="mt-3 text-xl leading-6 text-gray-500 transition duration-300 group-hover:text-gray-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bottom2;


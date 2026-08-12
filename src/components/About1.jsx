
import React from "react";

function About1() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side - Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff]  ">
              About Code Thinker
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-200 md:text-5xl">
              Style That Makes
              <span className="block text-[#0291bd]">You Feel Beautiful</span>
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-300">
              At Code Thinker, we believe that fashion is more than just
              clothing. It is a way to express your personality, confidence,
              and unique sense of style.
            </p>

            <p className="mb-8 leading-7 text-gray-400">
              We carefully select beautiful and modern pieces that combine
              quality, elegance, and comfort. Our goal is to bring you
              collections that make every moment feel special.
            </p>

            {/* Small Data / Stats */}
            <div className="mb-8 grid grid-cols-3 gap-5 border-t border-gray-200 pt-7">
              <div>
                <h3 className="text-3xl font-bold text-[#0068c9] ">5K+</h3>
                <p className="mt-1 text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0068c9] ">100+</h3>
                <p className="mt-1 text-sm text-gray-500">Websites</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0068c9] ">4.9</h3>
                <p className="mt-1 text-sm text-gray-500">Customer Rating</p>
              </div>
            </div>

            {/* Button */}
            <button className="rounded-lg bg-[#0068c9] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700">
              Discover More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                alt="Zahra Collection"
                className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Decorative Box */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-xl sm:block">
              <p className="text-sm font-medium text-gray-900">
                Quality & Elegance
              </p>
              <p className="mt-1 text-xl font-bold text-[#0068c9] ">
                Made for You
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About1;

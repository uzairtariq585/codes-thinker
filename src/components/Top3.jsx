
import React from "react";
import { Users, Globe2, Trophy } from "lucide-react";

function Top3() {
    return (
        <section className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Side - Content */}
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff]  ">
                            Meet Our Team
                        </p>

                        <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-200 md:text-5xl">
                            Architecting the
                            <span className="block text-[#fffb0a]">Digital Future</span>
                        </h2>

                        <p className="mb-5 text-xl leading-8 text-gray-300">
                            We bridge the gap between complex strategy and human-centric execution. Join a global network of innovators dedicated to your growth.
                        </p>




                        <div className=" w-[80%] rounded-3xl bg-black p-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                                {/* Team Members */}
                                <div className="group rounded-2xl border border-gray-800 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10">

                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                        <Users size={26} />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white">
                                        50+
                                    </h3>

                                    <p className="mt-2 text-base font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                        Team Members
                                    </p>
                                </div>


                                {/* Global Reach */}
                                <div className="group  rounded-2xl border border-gray-800 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10">

                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                        <Globe2 size={26} />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white">
                                        8+ 
                                    </h3>

                                    <p className="mt-2 text-base font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                        Global Reach
                                    </p>
                                </div>


                                {/* Success Rate */}
                                <div className="group rounded-2xl border border-gray-800 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10">

                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                        <Trophy size={26} />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white">
                                        99%
                                    </h3>

                                    <p className="mt-2 text-base font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                        Success Rate
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* Button */}
                        <button className="rounded-lg bg-[#0068c9]  mx-7 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700">
                            Start Collabration
                        </button>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="public\img\img1.png"
                                alt="Zahra Collection"
                                className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Decorative Box */}
                        <div className="absolute -top-7 -left-6 hidden rounded-xl bg-white py-5 px-10 shadow-xl sm:block">
                            <p className="text-sm font-medium text-gray-900">
                                INNOVATION HUB
                            </p>
                            <p className="mt-1 text-xl font-bold text-[#0068c9] ">
                                2024 Design Winner
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Top3;

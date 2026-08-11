import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        title: "Wellcome To Codes Thinker",
        subtitle:
            "Turn your ideas into websites and applications with modern web technologies.",
        button: "Start Coding",
    },
    {
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        title: "Learn. Code. Grow.",
        subtitle:
            "Learn programming, improve your skills, and become a better developer every day.",
        button: "Explore Tutorials",
    },
    {
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        title: "Create Your Future",
        subtitle:
            "Master HTML, CSS, JavaScript, React and other technologies to build your future.",
        button: "Explore Courses",
    },
];

export default function HeroSwiper() {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-[500px] md:h-[600px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative flex h-full items-center bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/60"></div>

                            {/* Content */}
                            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 text-center">
                                <div className="max-w-2xl text-white">

                                    <h1 className="mb-5 text-4xl  font-semibold  leading-tight md:text-6xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mb-8 text-lg leading-relaxed font-mono text-gray-200 md:text-xl">
                                        {slide.subtitle}
                                    </p>

                                    <button className="rounded-md bg-[#002158] font-mono  hover:bg-[#010d27]  px-7 py-3  text-white transition duration-300 ">
                                        {slide.button}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}


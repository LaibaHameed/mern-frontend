'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
    const slides = [
        {
            title: "Decorate Naturally,",
            title2: " Live Beautifully.",
            description: "Explore a range of premium properties tailored to your needs.",
            image:
                "/assets/carousel2.jpg",
            buttonText1: "shop now",
        },
        {
            title: "Plants:",
            title2: " Your Daily Dose of Calm.",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit!",
            image:
                "/assets/carousel1.jpg",
            buttonText1: "shop now",
        },
        
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
            }}
        >
            <div className="absolute inset-0"></div>

            <div className="relative mx-auto max-w-screen-xl md:px-20 px-10 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xxl text-slate-800 text-left">
                    <h2 className='text-md lg:text-2xl md:text-xl sm:text-lg font-serif font-bold text-slate-700 mb-6 uppercase'><span className='text-green-800 font-extrabold mr-1'>|</span>Welcom to Botanical</h2>
                    <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold font-serif mb-2">
                        {slides[currentSlide].title}
                    </h1>
                    <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold font-serif">
                        {slides[currentSlide].title2}
                    </h1>

                    <p className="mt-6 max-w-xl text-xs sm:text-sm/relaxed text-slate-700">
                        {slides[currentSlide].description}
                    </p>

                    <div className="mt-14 flex flex-wrap gap-4 text-center">
                        <Link
                            href={'/'}
                            className="rounded-full bg-green-700 px-7 py-2 tracking-wider md:px-10 md:py-4 md:text-md md:font-semibold text-white shadow hover:bg-green-400 focus:outline-none sm:w-auto flex items-center justify-center gap-2"
                        >
                            {slides[currentSlide].buttonText1} <FaArrowRight />
                        </Link>

                    </div>
                </div>
            </div>

            {/* Navigation Buttons and Counter */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-white">
                <button
                    onClick={prevSlide}
                    className="p-2 text-gray-800 hover:text-green-700"
                >
                    <AiOutlineVerticalRight size={25}/>
                </button>
                <span className="text-md text-gray-900 font-sans">
                    {currentSlide + 1}/{slides.length}
                </span>
                <button
                    onClick={nextSlide}
                    className="rounded-full  p-2 text-gray-800 hover:text-green-700"
                >
                    <AiOutlineVerticalLeft size={25} />
                </button>
            </div>
        </section>
    );
};

export default Carousel;

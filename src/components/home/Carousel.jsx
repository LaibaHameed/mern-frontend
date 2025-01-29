'use client'

import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { ROOT_ROUTE } from '@/utils/PATHS';
import SLIDES from "@/constants/general";
import useSlider from '@/hooks/useSlider';
import Link from 'next/link';
import Container from "../reuseableComponents/Container";

const Carousel = () => {

    const { currentSlide, nextSlide, prevSlide } = useSlider({ dataLength: SLIDES.length });

    return (

        <div className="flex items-center justify-center">
            <Container>
                <section
                    className="relative bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${SLIDES[currentSlide].image})`,
                    }}
                >
                    <div className="absolute inset-0"></div>

                    <div className="relative mx-auto max-w-screen-xl md:px-20 px-10 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <div className="max-w-xxl text-slate-800 text-left">
                            <h2 className='text-md lg:text-2xl md:text-xl sm:text-lg font-serif font-bold text-slate-700 mb-6 uppercase'><span className='text-green-800 font-extrabold mr-1'>|</span>Welcom to Botanical</h2>
                            <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold font-serif mb-2">
                                {SLIDES[currentSlide].title}
                            </h1>
                            <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold font-serif">
                                {SLIDES[currentSlide].title2}
                            </h1>

                            <p className="mt-6 max-w-xl text-xs sm:text-sm/relaxed text-slate-700">
                                {SLIDES[currentSlide].description}
                            </p>

                            <div className="mt-14 flex flex-wrap gap-4 text-center">
                                <Link
                                    href={ROOT_ROUTE}
                                    className="rounded-full bg-green-700 px-7 py-2 tracking-wider md:px-10 md:py-4 md:text-md md:font-semibold text-white shadow hover:bg-green-400 focus:outline-none sm:w-auto flex items-center justify-center gap-2"
                                >
                                    {SLIDES[currentSlide].buttonText1} <FaArrowRight />
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
                            <AiOutlineVerticalRight size={25} />
                        </button>
                        <span className="text-md text-gray-900 font-sans">
                            {currentSlide + 1}/{SLIDES.length}
                        </span>
                        <button
                            onClick={nextSlide}
                            className="rounded-full  p-2 text-gray-800 hover:text-green-700"
                        >
                            <AiOutlineVerticalLeft size={25} />
                        </button>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Carousel;

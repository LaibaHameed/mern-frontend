import { useState, useEffect } from 'react';

const useSlider = ({ dataLength, intervalTime = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % dataLength);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + dataLength) % dataLength);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, intervalTime);

        return () => clearInterval(interval);
    }, [dataLength]); 

    return { currentSlide, nextSlide, prevSlide, setCurrentSlide };
};

export default useSlider;

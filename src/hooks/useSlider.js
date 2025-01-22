import { useState } from 'react';

const useSlider = ({ dataLength }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % dataLength);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + dataLength) % dataLength);
    };

    return { currentSlide, nextSlide, prevSlide }
}

export default useSlider
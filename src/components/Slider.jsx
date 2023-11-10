import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arch from "../assets/arch.jpg"
import arch2 from "../assets/arch2.jpg"

const slides = [
  arch,
  arch2,
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide}>Previous</button>
      <div className="slider">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", duration: 1 }}
            className="slide"
          >
          <img src={slides[currentSlide]} alt="" className=" h-[500px] w-[500px] " />  
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;

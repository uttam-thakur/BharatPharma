"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { infoDataHome } from "../common/constant";
import styles from "./Styles/Home.module.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % infoDataHome.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + infoDataHome.length) % infoDataHome.length
    );

  const currentSlide = infoDataHome[currentIndex];
  return (
     <>
    <div
      className="relative flex items-center justify-center h-[100svh] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* SVG Bottom Curve */}
      <div className="absolute -bottom-40 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-screen h-32 md:h-40"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,160 C360,260 1080,60 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Text with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative z-10 text-white text-center max-w-2xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={styles.title}>{currentSlide.title}</div>
          <div className={styles.infoWindow}>
            <div className={styles.subTitle}>{currentSlide.subTitle}</div>
            <div className={styles.description}>{currentSlide.description}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 
        top-1/2 -translate-y-1/2
        text-white text-3xl z-20 cursor-pointer 
        hover:scale-110 transition
        sm:top-1/2 sm:-translate-y-1/2   
        top-[65%] -translate-y-1/2
        "
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 
        top-1/2 -translate-y-1/2 
        text-white text-3xl z-20 
        cursor-pointer 
        hover:scale-110 transition
        sm:top-1/2 sm:-translate-y-1/2   
        top-[65%] -translate-y-1/2
        "
      >
        ❯
      </button>
    </div>

   </>
  );
}

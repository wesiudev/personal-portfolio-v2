"use client";
import React, { useState, useEffect } from "react";

const TextSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % textSwitcherData.length
        );
        setAnimate(false);
      }, 500); // Duration of the animation in milliseconds
    }, 2000);

    return () => clearInterval(intervalId);
  }, [textSwitcherData]);

  return (
    <div
      className={`flex flex-row items-center justify-center text-rotator bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent w-[95vw] px-6 ${
        animate ? "animate" : ""
      }`}
    >
      {textSwitcherData[currentIndex]}
    </div>
  );
};

export default TextSwitcher;

const textSwitcherData = [
  "Web developer at your service",
  "Experienced front-end developer",
  "Design that captivates users",
  "Fresh ideas for your website",
  "Optimization and performance",
  "Fast and efficient development",
  "Professional web solutions",
  "Crafting beautiful user experiences",
  "Delivering pixel-perfect designs",
];

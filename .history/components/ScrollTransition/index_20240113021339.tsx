import React, { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
export default function ScrollTransition() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const translateYOdd = useTransform(
    scrollYProgress,
    [0.5, 0.7, 1],
    ["-100vh", "0vh", "100vh"]
  );
  const translateYEven = useTransform(
    scrollYProgress,
    [0.5, 0.7, 1],
    ["100vh", "0vh", "-100vh"]
  );
  return (
    <div ref={mainWrapper} className="flex w-screen relative h-[500vh]">
      <div className="sticky left-0 top-0 h-screen w-screen grid grid-cols-5 overflow-y-hidden">
        <motion.div
          style={{ translateY: translateYOdd }}
          className="bg-red-300 h-screen"
        ></motion.div>
        <motion.div
          style={{ translateY: translateYEven }}
          className="bg-blue-300 h-screen"
        ></motion.div>
        <motion.div
          style={{ translateY: translateYOdd }}
          className="bg-green-300 h-screen"
        ></motion.div>
        <motion.div
          style={{ translateY: translateYEven }}
          className="bg-red-300 h-screen"
        ></motion.div>
        <motion.div
          style={{ translateY: translateYOdd }}
          className="bg-blue-300 h-screen"
        ></motion.div>
      </div>
    </div>
  );
}

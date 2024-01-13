import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollTransition() {
  const mainWrapper = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mainWrapper,
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-100vh", "0", "100vh"]
  );

  return (
    <div ref={mainWrapper} className="flex w-screen relative h-[200vh]">
      <div className="h-max w-screen grid grid-cols-5 z-[500]">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            style={{ translateY }}
            className={index % 2 === 0 ? "bg-red-300" : "bg-blue-300"}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}

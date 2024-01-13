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
    ["-100vh", "0vh", "100vh"]
  );

  return (
    <div
      ref={mainWrapper}
      className="flex w-screen relative h-[200vh] bg-black"
    >
      <motion.div
        style={{ translateY }}
        className="w-screen flex items-center justify-center"
      >
        Are you interested to work with me?
      </motion.div>
    </div>
  );
}

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollTransition() {
  const mainWrapper = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mainWrapper,
  });

  const translateY = useTransform(scrollYProgress, [0, 0.5], ["-100vh", "0vh"]);

  return (
    <div ref={mainWrapper} className="flex w-screen relative h-[200vh] z-20">
      <motion.div
        style={{ translateY }}
        className="fixed left-0 top-0 w-screen h-screen text-white font-bold text-5xl flex items-center justify-center"
      >
        Are you interested to work with me?
      </motion.div>
    </div>
  );
}

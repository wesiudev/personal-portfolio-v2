import React, { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
export default function ScrollTransition() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const position = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["sticky", "relative"]
  );
  return (
    <div className="fixed left-0 top-0">
      <div ref={mainWrapper} className="flex w-screen relative h-[250vh]">
        <div className="sticky left-0 top-0 h-screen w-screen grid grid-cols-5 overflow-y-hidden">
          <motion.div className="bg-red-300 h-screen"></motion.div>
          <motion.div className="bg-blue-300 h-screen"></motion.div>
          <motion.div className="bg-green-300 h-screen"></motion.div>
          <motion.div className="bg-red-300 h-screen"></motion.div>
          <motion.div className="bg-blue-300 h-screen"></motion.div>
        </div>
      </div>
    </div>
  );
}

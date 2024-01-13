import Link from "next/link";
import React, { useRef } from "react";

import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import { motion } from "framer-motion-3d";
type motion = MotionValue<number>;
export default function ProjectShowcase({ menuOpacity }: { menuOpacity: any }) {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const texts = [
    "SIEMA 1",
    "SIEMA 2",
    "SIEMA 3" /* Add more texts as needed */,
  ];

  const currentTextIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    Array.from({ length: texts.length }, (_, index) => index)
  );

  return (
    <>
      <motion.div
        style={{ opacity: menuOpacity }}
        className={`duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <motion.h2
          style={{
            translateY: useTransform(
              currentTextIndex,
              texts.map((_, index) => `-${index * 30}vh`)
            ),
          }}
          className="font-sans font-bold italic text-4xl bg-yellow-300 select-none text-center p-3 rounded-xl"
        >
          {texts.map((text, index) => (
            <span
              key={index}
              style={{ display: index === 0 ? "initial" : "none" }}
            >
              {text}
            </span>
          ))}
        </motion.h2>
      </motion.div>
      <div
        ref={mainWrapper}
        className="h-[1000vh] w-screen relative mt-[400vh]"
      >
        <div className="z-[502] sticky top-0 h-screen">SIEMA</div>
      </div>
    </>
  );
}

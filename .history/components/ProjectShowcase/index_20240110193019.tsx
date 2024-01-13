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
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["-20vh", "12vh"]
  );

  const h2TextOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.5],
    [0, 1, 0]
  );

  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`h-screen duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <motionDiv.h2
          style={{ translateY: h1TextTranslateY }}
          className="font-sans font-bold italic text-4xl lg:text-6xl text-white select-none text-center p-3 rounded-xl"
        >
          Projects Showcase
        </motionDiv.h2>
        <motionDiv.h2
          style={{ opacity: h2TextOpacity, translateX: "-50%" }}
          className="fixed bottom-16 font-sans w-max left-1/2 font-bold italic text-4xl lg:text-6xl text-black bg-yellow-300 select-none text-center"
        >
          Blackbell Art
        </motionDiv.h2>
      </motionDiv.div>
      <div
        ref={mainWrapper}
        className="h-[1000vh] w-screen relative mt-[650vh] bg-blue-300"
      ></div>
    </>
  );
}

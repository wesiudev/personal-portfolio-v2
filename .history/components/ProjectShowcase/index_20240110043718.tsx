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
    ["30vh", "-30vh"]
  );

  const h2TextOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.3, 0.4],
    [0, 1, 0]
  );

  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <motionDiv.h2
          style={{ translateY: h1TextTranslateY }}
          className=" font-sans font-bold italic text-4xl lg:text-6xl text-white select-none text-center p-3 rounded-xl"
        >
          Projects Showcase
        </motionDiv.h2>
        <motionDiv.h2
          style={{ opacity: h2TextOpacity }}
          className="mt-[30vh] font-sans font-bold italic text-4xl lg:text-6xl text-white bg-yellow-300 select-none text-center p-3 rounded-xl"
        >
          Blackbell Art
        </motionDiv.h2>
      </motionDiv.div>
      <div
        ref={mainWrapper}
        className="h-[1000vh] w-screen relative mt-[400vh]"
      ></div>
    </>
  );
}

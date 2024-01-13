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
  const h4TextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["24vw", "0vw"]
  );
  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <motionDiv.h2
          style={{ translateY: h4TextTranslateY }}
          className="duration-300 font-sans font-bold italic text-4xl bg-yellow-300 select-none text-center"
        >
          Projects Showcase
        </motionDiv.h2>
      </motionDiv.div>
      <div
        ref={mainWrapper}
        className="h-[1000vh] w-screen relative mt-[400vh]"
      >
        <div className="z-[502] sticky top-0 h-screen ">SIEMA</div>
      </div>
    </>
  );
}

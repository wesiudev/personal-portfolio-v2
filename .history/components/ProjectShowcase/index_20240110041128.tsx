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
export default function ProjectShowcase({
  menuOpacity,
}: {
  menuOpacity: motion;
}) {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <motionDiv.div
        ref={mainWrapper}
        style={{ opacity: menuOpacity }}
        className={`duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <Link
          href="#"
          className="font-sans font-bold italic text-4xl bg-yellow-300 select-none"
        >
          Projects Showcase
        </Link>
      </motionDiv.div>
      <div className="h-[1000vh] w-screen relative mt-[700vh]">
        <div className="z-[502] sticky top-0 h-screen ">SIEMA</div>
      </div>
    </>
  );
}

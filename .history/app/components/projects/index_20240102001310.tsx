import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    ["250px", "125px", "0px"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    ["transparent", "transparent", "black"]
  );
  return (
    <div
      ref={targetRef}
      className="p-6 pt-24 lg:p-12 2xl:pt-36 z-[49] relative h-screen overflow-hidden"
      id="projects"
    >
      <div className="">
        <motion.h2
          style={{ x, color }}
          className="text-4xl lg:text-6xl 2xl:text-8xl font-bold text-zinc-400 drop-shadow-2xl shadow-black hover:text-zinc-700  w-max mx-auto lg:mx-0"
        >
          portfolio projects
        </motion.h2>
      </div>
    </div>
  );
}

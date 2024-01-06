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
    [0.5, 0.6, 0.7],
    ["250px", "125px", "0px"]
  );
  return (
    <div
      ref={targetRef}
      className="p-6 pt-24 lg:p-12 2xl:pt-36 z-[49] relative bg-blue-300"
      id="projects"
    >
      <div className="">
        <motion.h2 className="text-4xl lg:text-6xl 2xl:text-8xl font-bold text-zinc-600 drop-shadow-2xl shadow-black hover:text-zinc-700 duration-500 w-max mx-auto lg:mx-0">
          portfolio projects
        </motion.h2>
      </div>
    </div>
  );
}

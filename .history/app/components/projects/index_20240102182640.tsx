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
    ["250px", "0px", "250px"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    ["rgb(161 161 170)", "rgb(161 161 170)", "rgb(63 63 70)"]
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
          className="text-4xl lg:text-6xl 2xl:text-8xl font-bold drop-shadow-2xl shadow-black w-max mx-auto lg:mx-0"
        >
          portfolio projects
        </motion.h2>
        <motion.div className="flex">

        </motion.div>
      </div>
    </div>
  );
}

const projects = [
  {name:"", shortDescription:"", images:[{src:"", description:""}]},
  {name:"", shortDescription:"", images:[{src:"", description:""}]},
  {name:"", shortDescription:"", images:[{src:"", description:""}]},
  {name:"", shortDescription:"", images:[{src:"", description:""}]}
]

]
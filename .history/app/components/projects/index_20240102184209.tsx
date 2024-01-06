import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const mainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.5],
    ["250px", "125px", "250px"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["rgb(161 161 170)", "rgb(161 161 170)", "rgb(63 63 70)"]
  );
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const xPortfolioItems = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    ["100vw", "0vw", "-100vw"]
  );
  return (
    <div
      ref={mainWrapper}
      className="p-6 pt-24 lg:p-12 2xl:pt-36 z-[49] relative h-max overflow-hidden"
      id="projects"
    >
      <div className="relative">
        <motion.h2
          style={{ x, color, position }}
          className="fixed text-4xl lg:text-6xl 2xl:text-8xl font-bold drop-shadow-2xl shadow-black w-max mx-auto lg:mx-0 top-0 left-0 "
        >
          portfolio projects
        </motion.h2>
        <motion.div style={{ translateX: xPortfolioItems }} className="flex">
          {projects.map((project: any, i: any) => (
            <div
              key={i}
              className="w-[33vw] h-[50vh] flex items-center justify-center"
            >
              {project.name}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-screen w-screen"></div>
    </div>
  );
}

const projects = [
  {
    name: "Manicure Grudziądz",
    shortDescription: "",
    images: [{ src: "", description: "" }],
  },
  {
    name: "Kancelaria Deluga",
    shortDescription: "",
    images: [{ src: "", description: "" }],
  },
  {
    name: "Blackbell Art",
    shortDescription: "",
    images: [{ src: "", description: "" }],
  },
  {
    name: "Fryzury Kamińska",
    shortDescription: "",
    images: [{ src: "", description: "" }],
  },
  {
    name: "Decocanva",
    shortDescription: "",
    images: [{ src: "", description: "" }],
  },
];

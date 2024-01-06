import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectsMap from "./ProjectsMap";

export default function Projects() {
  const mainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3],
    ["100%", "0%", "0%"]
  );

  const textOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? 0 : 1
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["rgb(161 161 170)", "rgb(63 63 70)"]
  );

  const xPortfolioItems = useTransform(
    scrollYProgress,
    [0.1, 0.2, 1],
    ["120%", "15%", "-60%"]
  );
  return (
    <>
      <div
        ref={mainWrapper}
        className="p-6 pt-24 lg:p-12 2xl:pt-36 z-[49] relative overflow-hidden h-[400vh]"
        id="projects"
      >
        <motion.h2
          style={{ translateX: textFromRight, color, opacity: textOpacity }}
          className="fixed right-12 bottom-12 text-4xl lg:text-6xl 2xl:text-8xl duration-200 font-bold drop-shadow-2xl shadow-black w-max mx-auto lg:mx-0"
        >
          portfolio projects
        </motion.h2>
        <motion.div
          style={{ translateX: xPortfolioItems }}
          className="flex fixed top-36 duration-75"
        >
          {projects.map((project: any, i: any) => (
            <div key={i} className="w-[88vw] lg:w-[33vw] rounded-xl ml-12">
              <Image
                src={project.images[0].src}
                width={1024}
                height={1024}
                alt=""
                className="w-full h-auto rounded-xl shadow-md shadow-zinc-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <ProjectsMap projects={projects} />
    </>
  );
}

const projects = [
  {
    name: "Manicure Grudziądz",
    shortDescription: "",
    images: [
      { src: "/images/projects/manicuregrudziadz/hero.png", description: "" },
    ],
    bgColor: "red",
  },
  {
    name: "Kancelaria Deluga",
    shortDescription: "",
    images: [
      { src: "/images/projects/kancelariadeluga/hero.png", description: "" },
    ],
    bgColor: "blue",
  },
  {
    name: "Blackbell Art",
    shortDescription: "",
    images: [
      { src: "/images/projects/blackbellart/hero.png", description: "" },
    ],
    bgColor: "red",
  },
  {
    name: "Fryzury Kamińska",
    shortDescription: "",
    images: [
      { src: "/images/projects/fryzurykaminska/hero.png", description: "" },
    ],
    bgColor: "blue",
  },
  {
    name: "Decocanva",
    shortDescription: "",
    images: [{ src: "/images/projects/decocanva/hero.png", description: "" }],
    bgColor: "red",
  },
];

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const mainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["100%", "50%", "0%"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["rgb(161 161 170)", "rgb(161 161 170)", "rgb(63 63 70)"]
  );

  const xPortfolioItems = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    ["100%", "0%", "-100%"]
  );
  return (
    <div
      ref={mainWrapper}
      className="p-6 pt-24 lg:p-12 2xl:pt-36 z-[49] relative h-max overflow-hidden"
      id="projects"
    >
      <div className="">
        <motion.h2
          style={{ translateX: textFromRight, color }}
          className="fixed right-12 bottom-12 text-4xl lg:text-6xl 2xl:text-8xl font-bold drop-shadow-2xl shadow-black w-max mx-auto lg:mx-0"
        >
          portfolio projects
        </motion.h2>
        <motion.div
          style={{ translateX: xPortfolioItems }}
          className="flex fixed top-12 bottom-12 left-12 right-12"
        >
          {projects.map((project: any, i: any) => (
            <div
              key={i}
              className="h-[300px] bg-white rounded-xl shadow-md shadow-zinc-700 ml-12"
            >
              <Image
                src={project.images[0].src}
                width={1024}
                height={1024}
                alt=""
                className="w-auto h-full rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-[400vh] w-screen"></div>
    </div>
  );
}

const projects = [
  {
    name: "Manicure Grudziądz",
    shortDescription: "",
    images: [
      { src: "/images/projects/manicuregrudziadz/hero.png", description: "" },
    ],
  },
  {
    name: "Kancelaria Deluga",
    shortDescription: "",
    images: [
      { src: "/images/projects/kancelariadeluga/hero.png", description: "" },
    ],
  },
  {
    name: "Blackbell Art",
    shortDescription: "",
    images: [
      { src: "/images/projects/blackbellart/hero.png", description: "" },
    ],
  },
  {
    name: "Fryzury Kamińska",
    shortDescription: "",
    images: [
      { src: "/images/projects/fryzurykaminska/hero.png", description: "" },
    ],
  },
  {
    name: "Decocanva",
    shortDescription: "",
    images: [{ src: "/images/projects/decocanva/hero.png", description: "" }],
  },
];

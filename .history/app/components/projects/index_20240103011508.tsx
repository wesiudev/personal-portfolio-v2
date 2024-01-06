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
    ["140%", "0%", "0%"]
  );

  const opacity = useTransform(scrollYProgress, (pos) => (pos >= 0.3 ? 1 : 0));
  const textOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= 0.9 ? 0 : 1
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["rgb(161 161 170)", "rgb(63 63 70)"]
  );

  const xPortfolioItems = useTransform(
    scrollYProgress,
    [0.1, 0.4, 1],
    ["-50%", "-50%", "70%"]
  );
  return (
    <>
      <div
        ref={mainWrapper}
        className="p-6 pt-24 lg:p-12 2xl:pt-36 relative overflow-hidden h-[300vh]"
        id="projects"
      >
        <motion.h2
          style={{ translateX: textFromRight, color, opacity: textOpacity }}
          className="fixed right-12 bottom-12 text-4xl lg:text-6xl 2xl:text-8xl duration-500 font-bold drop-shadow-2xl shadow-black w-max mx-auto lg:mx-0"
        >
          portfolio projects
        </motion.h2>
        <div className="absolute w-full h-full">
          <div className="relative w-full h-full">
            <motion.div
              style={{ translateX: xPortfolioItems, opacity }}
              className="fixed flex z-0 h-[50vh] w-max top-36 left-12 duration-150"
            >
              {projects.map((project: any, i: any) => (
                <div key={i} className="w-[88vw] lg:w-[33vw] rounded-xl ml-12">
                  <Image
                    src={project.images[0]}
                    width={1024}
                    height={1024}
                    alt=""
                    className="w-full h-auto rounded-xl shadow-md shadow-zinc-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <ProjectsMap projects={projects} />
    </>
  );
}

const projects = [
  {
    name: "Manicure Grudziądz",
    shortDescription:
      "A website dedicated to manicure services, where you can book appointments, reschedule, and earn discounts by referring friends.",
    images: [
      "/images/projects/manicuregrudziadz/hero.png",
      "/images/projects/manicuregrudziadz/dashboard.png",
      "/images/projects/manicuregrudziadz/rezerwacje.png",
    ],
    bgColor: "#3F3F46",
    link: "https://www.manicuregrudziadz.pl/",
    type: "Full-stack Application",
    technologies: [
      "Next13",
      "Internal API",
      "Firebase",
      "Typescript",
      "Momentjs",
      "Redux",
      "Tailwind",
      "TypeScript",
    ],
  },
  {
    name: "Kancelaria Deluga",
    shortDescription:
      "Business card page for a legal advisor. Contact, Services.",
    images: [
      "/images/projects/kancelariadeluga/hero.png",
      "/images/projects/kancelariadeluga/offer.png",
    ],
    bgColor: "#65574C",
    link: "https://www.delugakancelaria.pl/",
    type: "Front-end with API call",
    technologies: ["Next13", "Scroll Animations", "Tailwind", "Internal API"],
  },
  {
    name: "Blackbell Art",
    shortDescription:
      "A website for traditional and tattoo artist. Artworks showcase, Shop, Blog. Products on the shop are displayed on a 3D canvas.",
    images: [
      "/images/projects/blackbellart/hero.png",
      "/images/projects/blackbellart/shop.png",
      "/images/projects/blackbellart/shopItem.png",
      "/images/projects/blackbellart/tattooBlog.png",
    ],
    bgColor: "#1D1D1D",
    link: "https://www.blackbellart.com/",
    type: "Full-stack Application",
    technologies: [
      "Next13",
      "ThreeJS",
      "Firebase",
      "Tailwind",
      "Internal API",
      "TypeScript",
    ],
  },
  {
    name: "Fryzury Kamińska",
    shortDescription:
      "Business card page for a hairdresser. Portfolio, Contact.",
    images: [
      "/images/projects/fryzurykaminska/hero.png",
      "/images/projects/fryzurykaminska/offer.png",
    ],
    bgColor: "#AFEAC4",
    link: "https://www.fryzurykaminska.pl/",
    type: "Front-end with a simple database",
    technologies: [
      "Next13",
      "Tailwind",
      "Internal API",
      "Firebase",
      "TypeScript",
    ],
    contrast: true,
  },
  {
    name: "Quixy",
    shortDescription:
      "The main objective of this website is to attract potential customers interested in purchasing websites created by me.",
    images: [
      "/images/projects/quixy/hero.png",
      "/images/projects/quixy/quixyPortfolio.png",
      "/images/projects/quixy/quixyPortfolio2.png",
      "/images/projects/quixy/quixyItem.png",
    ],
    bgColor: "#212121",
    link: "https://www.quixy.pl/",
    type: "Full-Stack Application",
    technologies: [
      "UX",
      "SEO",
      "Next13",
      "Firebase",
      "Internal API",
      "Tailwind",
      "TypeScript",
    ],
  },
];

"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import useWindowDimensions from "../../lib/useWindowDimensions";
import ProjectsMap from "./ProjectsMap";

export default function Projects() {
  const { width } = useWindowDimensions();
  const mainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["150%", "50%", width! >= 1366 ? "-30%" : "-100%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], ["0", "1", "0"]);

  const duration = useTransform(scrollYProgress, (pos) =>
    pos >= 0.3 ? 500 : 0
  );
  const color = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["rgb(161 161 170)", "rgb(63 63 70)"]
  );

  const xPortfolioItems = useTransform(
    scrollYProgress,
    [0.3, 0.5, 1],
    ["150vw", "120vw", width && width > 1366 ? "-125vw" : "-440vw"]
  );
  return (
    <>
      <div
        ref={mainWrapper}
        style={{ alignItems: "start" }}
        className="flex p-6 pt-24 lg:p-12 2xl:pt-36 relative h-[300vh] xl:h-[200vh] "
        id="projects"
      >
        <div className="sticky top-0 lg:top-36 h-screen lg:h-max flex items-center overflow-x-hidden">
          <motion.div
            style={{
              translateX: xPortfolioItems,
              transitionDuration: `${duration}ms`,
            }}
            className="sticky flex z-0 h-[50vh] w-max duration-75"
          >
            {projects.map((project: any, i: any) => (
              <div
                key={i}
                className="w-[88vw] lg:w-[70vw] xl:w-[40vw] rounded-xl ml-12"
              >
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
        <motion.h2
          style={{ translateX: textFromRight, color, opacity: opacity }}
          className="fixed right-12 bottom-36 lg:bottom-12 text-6xl lg:text-7xl 2xl:text-8xl font-bold drop-shadow-2xl shadow-black w-max mx-auto lg:mx-0"
        >
          portfolio projects
        </motion.h2>
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
      "API",
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
    technologies: ["Next13", "Scroll Animations", "Tailwind", "API"],
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
      "/images/projects/blackbellart/tattoos.png",
      "/images/projects/blackbellart/contact.png",
    ],
    bgColor: "#1D1D1D",
    link: "https://www.blackbellart.com/",
    type: "Full-stack Application",
    technologies: [
      "Next13",
      "ThreeJS",
      "Firebase",
      "Tailwind",
      "API",
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
    technologies: ["Next13", "Tailwind", "API", "Firebase", "TypeScript"],
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
      "API",
      "Tailwind",
      "TypeScript",
    ],
  },
];

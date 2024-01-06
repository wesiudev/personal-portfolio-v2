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
        className="p-6 pt-24 lg:p-12 2xl:pt-36 z-[49] relative overflow-hidden h-[300vh]"
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
    shortDescription: "",
    images: [
      "/images/projects/manicuregrudziadz/hero.png",
      "/images/projects/manicuregrudziadz/dashboard.png",
      "/images/projects/manicuregrudziadz/rezerwacje.png",
    ],
    bgColor: "#3F3F46",
  },
  {
    name: "Kancelaria Deluga",
    shortDescription:
      "Business card page for a legal advisor. Contact, services.",
    images: [
      "/images/projects/kancelariadeluga/hero.png",
      "/images/projects/kancelariadeluga/offer.png",
    ],
    bgColor: "#65574C",
  },
  {
    name: "Blackbell Art",
    shortDescription:
      "A website for traditional and tattoo artist. Artworks showcase, shop, blog, products are displayed on a 3D canvas.",
    images: [
      "/images/projects/blackbellart/hero.png",
      "/images/projects/blackbellart/shop.png",
      "/images/projects/blackbellart/shopItem.png",
      "/images/projects/blackbellart/tattoos.png",
      "/images/projects/blackbellart/tattooBlog.png",
    ],
    bgColor: "#1D1D1D",
  },
  {
    name: "Fryzury Kamińska",
    shortDescription:
      "Business card page for a hairdresser. Portfolio, contact.",
    images: [
      "/images/projects/fryzurykaminska/hero.png",
      "/images/projects/fryzurykaminska/offer.png",
    ],
    bgColor: "#AFEAC4",
  },
  {
    name: "Quixy",
    shortDescription:
      "The main objective of this website is to attract potential customers interested in purchasing high-quality websites.",
    images: [
      "/images/projects/quixy/hero.png",
      "/images/projects/quixy/quixyPortfolio.png",
      "/images/projects/quixy/quixyPortfolio2.png",
      "/images/projects/quixy/quixyItem.png",
    ],
    bgColor: "#212121",
  },
];

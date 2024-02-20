import React, { useRef } from "react";

import { useScroll, useTransform, motion as motionDiv } from "framer-motion";
import MyStory from "../MyStory";
import Link from "next/link";
import { FaCode, FaLink } from "react-icons/fa";
import ProjectImages from "./ProjectImages";
import AdminPanel from "./AdminPanel";
export default function ProjectShowcase() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const h1TextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["0", "1", "1", "0"]
  );
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["-200px", "0px", "0px", "-200px"]
  );

  return (
    <>
      <div
        ref={mainWrapper}
        id="projects"
        className="flex-col flex w-screen relative mt-[470vh]"
      >
        <motionDiv.div
          style={{
            opacity: h1TextOpacity,
            translateY: h1TextTranslateY,
            translateX: "50%",
            left: "-50%",
          }}
          className="h-[20vh] lg:h-[50vh] relative w-screen flex justify-center"
        >
          <motionDiv.h2
            style={{
              boxShadow: "inset 0 0 12px #000000",
            }}
            className="bg-yellow-300 p-6 z-[550] sticky font-sans w-max h-max top-36 lg:top-24 text-3xl font-bold xl:text-7xl text-black select-none text-center"
          >
            Projects Showcase
          </motionDiv.h2>
        </motionDiv.div>

        <div className="z-[504] top-0 w-screen flex flex-col ">
          {projects.map((item: any, i: any) => (
            <div
              key={i}
              className="relative h-max py-3 lg:py-24 my-12 lg:my-0 flex items-center duration-75 px-6 lg:px-12"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 h-max">
                <ProjectImages images={item.images} />
                <div
                  className="italic mt-4 lg:mt-0 text-white bg-slate-800 bg-opacity-70 overflow-hidden rounded-xl min-h-full"
                  style={{
                    boxShadow: "0px 0px 6px black",
                  }}
                >
                  <h2 className="bg-yellow-300 w-max p-3 shadow-lg shadow-gray-400 rounded-br-xl font-anta text-center text-black font-bold text-2xl lg:text-3xl xl:text-5xl ">
                    {item.name}
                  </h2>
                  <div className="p-3">
                    <p className="text-gray-400 my-2 not-italic">{item.type}</p>
                    <p className="text-lg lg:text-xl xl:text-2xl not-italic">
                      {item.shortDescription}
                    </p>{" "}
                    <h2 className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-1.5 xl:mt-3">
                      Colors
                    </h2>
                    <div className="z-50 h-max flex flex-row -ml-2 lg:-ml-4 mt-3">
                      {item.colors.map((color: any, i: number) => (
                        <li
                          key={i}
                          className="flex flex-row items-center ml-2 lg:ml-4 flex-wrap"
                        >
                          <div
                            style={{ background: `${color}` }}
                            className={`lg:h-8 h-7 lg:w-8 w-7 mr-2`}
                          ></div>
                          <span className="not-italic text-white">{color}</span>
                        </li>
                      ))}
                    </div>
                    <h2 className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-1.5 xl:mt-3">
                      Stack
                    </h2>
                    <div className="flex flex-row items-start flex-wrap -ml-3">
                      {item.technologies.map((technology: any, i: any) => (
                        <p
                          key={i}
                          className="text-sm lg:text-base xl:text-lg ml-3"
                        >
                          {technology}
                        </p>
                      ))}
                    </div>
                    <h2 className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-1.5 xl:mt-3">
                      Structure
                    </h2>
                    <p className="text-sm lg:text-base xl:text-lg">
                      {item.structure}
                    </p>
                    <h2 className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-1.5 xl:mt-3">
                      Fonts
                    </h2>
                    <div className="flex flex-col items-start">
                      {item.fonts.map((font: any, i: any) => (
                        <div className="flex flex-row items-center">
                          <p
                            key={i}
                            className="font-sans text-sm lg:text-base xl:text-lg"
                          >
                            {font.fontName}
                          </p>

                          {font.variants.map((variant: any, i: any) => (
                            <div
                              className="text-sm ml-2 mt-[2px] text-gray-400"
                              key={i}
                            >
                              {variant}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-row items-center space-x-4 not-italic">
                      <Link
                        title={`Source code of ${item.name}`}
                        target="_blank"
                        href={item.sourceCode}
                        className="flex flex-row items-center"
                      >
                        <FaCode className="mr-2 h-7 w-7" /> Source code
                      </Link>
                      <Link
                        href={item.link}
                        target="_blank"
                        title="Visit page"
                        className="flex flex-row items-center"
                      >
                        <FaLink className="mr-2 h-6 w-6" />
                        Visit Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <AdminPanel />
        </div>
        <MyStory />
      </div>
    </>
  );
}

const projects = [
  {
    name: "Blackbell Art",
    shortDescription:
      "A website for traditional and tattoo artist. Artworks showcase, Shop, Blog. Stripe Payments. Products on the shop are displayed on a 3D canvas.",
    images: [
      "/images/projects/blackbellart/hero.webp",
      "/images/projects/blackbellart/shop.webp",
      "/images/projects/blackbellart/shopItem.webp",
      "/images/projects/blackbellart/tattooBlog.webp",
      "/images/projects/blackbellart/tattoos.webp",
      "/images/projects/blackbellart/contact.webp",
    ],
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
    colors: ["#252326", "#8F26F3", "#22C55E"],
    style: "Creative, Classy, Artistic",
    purpose: "Presentation of Portfolio, Studio Information, Contact",
    fonts: [
      {
        fontName: "CocoSharp",
        variants: ["regular", "bold", "light", "italic"],
      },
      {
        fontName: "Gilroy",
        variants: ["regular"],
      },
      {
        fontName: "GraublauWeb",
        variants: ["regular", "bold"],
      },
    ],
    structure: "Home Page, Portfolio, Contact, Shop",
    sourceCode: "https://github.com/wesiudev/art-tattoo",
  },
  {
    name: "Manicure Grudziądz",
    shortDescription:
      "A website dedicated to manicure services, where you can book appointments, reschedule, and earn discounts by referring friends.",
    images: [
      "/images/projects/manicuregrudziadz/hero.webp",
      "/images/projects/manicuregrudziadz/dashboard.webp",
      "/images/projects/manicuregrudziadz/rezerwacje.webp",
    ],
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
    colors: ["#3F3F46", "#FACC15", "#4F46E5"],
    style: "Elegant",
    purpose: "Connect clients with manicure services",
    fonts: [
      {
        fontName: "CocoSharp",
        variants: ["light", "light italic", "regular", "bold"],
      },
    ],
    structure:
      "Home Page, Services & Services Slugs, Contact, Reservarions, Dashboard, Blog",
    sourceCode: "https://github.com/wesiudev/manicuregrudziadz",
  },
  {
    name: "Quixy",
    shortDescription:
      "The main objective is to attract potential customers interested in purchasing a website.",
    images: [
      "/images/projects/quixy/hero.webp",
      "/images/projects/quixy/quixyPortfolio.webp",
      "/images/projects/quixy/quixyPortfolio2.webp",
      "/images/projects/quixy/quixyItem.webp",
    ],
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
    colors: ["#DBA61A", "#4ADE80", "#212121"],
    style: "Majestic",
    purpose: "Presentation of Web Development services to clients.",
    fonts: [
      {
        fontName: "CocoSharp",
        variants: ["light", "light italic", "regular", "bold"],
      },
    ],
    structure: "Home Page, Services & Services Slugs, Contact Module, Blog",
    sourceCode: "https://github.com/wesiudev/quixy",
  },
  {
    name: "Fryzury Kamińska",
    shortDescription:
      "Business card page for a hairdresser. Portfolio, Contact.",
    images: [
      "/images/projects/fryzurykaminska/hero.webp",
      "/images/projects/fryzurykaminska/offer.webp",
    ],
    link: "https://www.fryzurykaminska.pl/",
    type: "Front-end with a simple database",
    technologies: ["Next13", "Tailwind", "API", "Firebase", "TypeScript"],
    colors: ["#22C55E", "#F3F4F6", "#93C5FD"],
    style: "Modern and Trendy",
    purpose: "Quick contact, presentation of services",
    fonts: [
      {
        fontName: "CocoSharp",
        variants: ["regular", "bold"],
      },
    ],
    structure: "Home Page, Services, Contact, Price List",
    sourceCode: "https://github.com/wesiudev/fryzury-kaminska",
  },
  {
    name: "Kancelaria Deluga",
    shortDescription:
      "Business card page for a legal advisor. Contact, Services.",
    images: [
      "/images/projects/kancelariadeluga/hero.webp",
      "/images/projects/kancelariadeluga/offer.webp",
    ],
    link: "https://www.delugakancelaria.pl/",
    type: "Front-end with API call",
    technologies: ["Next13", "Scroll Animations", "Tailwind", "API"],
    colors: ["#685A50", "#4ADE80", "#D8B4FE"],
    style: "Elegant and Professional",
    purpose: "Quick contact with the law firm, presentation of services",
    fonts: [
      {
        fontName: "CocoSharp",
        variants: ["regular", "bold"],
      },
    ],
    structure: "Home Page, Services, Contact, Price List",
    sourceCode: "https://github.com/wesiudev/kancelaria-artur-deluga",
  },
];

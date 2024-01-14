import React, { useRef } from "react";

import { useScroll, useTransform, motion as motionDiv } from "framer-motion";
import Image from "next/image";
import MyStory from "../MyStory";
import Link from "next/link";
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
  const h1TextTranslateX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["200px", "0px", "0px", "200px"]
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
        <div className="h-[50vh] relative w-screen">
          <motionDiv.h2
            style={{
              opacity: h1TextOpacity,
              translateY: h1TextTranslateY,
              translateX: "-50%",
            }}
            className="hidden lg:block bg-yellow-300 z-[550] sticky left-1/2 font-sans w-max top-24 text-6xl font-bold xl:text-7xl text-black select-none text-center"
          >
            Projects Showcase
          </motionDiv.h2>
        </div>
        <motionDiv.h2
          style={{
            opacity: h1TextOpacity,
            translateX: h1TextTranslateX,
          }}
          className="lg:hidden bg-black bg-opacity-40 z-[550] fixed right-6 font-sans w-max top-9 text-2xl lg:text-3xl xl:text-4xl text-white select-none text-center p-3 rounded-xl"
        >
          Projects Showcase
        </motionDiv.h2>
        <div className="z-[504] top-0 w-screen flex flex-col mt-24">
          {projects.map((item: any, i: any) => (
            <div
              key={i}
              className="h-max py-24 my-12 lg:my-0 flex items-center duration-75 px-6 lg:px-12"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 h-max">
                <div className="relative ">
                  <div className="flex flex-row space-x-2 bottom-3 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-3 lg:top-1/2 lg:-translate-y-1/2 absolute lg:space-y-3 bg-black bg-opacity-50 p-1.5">
                    {item.colors.map((color: any, i: number) => (
                      <li key={i} className="flex flex-row items-center">
                        <div
                          style={{ background: `${color}` }}
                          className={`lg:h-8 h-7 lg:w-8 w-7 mr-2`}
                        ></div>
                        <span className="not-italic text-white">{color}</span>
                      </li>
                    ))}
                  </div>
                  <Image
                    style={{ boxShadow: "0px 0px 6px black" }}
                    src={item.images[0]}
                    width={1024}
                    height={1024}
                    alt=""
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div
                  className="italic mt-4 lg:mt-0 text-white bg-slate-800 bg-opacity-70 overflow-hidden rounded-xl min-h-full"
                  style={{
                    boxShadow: "0px 0px 6px black",
                  }}
                >
                  <h2 className="bg-yellow-300 w-full p-2 text-center mx-auto lg:mx-0 text-black font-sans font-bold text-2xl lg:text-3xl xl:text-5xl drop-shadow-md shadow-black px-1">
                    {item.name}
                  </h2>
                  <div className="p-3">
                    <div className="flex flex-row items-center justify-between w-full">
                      <p className="text-gray-400 my-2 not-italic">
                        {item.type}
                      </p>
                      <Link
                        href={item.link}
                        target="_blank"
                        title="Visit page"
                        className="flex flex-row items-center text-base lg:text-xl"
                      >
                        <div className="rounded-full h-3 w-3 bg-green-400 mr-1" />
                        Visit Page
                      </Link>
                    </div>
                    <p className="text-lg lg:text-xl xl:text-2xl not-italic">
                      {item.shortDescription}
                    </p>
                    <h2 className="font-bold text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-1.5 xl:mt-3">
                      Stack
                    </h2>
                    <div className="flex flex-row items-start flex-wrap -ml-3">
                      {item.technologies.map((technology: any, i: any) => (
                        <p
                          key={i}
                          className="font-sans text-sm lg:text-base xl:text-lg ml-3"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      "A website for traditional and tattoo artist. Artworks showcase, Shop, Blog. Products on the shop are displayed on a 3D canvas.",
    images: [
      "/images/projects/blackbellart/hero.png",
      "/images/projects/blackbellart/shop.png",
      "/images/projects/blackbellart/shopItem.png",
      "/images/projects/blackbellart/tattooBlog.png",
      "/images/projects/blackbellart/tattoos.png",
      "/images/projects/blackbellart/contact.png",
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
  },
  {
    name: "Manicure Grudziądz",
    shortDescription:
      "A website dedicated to manicure services, where you can book appointments, reschedule, and earn discounts by referring friends.",
    images: [
      "/images/projects/manicuregrudziadz/hero.png",
      "/images/projects/manicuregrudziadz/dashboard.png",
      "/images/projects/manicuregrudziadz/rezerwacje.png",
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
  },
  {
    name: "Quixy",
    shortDescription:
      "The main objective is to attract potential customers interested in purchasing a website.",
    images: [
      "/images/projects/quixy/hero.png",
      "/images/projects/quixy/quixyPortfolio.png",
      "/images/projects/quixy/quixyPortfolio2.png",
      "/images/projects/quixy/quixyItem.png",
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
  },
  {
    name: "Fryzury Kamińska",
    shortDescription:
      "Business card page for a hairdresser. Portfolio, Contact.",
    images: [
      "/images/projects/fryzurykaminska/hero.png",
      "/images/projects/fryzurykaminska/offer.png",
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
  },
  {
    name: "Kancelaria Deluga",
    shortDescription:
      "Business card page for a legal advisor. Contact, Services.",
    images: [
      "/images/projects/kancelariadeluga/hero.png",
      "/images/projects/kancelariadeluga/offer.png",
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
  },
];

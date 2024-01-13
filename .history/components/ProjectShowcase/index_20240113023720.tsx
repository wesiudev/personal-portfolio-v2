import React, { useRef } from "react";

import { useScroll, useTransform, motion as motionDiv } from "framer-motion";
import Image from "next/image";
import ScrollTransition from "../ScrollTransition";
export default function ProjectShowcase() {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.25],
    ["-50px", "48px", "48px", "-50px"]
  );
  const h1TextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.25],
    ["0", "1", "1", "0"]
  );
  const position = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    ["relative", "sticky"]
  );

  return (
    <>
      <motionDiv.h2
        style={{
          opacity: h1TextOpacity,
          translateY: h1TextTranslateY,
          translateX: "-50%",
        }}
        className="bg-black bg-opacity-40 z-[550] fixed left-1/2 font-sans font-bold italic w-max top-0 text-2xl lg:text-5xl xl:text-6xl text-white select-none text-center p-3 rounded-xl"
      >
        Projects Showcase
      </motionDiv.h2>
      <div
        ref={mainWrapper}
        className="h-max flex w-screen sticky top-0 relative mt-[525vh]"
      >
        <motionDiv.div className="z-[504] sticky top-0 w-screen flex flex-col mt-[70vh] lg:mt-36">
          {projects.map((item: any, i: any) => (
            <motionDiv.div
              key={i}
              className="min-h-[100vh] my-12 lg:my-0 flex items-center duration-75 py-3 px-6 lg:px-12"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 h-max">
                <motionDiv.div className="">
                  <Image
                    style={{ boxShadow: "0px 0px 6px black" }}
                    src={item.images[0]}
                    width={1024}
                    height={1024}
                    alt=""
                    className="w-full h-auto rounded-xl"
                  />
                </motionDiv.div>
                <motionDiv.div
                  className="italic mt-4 lg:mt-0  text-white bg-slate-800 bg-opacity-70 overflow-hidden rounded-xl border-4 border-zinc-800 h-max"
                  style={{
                    boxShadow: "0px 0px 6px black",
                  }}
                >
                  <h2 className="bg-yellow-300 w-full p-2 text-center mx-auto lg:mx-0 text-black font-sans font-bold text-2xl lg:text-3xl xl:text-5xl drop-shadow-md shadow-black px-1">
                    {item.name}
                  </h2>
                  <div className="p-3">
                    <p className="text-gray-400 my-2 not-italic">{item.type}</p>
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
                      Colors
                    </h2>{" "}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 mt-3 lg:mt-1.5 xl:mt-3">
                      {item.colors.map((color: any, i: number) => (
                        <li key={i} className="flex flex-row items-center">
                          <div
                            style={{ background: `${color}` }}
                            className={`lg:h-8 h-7 lg:w-8 w-7 mr-2`}
                          ></div>
                          <span>{color}</span>
                        </li>
                      ))}
                    </div>
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
                </motionDiv.div>
              </div>
            </motionDiv.div>
          ))}
          <ScrollTransition />
        </motionDiv.div>
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

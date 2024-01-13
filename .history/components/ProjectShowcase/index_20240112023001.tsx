import React, { useRef } from "react";

import { useScroll, useTransform, motion as motionDiv } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
export default function ProjectShowcase({ menuOpacity }: { menuOpacity: any }) {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.7, 0.8],
    ["-200px", "48px", "48px", "-200px"]
  );
  const h1TextOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.7, 0.8],
    ["0", "1", "1", "0"]
  );

  const project1TranslateXLeft = useTransform(
    scrollYProgress,
    [0.15, 0.2],
    ["-3vw", "0vw"]
  );
  const project1TranslateXRight = useTransform(
    scrollYProgress,
    [0.15, 0.2],
    ["3vw", "0vw"]
  );
  const project1Opacity = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);

  const wrapperPos = useTransform(
    scrollYProgress,
    [0.2, 0.22],
    ["relative", "sticky"]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0.23, 0.8],
    ["0vh", "-700vh"]
  );

  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`h-screen duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <motionDiv.h2
          style={{ opacity: h1TextOpacity, translateY: h1TextTranslateY }}
          className="bg-black bg-opacity-40 !z-[550] relative font-sans font-bold italic text-4xl lg:text-6xl text-white select-none text-center p-3 rounded-xl"
        >
          Projects Showcase
        </motionDiv.h2>
      </motionDiv.div>
      <div
        ref={mainWrapper}
        className="h-[1000vh] w-screen relative mt-[400vh]"
      >
        <motionDiv.div
          style={{ position: wrapperPos }}
          className="top-0 left-0 z-[504] w-screen flex flex-col"
        >
          {projects.map((item: any, i: any) => (
            <motionDiv.div
              key={i}
              style={{ translateY, opacity: project1Opacity }}
              className="h-[100vh] flex items-center duration-75 py-3 px-6 lg:px-24"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-max mt-12 ">
                <motionDiv.div
                  style={{
                    translateX: project1TranslateXLeft,
                  }}
                >
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
                  className="italic mx-3 lg:mx-6 text-white bg-slate-800 bg-opacity-70 overflow-hidden rounded-xl border-4 border-zinc-800 h-max"
                  style={{
                    translateX: project1TranslateXRight,
                    boxShadow: "0px 0px 6px black",
                  }}
                >
                  <h2 className="bg-yellow-300 my-3 lg:mt-0 w-full p-2 text-center mx-auto lg:mx-0 text-black font-sans font-bold text-5xl drop-shadow-md shadow-black px-1">
                    {item.name}
                  </h2>
                  <div className="p-3">
                    <p className="text-gray-400 mb-2 not-italic">{item.type}</p>
                    <p className="text-2xl not-italic">
                      {item.shortDescription}
                    </p>
                    <h2 className="font-bold text-2xl mt-3">Stack</h2>
                    <div className="flex flex-row items-start space-x-3">
                      {item.technologies.map((technology: any, i: any) => (
                        <p key={i} className="font-sans text-lg">
                          {technology}
                        </p>
                      ))}
                    </div>
                    <h2 className="font-bold text-2xl mt-3">Fonts</h2>
                    <div className="flex flex-col items-start">
                      {item.fonts.map((font: any, i: any) => (
                        <div className="flex flex-row items-center">
                          <p key={i} className="font-sans text-lg">
                            {font.fontName}
                          </p>

                          {font.variants.map((variant: any, i: any) => (
                            <div
                              className="text-sm ml-3 mt-[2px] text-gray-400"
                              key={i}
                            >
                              {variant}
                            </div>
                          ))}
                        </div>
                      ))}
                      <Link
                        href={item.link}
                        title="Open in new tab"
                        className="text-blue-400 hover:text-blue-500 not-italic flex flex-row items-center mt-3 text-xl"
                      >
                        <FaLink className="mr-2 text-gray-400" /> Visit website
                      </Link>
                    </div>
                  </div>
                </motionDiv.div>
              </div>
            </motionDiv.div>
          ))}
        </motionDiv.div>
      </div>
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
    name: "Quixy",
    shortDescription:
      "The main objective of this website is to attract potential customers interested in purchasing websites created by me.",
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
    colors: ["#3F3F46", "#FACC15", "#4F46E5"],
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
];

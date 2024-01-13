import React, { useRef } from "react";

import { useScroll, useTransform, motion as motionDiv } from "framer-motion";
import Image from "next/image";
export default function ProjectShowcase({ menuOpacity }: { menuOpacity: any }) {
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["-200px", "48px"]
  );

  const project1TranslateXLeft = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["-20vw", "0vw"]
  );
  const project1TranslateXRight = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["20vw", "0vw"]
  );

  const project1Pos = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    ["relative", "sticky", "relative"]
  );

  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`h-screen duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <motionDiv.h2
          style={{ translateY: h1TextTranslateY }}
          className="font-sans font-bold italic text-4xl lg:text-6xl text-white select-none text-center p-3 rounded-xl"
        >
          Projects Showcase
        </motionDiv.h2>
        {/* <motionDiv.h2
          style={{ opacity: h2TextOpacity, translateX: "-50%" }}
          className="fixed bottom-16 font-sans w-max left-1/2 font-bold italic text-4xl lg:text-6xl text-black bg-yellow-300 select-none text-center"
        >
          Blackbell Art
        </motionDiv.h2> */}
      </motionDiv.div>
      <div
        ref={mainWrapper}
        className="h-[1000vh] w-screen relative mt-[620vh] bg-blue-300"
      >
        <motionDiv.div
          style={{ position: project1Pos }}
          className="top-36 left-0 z-[504] w-screen h-full"
        >
          <motionDiv.div className="h-[100vh] grid grid-cols-2 duration-75 py-3 px-24">
            <motionDiv.div style={{ translateX: project1TranslateXLeft }}>
              <Image
                src={projects[2].images[0]}
                width={1024}
                height={1024}
                alt=""
                className="w-full h-auto rounded-xl shadow-md shadow-zinc-700"
              />
            </motionDiv.div>
            <motionDiv.div
              className="px-3 lg:px-6"
              style={{ translateX: project1TranslateXRight }}
            >
              <h2 className="font-sans font-bold text-5xl text-zinc-800 drop-shadow-md shadow-black">
                {projects[2].name}
              </h2>
              <p className="font-sans text-3xl">
                {projects[2].shortDescription}
              </p>
            </motionDiv.div>
          </motionDiv.div>
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

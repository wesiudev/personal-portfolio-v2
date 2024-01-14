"use client";
import * as Scroll from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const NavRight: React.FC = () => {
  const ScrollTo = Scroll.Link;
  return (
    <div className="text-gray-300 lg:flex hidden fixed right-12 top-12 flex-col-reverse lg:flex-row lg:space-x-3 z-[590] font-regular text-xl">
      <ScrollTo
        to="projects"
        smooth={true}
        duration={500}
        delay={200}
        data-aos="fade-down"
        data-aos-delay={2600}
        className="group h-max overflow-hidden cursor-pointer flex flex-row items-center"
      >
        <div className="relative group-hover:text-white duration-200 ">
          <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-yellow-400"></div>
          <div className="z-[50] relative font-light bg-black bg-opacity-30 px-2">
            Portfolio
          </div>
        </div>
      </ScrollTo>
      <ScrollTo
        to="about"
        smooth={true}
        duration={500}
        delay={200}
        data-aos="fade-down"
        data-aos-delay={2800}
        className="group h-max overflow-hidden cursor-pointer flex flex-row items-center"
      >
        <div className="relative group-hover:text-white duration-200 ">
          <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-yellow-400"></div>
          <div className="z-[50] relative font-light bg-black bg-opacity-30  px-2">
            About
          </div>
        </div>
      </ScrollTo>
    </div>
  );
};

export const NavLeft: React.FC = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={2600}
      className="fixed left-6 lg:left-12 bottom-12 flex flex-row items-center justify-center space-y-3 z-[550] group bg-black bg-opacity-30 p-1.5 rounded-xl"
    >
      <Link
        target="_blank"
        title="Przejdź do Github.com"
        href="https://github.com/wesiudev"
        className="opacity-70 hover:opacity-100 duration-200 text-white"
      >
        <FaGithub className="h-8 w-8" />
      </Link>
      <Link
        target="_blank"
        title="Przejdź do Linkedin.com"
        href="https://linkedin.com/in/wesiudev"
        className="opacity-70 hover:opacity-100 duration-200 text-white"
      >
        <FaLinkedin className="h-8 w-8" />
      </Link>
    </div>
  );
};

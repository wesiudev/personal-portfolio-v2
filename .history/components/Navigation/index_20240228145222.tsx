"use client";
import * as Scroll from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavRight() {
  const ScrollTo = Scroll.Link;
  const pathname = usePathname();
  return (
    <div className="text-gray-300 fixed right-6 lg:right-12 top-12 flex flex-row space-x-3 z-[1000] font-regular text-xl">
      {pathname !== "/about" && (
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
            <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-yellow-300"></div>
            <div className="z-[50] relative font-light bg-black bg-opacity-30 group-hover:bg-opacity-0 duration-300 group-hover:text-black px-2">
              Portfolio
            </div>
          </div>
        </ScrollTo>
      )}
      {pathname === "/about" && (
        <Link
          href="/"
          data-aos="fade-down"
          data-aos-delay={2600}
          className="group h-max overflow-hidden cursor-pointer flex flex-row items-center"
        >
          <div className="relative group-hover:text-white duration-200 ">
            <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-yellow-300"></div>
            <div className="z-[50] relative font-light bg-black bg-opacity-30 group-hover:bg-opacity-0 duration-300 group-hover:text-black px-2">
              Portfolio
            </div>
          </div>
        </Link>
      )}
      <Link
        href="/about"
        data-aos="fade-down"
        data-aos-delay={2800}
        className="group h-max overflow-hidden cursor-pointer flex flex-row items-center"
      >
        <div className="relative group-hover:text-white duration-200 ">
          <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-yellow-300"></div>
          <div className="z-[50] relative font-light bg-black bg-opacity-30 group-hover:bg-opacity-0 duration-300 group-hover:text-black px-2">
            About
          </div>
        </div>
      </Link>
    </div>
  );
}

export function NavLeft() {
  return (
    <div className="fixed left-6 lg:left-12 bottom-12 flex flex-row items-center justify-center space-x-3 z-[601] group rounded-xl">
      <Link
        target="_blank"
        title="Przejdź do Github.com"
        href="https://github.com/wesiudev"
        className="duration-200 text-white"
      >
        <FaGithub className="h-8 w-8" />
      </Link>
      <Link
        target="_blank"
        title="Przejdź do Linkedin.com"
        href="https://linkedin.com/in/wesiudev"
        className="duration-200 text-white"
      >
        <FaLinkedin className="h-8 w-8" />
      </Link>
    </div>
  );
}

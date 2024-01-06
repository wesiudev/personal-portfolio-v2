"use client";
import * as Scroll from "react-scroll";
export default function NavRight() {
  const ScrollTo = Scroll.Link;
  return (
    <div className="fixed right-12 top-12 flex flex-col-reverse lg:flex-col items-center justify-center space-y-3 z-[150]">
      <ScrollTo
        to="projects"
        smooth={true}
        duration={500}
        delay={200}
        data-aos="fade-up"
        data-aos-delay={500}
        className="h-max cursor-pointer font-light text-3xl"
      >
        Projekty
      </ScrollTo>
    </div>
  );
}

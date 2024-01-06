"use client";
import * as Scroll from "react-scroll";
export default function NavRight({
  setAboutMeOpen,
}: {
  setAboutMeOpen: Function;
}) {
  const ScrollTo = Scroll.Link;
  return (
    <div className="fixed right-12 top-12 flex flex-col-reverse lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 z-[150] font-light text-3xl ">
      <ScrollTo
        to="projects"
        smooth={true}
        duration={500}
        delay={200}
        data-aos="fade-up"
        data-aos-delay={500}
        className="h-max cursor-pointer"
      >
        Projekty
      </ScrollTo>
      <button onClick={() => setAboutMeOpen(true)} className="">
        O mnie
      </button>
    </div>
  );
}

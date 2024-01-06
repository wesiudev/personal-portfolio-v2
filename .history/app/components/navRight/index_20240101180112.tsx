"use client";
import * as Scroll from "react-scroll";
export default function NavRight({
  setAboutMeOpen,
}: {
  setAboutMeOpen: Function;
}) {
  const ScrollTo = Scroll.Link;
  return (
    <div className="fixed right-12 top-12 flex flex-col-reverse lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 z-[150] font-regular text-3xl italic">
      <ScrollTo
        to="projects"
        smooth={true}
        duration={500}
        delay={200}
        data-aos="fade-up"
        data-aos-delay={500}
        className="h-max cursor-pointer"
      >
        <span className="mr-2 font-light">01.</span>Projekty
      </ScrollTo>
      <button onClick={() => setAboutMeOpen(true)} className="italic">
        <span className="mr-2 font-light bg-purple-500">02.</span>O mnie
      </button>
    </div>
  );
}

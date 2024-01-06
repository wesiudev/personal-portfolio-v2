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
        className="h-max cursor-pointer flex flex-row items-center"
      >
        <div className="mr-2 font-light bg-purple-500 rotate-6 p-0.5 bg-opacity-50">
          <div className="-rotate-6">01.</div>
        </div>
        Projekty
      </ScrollTo>
      <button
        onClick={() => setAboutMeOpen(true)}
        className="italic flex flex-row items-center"
      >
        <div className="mr-2 font-light bg-purple-500 rotate-6 p-0.5 bg-opacity-50">
          <div className="-rotate-6">02.</div>
        </div>
        O mnie
      </button>
    </div>
  );
}

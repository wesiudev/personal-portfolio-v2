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
        data-aos="fade-down"
        data-aos-delay={2600}
        className="group h-max overflow-hidden cursor-pointer flex flex-row items-center"
      >
        <div className="font-light bg-purple-500 p-0.5 px-2 z-[50]">
          <div className="text-white">01.</div>
        </div>
        <div className="relative group-hover:text-white duration-200 p-0.5 px-2">
          <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-purple-500 "></div>
          <div className="z-[50] relative">Portfolio</div>
        </div>
      </ScrollTo>
      <button
        data-aos="fade-down"
        data-aos-delay={2800}
        onClick={() => setAboutMeOpen(true)}
        className="italic flex flex-row items-center group overflow-hidden"
      >
        <div className="font-light bg-purple-500 p-0.5 px-2 z-[50]">
          <div className="text-white">02.</div>
        </div>
        <div className="relative group-hover:text-white duration-200 p-0.5 px-2">
          <div className="absolute -left-[120%] group-hover:-left-0 duration-300 ease-in-out top-0 h-full w-full bg-purple-500 "></div>
          <div className="z-[50] relative">O mnie</div>
        </div>
      </button>
    </div>
  );
}

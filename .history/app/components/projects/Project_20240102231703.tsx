import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const textDisappear = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? 0 : 1
  );
  return (
    <div
      ref={wrapper}
      style={{ background: project.bgColor }}
      className="h-screen w-screen flex relative p-16"
    >
      <div
        style={{ background: project.bgColor }}
        className="grid grid-cols-2 rounded-xl h-max"
      >
        <div className="flex flex-col">
          <Image
            src={project.images[0].src}
            width={1024}
            height={1024}
            alt=""
            style={{ boxShadow: "0px 0px 16px black" }}
            className=""
          />
        </div>
        <h1
          data-aos="fade-left"
          className="text-6xl text-center text-white drop-shadow-xl shadow-black font-bold"
        >
          {project.name}
        </h1>
      </div>
    </div>
  );
}

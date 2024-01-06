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
      className={`min-h-screen w-screen flex relative p-16 ${
        project.contrast ? "text-zinc-800" : "text-white"
      }`}
    >
      <div className="flex flex-col">
        <h1
          data-aos="fade-right"
          className="text-6xl text-left drop-shadow-lg shadow-black font-bold"
        >
          {project.name}
        </h1>
        <p
          data-aos="fade"
          data-aos-delay="300"
          className="text-xl text-left drop-shadow-lg shadow-black mt-6"
        >
          {project.shortDescription}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] mt-12 gap-6">
          {project.images.map((image: any, i: any) => (
            <Image
              key={i}
              src={image}
              width={1024}
              height={1024}
              alt=""
              style={{ boxShadow: "0px 0px 16px black" }}
              className=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

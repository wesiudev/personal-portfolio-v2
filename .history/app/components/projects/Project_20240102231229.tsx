import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["220%", "0%"]
  );

  const textDisappear = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? 0 : 1
  );
  return (
    <div
      ref={wrapper}
      style={{ background: project.bgColor }}
      className="h-[150vh] w-screen flex relative p-16"
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
          <div className="">
            <h2 className="text-4xl font-bold text-white mt-12">
              Wykorzystane technologie
            </h2>
          </div>
        </div>
      </div>
      <motion.h1
        className="duration-[250ms] text-center bottom-16 top-12 text-6xl text-white drop-shadow-xl shadow-black font-bold"
        style={{
          translateX: textFromRight,
          opacity: textDisappear,
        }}
      >
        {project.name}
      </motion.h1>
    </div>
  );
}

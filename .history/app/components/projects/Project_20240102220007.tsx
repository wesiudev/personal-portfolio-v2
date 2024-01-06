import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const textFromBottom = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["220%", "0%"]
  );

  const textDisappear = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? 0 : 1
  );
  return (
    <div
      ref={wrapper}
      style={{ background: project.bgColor }}
      className="h-[200vh] w-screen flex relative p-12"
    >
      <div
        style={{ background: project.bgColor }}
        className="grid grid-cols-2 rounded-xl h-max"
      >
        <Image
          src={project.images[0].src}
          width={1024}
          height={1024}
          alt=""
          style={{ transform: "rotate3d(0, 1, 0, 66deg)" }}
          className=""
        />
        <div className=""></div>
      </div>
      <motion.h1
        className="duration-[250ms] text-center left-[50%] bottom-16 fixed text-6xl text-white drop-shadow-lg shadow-black font-bold"
        style={{
          translateY: textFromBottom,
          opacity: textDisappear,
          x: "-50%",
        }}
      >
        {project.name}
      </motion.h1>
    </div>
  );
}

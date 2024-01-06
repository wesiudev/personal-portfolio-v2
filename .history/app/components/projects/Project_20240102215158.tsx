import { useScroll, useTransform, motion } from "framer-motion";
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
      className="h-[200vh] w-screen flex items-center justify-center relative"
    >
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

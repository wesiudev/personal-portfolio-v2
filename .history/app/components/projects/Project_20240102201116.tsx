import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    ["150%", "0%"]
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

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
        className="text-center right-12 top-12 fixed text-6xl text-white drop-shadow-lg shadow-black font-bold"
        style={{ translateX: textFromRight, opacity: textDisappear }}
      >
        {project.name}
      </motion.h1>
    </div>
  );
}

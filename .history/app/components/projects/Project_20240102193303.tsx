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
    [0, 0.5, 1],
    ["100%", "0%", "-100%"]
  );

  return (
    <div
      ref={wrapper}
      className="h-screen w-screen flex items-center justify-center"
    >
      <motion.h1 style={{ translateX: textFromRight }}>
        {project.name}
      </motion.h1>
    </div>
  );
}

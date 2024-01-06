import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      ref={wrapper}
      className="h-screen w-screen flex items-center justify-center relative bg-blue-500"
    >
      <motion.h1
        className="w-full bg-red-500 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
        style={{ translateX: textFromRight }}
      >
        {project.name}
      </motion.h1>
    </div>
  );
}

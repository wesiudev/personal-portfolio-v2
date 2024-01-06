import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(scrollYProgress, [0, 0.9], ["100%", "0%"]);

  return (
    <div
      ref={wrapper}
      style={{
        backgroundImage: `url('${project.images[0].src}')`,
        backgroundSize: "cover",
        backdropFilter: "blur(5px)",
      }}
      className="h-screen w-screen flex items-center justify-center relative"
    >
      <motion.h1
        className="text-center absolute top-36 right-16 text-6xl text-white drop-shadow-lg shadow-black font-bold"
        style={{ translateX: textFromRight }}
      >
        {project.name}
      </motion.h1>
    </div>
  );
}

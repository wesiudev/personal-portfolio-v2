import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Project({ project }: { project: any }) {
  const mainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const textFromRight = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3],
    ["100%", "0%", "0%"]
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {project.name}
    </div>
  );
}

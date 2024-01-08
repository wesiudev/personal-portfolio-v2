import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const position = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["relative", "sticky"]
  );

  const aboutContentScale = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const roundedContent = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["100%", "0%"]
  );

  return (
    <motion.div
      ref={wrapper}
      className="container mx-auto py-24 h-[300vh] relative bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-300"
    >
      <motion.h2
        style={{ position }}
        className="z-[301] text-7xl font-bold mb-4 top-24 text-zinc-700 drop-shadow-xl shadow-black duration-75"
      >
        About Me
      </motion.h2>
    </motion.div>
  );
};

export default About;

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const aboutContentScale = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const roundedContent = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["100%", "0%"]
  );

  return (
    <motion.div
      ref={wrapper}
      className="mx-auto p-12 h-[300vh] relative bg-gradient-to-br grid grid-cols-2"
    >
      <div className="">
        <motion.h2
          style={{}}
          className="z-[301] sticky text-8xl font-bold mb-4 top-12 text-zinc-700 drop-shadow-xl shadow-black duration-75"
        >
          About Me
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default AboutMe;

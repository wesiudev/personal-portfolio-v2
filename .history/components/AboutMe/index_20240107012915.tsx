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
      <div className="sticky top-12 h-screen">
        <h2 className="text-8xl font-bold mb-4 text-zinc-700 drop-shadow-xl shadow-black duration-75">
          About Me
        </h2>
        <div className="bg-white rounded-xl p-4 shadow-sm shadow-black">
          <span className="text-green-500">Hello!</span>
          <p></p>
        </div>
      </div>
      <div className="bg-gray-400"></div>
    </motion.div>
  );
};

export default AboutMe;

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
      <div className="sticky top-12 h-screen pr-12">
        <h2 className="text-8xl font-bold mb-4 text-zinc-700 drop-shadow-xl shadow-black duration-75">
          About Me
        </h2>
        <div className="text-2xl">
          Hello there! My name is Pawel, and I'm an enthusiastic developer with
          expertise in front-end and ongoing desire to learn new things.
        </div>
        <Image
          src="/images/wesiudev.png"
          width={1024}
          height={1024}
          alt=""
          className="h-[400px] w-auto rounded-xl mt-12"
        />
      </div>
      <div className="bg-gray-400"></div>
    </motion.div>
  );
};

export default AboutMe;

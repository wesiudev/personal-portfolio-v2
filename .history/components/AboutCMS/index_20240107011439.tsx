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
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["rgb(212 212 216)", "rgb(63 63 70)"]
  );
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.5, 1]);
  const aboutContentScale = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const roundedContent = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["100%", "0%"]
  );

  return (
    <motion.div
      ref={wrapper}
      className="container mx-auto py-16 h-[200vh] relative"
    >
      <motion.div
        style={{ scale: aboutContentScale, borderRadius: roundedContent }}
        className="fixed top-0 left-0 w-screen h-screen z-[300] bg-white"
      >
        <p className="text-gray-600">
          Hello! I'm Pawel, a passionate developer with expertise in the
          following technologies:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Next.js</li>
          <li>Framer Motion</li>
          <li>Tailwind CSS</li>
          {/* Add more technologies as needed */}
        </ul>
        <p className="mt-4 text-gray-600">
          I love creating engaging and interactive web applications. With a
          background in [Your Background], I bring a unique perspective to my
          projects.
        </p>
      </motion.div>
      <motion.h2
        style={{ position, color, scale }}
        className="z-[301] text-7xl font-bold mb-4 top-16 text-center text-zinc-300 drop-shadow-2xl shadow-black duration-75"
      >
        About Me
      </motion.h2>
    </motion.div>
  );
};

export default About;

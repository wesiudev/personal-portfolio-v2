import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);
  const aboutMeX = useTransform(scrollYProgress, [0, 1], ["-20vw", "0vw"]);

  return (
    <motion.div
      ref={wrapper}
      style={{ boxShadow: "0px 0px 5px black" }}
      className="container mx-auto my-16 p-8 h-screen"
    >
      <motion.h2 style={{ x: aboutMeX }} className="text-3xl font-bold mb-4">
        About Me
      </motion.h2>
      <p className="text-gray-600">
        Hello! I'm Pawel, a passionate developer with expertise in the following
        technologies:
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
  );
};

export default About;

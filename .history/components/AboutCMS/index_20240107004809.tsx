import { motion, useAnimation, useTransform } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const [ref] = useRef({
    triggerOnce: true,
  });

  const opacity = useTransform(controls, [0, 1], [0, 1]);
  const y = useTransform(controls, [0, 1], [20, 0]);

  controls.start({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    transition: { duration: 0.6 },
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="container mx-auto my-16 p-8 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600">
        Hello! I'm [Your Name], a passionate developer with expertise in the
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
  );
};

export default About;

import Link from "next/link";
import Project from "./Project";

export default function ProjectsMap({ projects }: { projects: any[] }) {
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
    <div>
      {projects.map((project: any, i: any) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

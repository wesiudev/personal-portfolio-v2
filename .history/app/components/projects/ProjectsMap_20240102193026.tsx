import Link from "next/link";
import Project from "./Project";

export default function ProjectsMap({ projects }: { projects: any[] }) {
  return (
    <div>
      {projects.map((project: any, i: any) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

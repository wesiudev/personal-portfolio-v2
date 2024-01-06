import Link from "next/link";

export default function ProjectsMap({ projects }: { projects: any[] }) {
  return (
    <div>
      {projects.map((project: any, i: any) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

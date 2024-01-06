import Project from "./Project";

export default function ProjectsMap({ projects }: { projects: any[] }) {
  return (
    <div className="flex flex-col overflow-hidden relative z-[100]">
      {projects.map((project: any, i: any) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

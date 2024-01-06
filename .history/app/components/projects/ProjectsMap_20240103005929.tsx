import Project from "./Project";

export default function ProjectsMap({ projects }: { projects: any[] }) {
  const [openedImage, setOpenedImage] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden relative z-[150]">
      {openedImage && (
        <OpenedImage setOpenedImage={setOpenedImage} images={project.images} />
      )}
      {projects.map((project: any, i: any) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

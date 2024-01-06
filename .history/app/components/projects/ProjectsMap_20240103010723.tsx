import Project from "./Project";
import { useState } from "react";
import OpenedImage from "./OpenedImage";
export default function ProjectsMap({ projects }: { projects: any[] }) {
  const [openedImages, setOpenedImages] = useState<string[] | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  return (
    <div className="flex flex-col overflow-hidden relative z-[150]">
      {openedImages?.length && (
        <OpenedImage
          setOpenedImages={setOpenedImages}
          images={openedImages}
          selectedItem={selectedItem}
        />
      )}
      {projects.map((project: any, i: any) => (
        <Project
          key={i}
          project={project}
          setOpenedImages={setOpenedImages}
          images={project.images}
        />
      ))}
    </div>
  );
}

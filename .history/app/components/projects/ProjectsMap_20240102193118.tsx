import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Project from "./Project";

export default function ProjectsMap({ projects }: { projects: any[] }) {

    <div>
      {projects.map((project: any, i: any) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

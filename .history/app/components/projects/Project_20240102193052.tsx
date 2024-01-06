import Link from "next/link";

export default function Project({ project }: { project: any }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {project.name}
    </div>
  );
}

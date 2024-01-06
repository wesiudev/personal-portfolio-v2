import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OpenedImage from "./OpenedImage";

export default function Project({ project }: { project: any }) {
  const [openedImage, setOpenedImage] = useState(false);
  return (
    <div
      style={{ background: project.bgColor }}
      className={`min-h-screen w-screen flex relative p-16 !z-0 ${
        project.contrast ? "text-zinc-800" : "text-white"
      }`}
    >
      {openedImage && (
        <OpenedImage setOpenedImage={setOpenedImage} images={project.images} />
      )}
      <div className="flex flex-col">
        <h1
          data-aos="fade-right"
          className="text-6xl text-left drop-shadow-lg shadow-black font-bold"
        >
          {project.name}
        </h1>

        <p
          data-aos="fade"
          data-aos-delay="300"
          className="text-xl text-left drop-shadow-lg shadow-black mt-6"
        >
          {project.shortDescription}
        </p>
        <Link
          target="_blank"
          data-aos="fade"
          data-aos-delay="400"
          href={project.link}
          className="text-xl font-bold text-blue-500 mt-3"
        >
          {project.link}
        </Link>
        <div
          data-aos="fade"
          data-aos-delay="500"
          className={`flex flex-col  rounded-xl px-3 p-2 w-max mt-3 ${
            project.contrast
              ? "bg-white bg-opacity-50"
              : "bg-black bg-opacity-30"
          }`}
        >
          <p
            className={`text-xl text-left ${
              project.contrast ? "text-black" : "text-white"
            } drop-shadow-lg shadow-black font-light`}
          >
            {project.type}
          </p>
          <div className="flex flex-row">
            {project.technologies.map((technology: any, i: any) => (
              <span
                key={i}
                className={`${i === 0 ? "ml-0" : "ml-2"} ${
                  project.contrast ? "text-zinc-800" : "text-gray-300"
                }`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[80%] mt-12 gap-6">
          {project.images.map((image: any, i: any) => (
            <Image
              key={i}
              src={image}
              width={1024}
              height={1024}
              alt=""
              style={{ boxShadow: "0px 0px 16px black" }}
              className=""
              onClick={() => setOpenedImage(true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

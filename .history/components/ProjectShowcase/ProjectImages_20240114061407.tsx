import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ProjectImages({ project }: { project: any }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="relative h-max">
        <div className="absolute top-1/2 -translate-y-1/2 h-max w-full px-4 lg:px-8 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentImage(
                currentImage < project.images.length ? currentImage - 1 : 0
              )
            }
            className=""
          >
            <SlArrowLeft className="text-white w-8 h-8" />
          </button>
          <button
            onClick={() =>
              setCurrentImage(
                currentImage < project.images.length - 1 ? currentImage + 1 : 0
              )
            }
            className=""
          >
            <SlArrowRight className="text-white w-8 h-8" />
          </button>
        </div>
        <div className="h-max flex flex-row space-x-2 lg:space-x-4 bottom-3 left-1/2 -translate-x-1/2 absolute bg-black bg-opacity-60 p-1.5">
          {project.colors.map((color: any, i: number) => (
            <li key={i} className="flex flex-row items-center">
              <div
                style={{ background: `${color}` }}
                className={`lg:h-8 h-7 lg:w-8 w-7 mr-2`}
              ></div>
              <span className="not-italic text-white">{color}</span>
            </li>
          ))}
        </div>

        <Image
          style={{ boxShadow: "0px 0px 6px black" }}
          src={project.images[currentImage]}
          width={512}
          height={512}
          alt=""
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}

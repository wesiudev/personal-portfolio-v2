import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ProjectImages({ images }: { images: any }) {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="relative h-max">
        <div className="absolute left-4 lg:left-8 top-3 bg-black bg-opacity-50 text-white px-1.5 rounded-md text-sm">
          {currentImage + 1 + "/" + images.length}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 h-max w-full px-4 lg:px-8 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentImage(
                currentImage < images.length && currentImage > 0
                  ? currentImage - 1
                  : images.length - 1
              )
            }
            className="bg-black bg-opacity-50 rounded-full p-3"
          >
            <SlArrowLeft className="text-white w-8 h-8" />
          </button>
          <button
            onClick={() =>
              setCurrentImage(
                currentImage < images.length - 1 ? currentImage + 1 : 0
              )
            }
            className="bg-black bg-opacity-50 rounded-full p-3"
          >
            <SlArrowRight className="text-white w-8 h-8" />
          </button>
        </div>

        <Image
          style={{ boxShadow: "0px 0px 6px black" }}
          src={images[currentImage]}
          width={512}
          height={512}
          alt=""
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}

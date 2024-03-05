import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function ProjectImages({ images }: { images: any }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageCollectionOpen, setImageCollectionOpen] = useState(false);
  return (
    <>
      <div className={`${isImageCollectionOpen ? "block" : "hidden"}`}></div>
      <div
        onClick={() => setImageCollectionOpen(!isImageCollectionOpen)}
        className={`flex flex-col ${
          isImageCollectionOpen
            ? "fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-90 w-[150vw] sm:rotate-0 sm:w-auto sm:h-[100%] z-[2000] sm:items-center sm:justify-center"
            : ""
        } duration-500 sm:duration-0`}
      >
        <div className="relative h-max">
          <div className="relative w-full min-h-full group">
            <div className="z-50 absolute left-4 lg:left-8 top-3 bg-black bg-opacity-50 text-white px-1.5 rounded-md text-sm">
              {currentImage + 1 + "/" + images.length}
            </div>
            <div className="group-hover:opacity-100 opacity-0 duration-300 z-50 absolute top-1/2 -translate-y-1/2 h-max w-full px-4 lg:px-8 flex justify-between items-center">
              <button
                onClick={(e: any) => {
                  setCurrentImage(
                    currentImage < images.length && currentImage > 0
                      ? currentImage - 1
                      : images.length - 1
                  );
                  e.stopPropagation();
                }}
                className="bg-black bg-opacity-50 rounded-full p-3"
              >
                <SlArrowLeft className="text-white w-8 h-8" />
              </button>
              <button
                onClick={(e: any) => {
                  setCurrentImage(
                    currentImage < images.length - 1 ? currentImage + 1 : 0
                  );
                  e.stopPropagation();
                }}
                className="bg-black bg-opacity-50 rounded-full p-3"
              >
                <SlArrowRight className="text-white w-8 h-8" />
              </button>
            </div>
            {images.map((image: any, i: any) => (
              <Image
                key={i}
                style={{ boxShadow: "0px 0px 6px black" }}
                src={image}
                width={1366}
                height={786}
                alt="PortfolioImage"
                className={`${i === 0 && "relative"} ${
                  currentImage !== 0 && "opacity-0"
                } ${
                  i === currentImage ? "opacity-100" : "opacity-0"
                } duration-200 w-full h-auto rounded-xl absolute left-0 top-0`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

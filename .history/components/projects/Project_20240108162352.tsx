import Image from "next/image";
import Link from "next/link";

export default function Project({
  project,
  setOpenedImages,
  images,
  setSelectedItem,
}: {
  project: any;
  setOpenedImages: Function;
  images: string[];
  setSelectedItem: Function;
}) {
  return (
    <div
      style={{ background: project.bgColor }}
      className={`h-max flex relative p-3 py-12 lg:p-12 !z-0 ${
        project.contrast ? "text-zinc-800" : "text-white"
      }`}
    >
      <div className="flex flex-col">
        <h1
          data-aos="fade"
          className="text-3xl lg:text-6xl text-left drop-shadow-lg shadow-black font-bold"
        >
          {project.name}
        </h1>{" "}
        <div
          data-aos="fade"
          data-aos-delay="100"
          className={`flex flex-col w-[90vw] rounded-xl lg:w-max mt-3 ${
            project.contrast ? "" : ""
          }`}
        >
          <p
            className={`text-left ${
              project.contrast ? "text-zinc-800" : "text-green-500"
            } drop-shadow-lg shadow-black`}
          >
            {project.type}
          </p>
        </div>
        <p
          data-aos="fade"
          data-aos-delay="150"
          className="text-xl text-left drop-shadow-lg shadow-black mt-3 w-[90vw]"
        >
          {project.shortDescription}
        </p>
        <Link
          target="_blank"
          data-aos="fade"
          data-aos-delay="200"
          href={project.link}
          className={`md:w-max text-xl  text-white mt-3 p-3 bg-black ${
            project.contrast
              ? "bg-opacity-70 border-green-600 border-l-4"
              : "bg-opacity-50 border-green-400 border-l-2"
          } `}
        >
          Visit page
        </Link>
        <div className="grid grid-cols-2 xl:grid-cols-3 w-[90vw] lg:w-[80%] mt-4 gap-6">
          {project.images.map((image: any, i: any) => (
            <Image
              key={i}
              src={image}
              width={1024}
              height={1024}
              alt=""
              style={{ boxShadow: "0px 0px 12px black" }}
              className="cursor-pointer w-full"
              onClick={() => {
                setOpenedImages(project.images), setSelectedItem(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

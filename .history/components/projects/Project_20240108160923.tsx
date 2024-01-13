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
      className={`min-h-screen flex relative p-6 py-12 lg:p-12 !z-0 ${
        project.contrast ? "text-zinc-800" : "text-white"
      }`}
    >
      <div className="flex flex-col">
        <h1
          data-aos="fade-right"
          className="text-3xl lg:text-6xl text-left drop-shadow-lg shadow-black font-bold"
        >
          {project.name}
        </h1>

        <p
          data-aos="fade"
          data-aos-delay="300"
          className="text-xl text-left drop-shadow-lg shadow-black mt-6 w-[90vw]"
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
          className={`flex flex-col w-[90vw] rounded-xl px-3 p-2 lg:w-max mt-3 ${
            project.contrast
              ? "bg-white bg-opacity-50"
              : "bg-black bg-opacity-30"
          }`}
        >
          <p
            className={`text-left ${
              project.contrast ? "text-zinc-800" : "text-white"
            } drop-shadow-lg shadow-black mb-2 text-2xl`}
          >
            {project.type}
          </p>
          <div className="-ml-2 flex flex-row flex-wrap space-x-2">
            {project.technologies.map((technology: any, i: any) => (
              <span
                key={i}
                className={`${i === 0 && "ml-2"} ${
                  project.contrast ? "text-zinc-800" : "text-gray-300"
                }`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 w-[90vw] lg:w-[80%] mt-12 gap-6">
          {project.images.map((image: any, i: any) => (
            <Image
              key={i}
              src={image}
              width={1024}
              height={1024}
              alt=""
              style={{ boxShadow: "0px 0px 16px black" }}
              className="cursor-pointer w-full rounded-xl"
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

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ProjectImages from "./ProjectImages";

export default function AdminPanel() {
  return (
    <div className="relative h-max py-3 lg:py-24 my-12 lg:my-0 flex items-center duration-75 px-6 lg:px-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 h-max">
        <ProjectImages
          images={[
            "/images/projects/webadmin/login.webp",
            "/images/projects/webadmin/add-service.webp",
            "/images/projects/webadmin/edit-post.webp",
            "/images/projects/webadmin/add-service.webp",
            "/images/projects/webadmin/add-service.webp",
          ]}
        />
        <div
          className="italic mt-4 lg:mt-0 text-white bg-slate-800 bg-opacity-70 overflow-hidden rounded-xl min-h-full"
          style={{
            boxShadow: "0px 0px 6px black",
          }}
        >
          <h2 className="bg-yellow-300 w-full p-2 text-center mx-auto lg:mx-0 text-black font-sans font-bold text-2xl lg:text-3xl xl:text-5xl drop-shadow-md shadow-black px-1">
            Admin Panel
          </h2>
          <div className="p-3">
            <p className="text-gray-400 my-2 not-italic">
              Simple SEO Friendly CMS System
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl not-italic">
              As part of facilitating my clients in using the websites they
              purchased from me, I have created a simple Content Management
              System (CMS) that will help them build a blog (optimized to the
              latest SEO standards), efficiently manage their store and orders,
              validate and manage reservations for their services.
            </p>

            <div className="mt-3 flex flex-row items-center space-x-4 not-italic">
              <Link
                title={`Source code of Admin Panel`}
                target="_blank"
                href=""
                className="flex flex-row items-center"
              >
                <FaGithub className="mr-2 h-7 w-7" /> Example code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

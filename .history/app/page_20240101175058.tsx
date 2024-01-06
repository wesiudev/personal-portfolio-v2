import Image from "next/image";
import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
import NavRight from "./components/navRight";
import Projects from "./components/projects";
export default async function IndexPage() {
  return (
    <div className="relative h-[200vh]">
      <div className="fixed left-12 top-12 z-[250] flex flex-row items-center justify-center">
        <Image
          src="/favicon.png"
          width={1024}
          height={1024}
          alt=""
          className="h-12 w-12"
        />
        <h2 className="ml-3 italic font-bold text-xl text-zinc-700 drop-shadow-md shadow-black">
          wesiu.{" "}
          <span className="underline underline-offset-2 text-purple-600">
            dev
          </span>
        </h2>
      </div>
      <div className="h-[100vh] overflow-hidden">
        <Hero />
      </div>
      <NavLeft />
      <NavRight />
      <div className="h-[100vh] overflow-hidden">
        <Projects />
      </div>
    </div>
  );
}

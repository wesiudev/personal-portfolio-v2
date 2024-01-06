"use client";
import Image from "next/image";
import Hero from "./components/hero";
import NavLeft from "./components/navLeft";
import NavRight from "./components/navRight";
import Projects from "./components/projects";
import { useState } from "react";
import AOS from "aos";
import "aos@2.3.4/dist/aos.css";
export default async function IndexPage() {
  const [isAboutMeOpen, setAboutMeOpen] = useState(false);
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
          wesiu.
          <span className="underline underline-offset-2 text-purple-600">
            dev
          </span>
        </h2>
      </div>
      <div className="h-[100vh] overflow-hidden">
        <Hero />
      </div>
      <NavLeft />
      <NavRight setAboutMeOpen={setAboutMeOpen} />
      <div className="h-[100vh] overflow-hidden">
        <Projects />
      </div>
    </div>
  );
}

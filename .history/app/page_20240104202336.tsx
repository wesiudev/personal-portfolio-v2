"use client";
import Hero from "../components/hero";
import NavLeft from "../components/navLeft";
import NavRight from "../components/navRight";
import Projects from "../components/projects";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default async function IndexPage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className="relative h-max">
      <div className="fixed left-6 lg:left-12 top-12 z-[250] flex flex-row items-center justify-center">
        <h2 className="ml-3 italic font-bold text-2xl text-white drop-shadow-md shadow-black">
          wesiu.
          <span className="underline underline-offset-2 text-purple-600">
            dev
          </span>
        </h2>
      </div>

      <Hero />
      <NavLeft />
      <NavRight />
      <Projects />
    </div>
  );
}

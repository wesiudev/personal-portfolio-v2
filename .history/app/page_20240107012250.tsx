"use client";
import Hero from "../components/Hero";

import { NavLeft, NavRight } from "../components/Navigation";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../components/AboutMe";

export default async function IndexPage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className="relative h-max">
      <div className="absolute left-6 lg:left-12 top-12 z-[250] flex flex-row items-center justify-center">
        <h2 className="italic font-bold text-2xl text-white drop-shadow-md shadow-black">
          wesiu.
          <span className=" text-green-600">dev</span>
        </h2>
      </div>
      <Hero />
      <NavLeft />
      <NavRight />
      <Projects />
      <AboutMe />
    </div>
  );
}

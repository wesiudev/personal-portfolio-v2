"use client";
import Hero from "../components/Hero";

import { NavLeft, NavRight } from "../components/Navigation";
import Projects from "../components/Projects";
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
        <h2
          className="ml-3 italic font-bold text-2xl text-white drop-shadow-md shadow-black"
          style={{ letterSpacing: "1px" }}
        >
          wesiu.
          <span className="underline underline-offset-4 text-blue-600">
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

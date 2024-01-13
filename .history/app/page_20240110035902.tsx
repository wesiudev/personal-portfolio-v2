"use client";
import { NavLeft, NavRight } from "../components/Navigation";
import Projects from "../components/Projects";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../components/AboutMe";
import GraphicsPortfolio from "../components/GraphicsPortfolio";
import { motion, useScroll, useTransform } from "framer-motion";

export default async function IndexPage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });
  const background = useTransform(scrollYProgress, (pos) =>
    pos >= 0.5 ? "rgb(0,0,0)" : ""
  );
  return (
    <motion.div
      ref={mainWrapper}
      style={{ background }}
      className="relative h-max duration-300"
    >
      <div className="fixed left-6 lg:left-12 top-12 z-[250] flex flex-row items-center justify-center">
        <h2 className="italic font-bold text-2xl text-white drop-shadow-md shadow-black">
          wesiu.
          <span className=" text-yellow-500">dev</span>
        </h2>
      </div>
      <div className="relative h-screen w-screen">
        <div className="z-[0] fixed left-0 top-0 bg-gradient-to-br from-blue-500 via-green-300 to-blue-500 background-animate delay-1000 h-full w-full"></div>
      </div>
      <NavLeft />
      <NavRight />
      <GraphicsPortfolio />
      {/* <Projects /> */}
      {/* <AboutMe /> */}
    </motion.div>
  );
}

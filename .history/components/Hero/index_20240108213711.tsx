"use client";
import { Parallax } from "react-parallax";
import TextSwitcher from "../TextSwitcher";
import { HomeTitle } from "../HomeTitle";

export default function Hero() {
  return (
    <main className=" h-full flex flex-col justify-between relative w-full px-3 lg:px-0 lg:w-3/4 mx-auto min-h-screen ">
      <div className="fixed left-0 top-0 bg-gradient-to-br from-blue-500 via-yellow-300 to-blue-500 background-animate delay-1000 h-full w-full"></div>
    </main>
  );
}

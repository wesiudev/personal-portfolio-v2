"use client";
import { Parallax } from "react-parallax";
import TextSwitcher from "../TextSwitcher";
import { HomeTitle } from "../HomeTitle";

export default function Hero() {
  return (
    <Parallax
      blur={8}
      bgImage="/images/heroImage.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <main className="bg-cover h-full flex flex-col justify-between relative w-full px-3 lg:px-0 lg:w-3/4 mx-auto min-h-screen ">
        <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] h-max sm:w-max duration-200 z-50 flex justify-center items-center text-center sm:text-left text-xl font-bold sm:text-2xl lg:text-3xl">
          <TextSwitcher />
        </div>

        <HomeTitle />
      </main>
    </Parallax>
  );
}

import Link from "next/link";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import { motion } from "framer-motion-3d";
type motion = MotionValue<number>;
export default function ProjectShowcase() {
  const menuOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= 0.9 && pos <= 1 ? 1 : 0
  );
  const aos = useTransform(scrollYProgress, (pos) =>
    pos >= 0.9 ? "fade-up" : ""
  );
  return (
    <>
      <motionDiv.div
        style={{ opacity: menuOpacity }}
        className={`duration-300 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[503]`}
      >
        <Link
          data-aos={aos}
          href="#"
          className="font-sans font-bold italic text-4xl bg-yellow-300 select-none"
        >
          Projects Showcase
        </Link>
      </motionDiv.div>
      <div className="h-[1000vh] w-screen relative mt-[700vh]">
        <div className="z-[502] sticky top-0 h-screen ">SIEMA</div>
      </div>
    </>
  );
}

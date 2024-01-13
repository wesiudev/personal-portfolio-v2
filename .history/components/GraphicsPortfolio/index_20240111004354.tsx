"use client";
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
import Link from "next/link";
import ProjectShowcase from "../ProjectShowcase";
type motion = MotionValue<number>;

interface ModelProps {
  gltfPath: string;
  rotateX: motion;
  rotateY: motion;
  rotateZ: motion;
  donutPosX: motion;
  donutPosY: motion;
  donutPosZ: motion;
  scale: motion;
}

const FlyingDonut: React.FC<ModelProps> = ({
  donutPosX,
  donutPosY,
  donutPosZ,
  rotateX,
  rotateY,
  rotateZ,
  gltfPath,
  scale,
}) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return (
    <motion.primitive
      object={gltf.scene}
      scale={scale}
      rotation-x={rotateX}
      duration={300}
      position={[donutPosX, donutPosY, donutPosZ]}
    />
  );
};
const HeroDonut = ({
  gltfPath,
  donut2PosX,
  donut2PosY,
  donut2PosZ,
}: {
  gltfPath: string;
  donut2PosX: motion;
  donut2PosY: motion;
  donut2PosZ: motion;
}) => {
  const gltf = useLoader(GLTFLoader, gltfPath);
  const mesh = useRef<any>();
  useFrame(() => (mesh.current.rotation.y += 0.002));
  return (
    <motion.primitive
      ref={mesh}
      object={gltf.scene}
      scale={2}
      rotation-x={0.2}
      position={[donut2PosX, donut2PosY, donut2PosZ]}
    />
  );
};

const GraphicsPortfolio: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState();
  const gltfPath = "/untitled2.glb"; // Replace with the actual path to your GLB model
  const gltfPath2 = "/untitled.glb"; // Replace with the actual path to your GLB model
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 2, 25]);
  const rotateX = useTransform(scrollYProgress, [0.1, 0.7, 1], [0, 8.5, 9.3]);
  const rotateY = useTransform(scrollYProgress, [0.4, 0.6], [0, 3]);
  const rotateZ = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 3, 6]);
  const donutPosX = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const donutPosY = useTransform(scrollYProgress, [0.1, 0.7, 1], [1, 0, -8]);
  const donutPosZ = useTransform(scrollYProgress, [0.1, 0.5], [1, 2.8]);

  const donut2PosX = useTransform(scrollYProgress, [0.1, 0.3], [0, 0]);
  const donut2PosY = useTransform(scrollYProgress, [0.1, 0.6], [-1, -5]);
  const donut2PosZ = useTransform(scrollYProgress, [0.1, 0.6], [0, 2]);

  const h1TextOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    [0, 1, 0]
  );
  const h2TextOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 1, 0]
  );
  const h4TextOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.9],
    [0, 1, 0]
  );
  const h1TextTranslateX = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4],
    ["5vw", "10vw", "15vw"]
  );
  const h2TextTranslateX = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    ["5vw", "10vw", "15vw"]
  );
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4],
    ["-4vw", "0vw", "4vw"]
  );
  const h2TextTranslateY = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    ["4vw", "0vw", "-4vw"]
  );
  const h4TextTranslateY = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.9],
    ["4vw", "0vw", "-4vw"]
  );
  //children values
  const menuOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= 0.9 && pos <= 1 ? 1 : 0
  );

  return (
    <>
      <ProjectShowcase menuOpacity={menuOpacity} />
      <motionDiv.div
        className="absolute left-0 top-0 h-[700vh] w-screen"
        ref={mainWrapper}
      ></motionDiv.div>
      <motionDiv.h1
        style={{
          opacity: h1TextOpacity,
          translateX: h1TextTranslateX,
          translateY: h1TextTranslateY,
        }}
        className="font-bold text-5xl lg:text-8xl bottom-36 left-0 fixed z-[500] font-sans"
      >
        <span className="bg-yellow-300 select-none">Hi, I'm wesiudev</span>
      </motionDiv.h1>
      <motionDiv.h1
        style={{
          opacity: h2TextOpacity,
          translateX: h2TextTranslateX,
          translateY: h2TextTranslateY,
        }}
        className="font-bold text-5xl lg:text-8xl top-36 left-[-30px] sm:left-0 fixed z-[500] font-sans"
      >
        <span className="bg-yellow-300 select-none">
          Creative Front-end Developer
        </span>
      </motionDiv.h1>
      <motionDiv.h1
        style={{
          opacity: h4TextOpacity,
          translateY: h4TextTranslateY,
          translateX: "-50%",
        }}
        className="font-bold text-3xl lg:text-5xl bottom-36 text-center w-[90%] md:w-[70%] lg:w-[60%] left-1/2 fixed z-[500] font-sans"
      >
        <span className="bg-yellow-300 select-none leading-[1.2]">
          I have expertise in JavaScript programming and a desire to learn 3D
          graphics.
        </span>
      </motionDiv.h1>
      <Canvas
        style={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0px",
          height: "100vh",
          width: "100vw",
        }}
      >
        <ambientLight />
        <pointLight position={[5, -3, -5]} />
        <Suspense fallback={<>Loading</>}>
          <FlyingDonut
            scale={scale}
            donutPosX={donutPosX}
            donutPosY={donutPosY}
            donutPosZ={donutPosZ}
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
            gltfPath={gltfPath}
          />
        </Suspense>
        <HeroDonut
          donut2PosX={donut2PosX}
          donut2PosY={donut2PosY}
          donut2PosZ={donut2PosZ}
          gltfPath={gltfPath2}
        />
      </Canvas>
    </>
  );
};

export default GraphicsPortfolio;

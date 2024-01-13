"use client";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";
import { motion } from "framer-motion-3d";
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

const ModelComponent: React.FC<ModelProps> = ({
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
      position={[0, donutPosY, donutPosZ]}
    />
  );
};
const GraphicsPortfolio: React.FC = () => {
  const gltfPath = "/untitled.glb"; // Replace with the actual path to your GLB model
  const gltfPath2 = "/untitled2.glb"; // Replace with the actual path to your GLB model
  const mainWrapper = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start end", "end end"],
  });

  const color = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["rgb(123,123,123)", "rgb(0,0,0)"]
  );
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 1], [0, 2, 30]);
  const rotateX = useTransform(scrollYProgress, [0.1, 0.6, 1], [0, 5, 5.3]);
  const rotateY = useTransform(scrollYProgress, [0.4, 0.6], [0, 3]);
  const rotateZ = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 3, 6]);
  const donutPosX = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const donutPosY = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  const donutPosZ = useTransform(scrollYProgress, [0.1, 0.5], [1, 3]);

  const scale2 = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 2, 40]);
  const rotateX2 = useTransform(scrollYProgress, [0.1, 0.6, 1], [0, 5, 5.3]);
  const rotateY2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 3]);
  const rotateZ2 = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 3, 6]);
  const donutPosX2 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const donutPosY2 = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  const donutPosZ2 = useTransform(scrollYProgress, [0.1, 0.5], [1, 6]);

const bgColor = 

  const h1TextOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.5],
    [0, 1, 0]
  );
  const h2TextOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8],
    [0, 1, 0]
  );
  const h1TextTranslateX = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4],
    ["5vw", "10vw", "15vw"]
  );
  const h2TextTranslateX = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.8],
    ["5vw", "10vw", "15vw"]
  );
  const h1TextTranslateY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4],
    ["-4vw", "0vw", "4vw"]
  );
  const h2TextTranslateY = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.8],
    ["4vw", "0vw", "-4vw"]
  );

  return (
    <>
      <motionDiv.div
        style={{ color }}
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
        Hi, I'm wesiudev,
      </motionDiv.h1>
      <motionDiv.h1
        style={{
          opacity: h2TextOpacity,
          translateX: h2TextTranslateX,
          translateY: h2TextTranslateY,
        }}
        className="font-bold text-5xl lg:text-8xl top-36 left-0 fixed z-[500] font-sans"
      >
        I'm a Front-end Developer
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
          <ModelComponent
            scale={scale}
            donutPosX={donutPosX}
            donutPosY={donutPosY}
            donutPosZ={donutPosZ}
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
            gltfPath={gltfPath}
          />
          <ModelComponent
            scale={scale2}
            donutPosX={rotateX2}
            donutPosY={rotateY2}
            donutPosZ={rotateZ2}
            rotateX={donutPosX2}
            rotateY={donutPosY2}
            rotateZ={donutPosZ2}
            gltfPath={gltfPath2}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default GraphicsPortfolio;

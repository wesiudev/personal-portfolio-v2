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
interface ModelProps {
  gltfPath: string;
  rotateX?: MotionValue<number>;
  rotateY?: MotionValue<number>;
}

const ModelComponent: React.FC<ModelProps> = ({
  rotateX,
  rotateY,
  gltfPath,
}) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return (
    <motion.primitive
      object={gltf.scene}
      scale={1}
      rotation-z={rotateY}
      rotation-x={rotateX}
      duration={300}
      position={[0, 1, 1]}
    />
  );
};

const GraphicsPortfolio: React.FC = () => {
  const gltfPath = "/untitled.glb"; // Replace with the actual path to your GLB model
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
  const rotateX = useTransform(scrollYProgress, [0.2, 0.3], [0, 1.3]);
  const rotateY = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const h1TextOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const h1TextPosition = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["relative", "sticky"]
  );

  return (
    <>
      <div
        className="absolute left-0 top-0 h-[500vh] w-screen"
        ref={mainWrapper}
      ></div>
      <motionDiv.h1
        style={{
          opacity: h1TextOpacity,
          position: h1TextPosition,
        }}
        className="text-8xl top-0 z-[500]"
      >
        I Create 3D Graphics
      </motionDiv.h1>
      <Canvas
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          background: `${color}`,
          height: "100vh",
          width: "100vw",
        }}
      >
        <ambientLight />
        <pointLight position={[5, -3, -5]} />
        <Suspense fallback={<>Loading</>}>
          <ModelComponent
            rotateX={rotateX}
            rotateY={rotateY}
            gltfPath={gltfPath}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default GraphicsPortfolio;

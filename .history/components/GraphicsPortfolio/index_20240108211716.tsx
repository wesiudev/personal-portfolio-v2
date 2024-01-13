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
  rotate?: MotionValue<number>;
}

const ModelComponent: React.FC<ModelProps> = ({ rotate, gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return (
    <motion.primitive
      object={gltf.scene}
      scale={1}
      rotation-x={rotate}
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
  const rotate = useTransform(scrollYProgress, [0.2, 0.5], [0, 4.5]);
  const h1TextY = useTransform(scrollYProgress, [0.1, 0.6], ["-150%", "0%"]);
  const h1TextOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const h1TextPosition = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["relative", "fixed"]
  );

  return (
    <>
      <motionDiv.h1
        style={{
          opacity: h1TextOpacity,
          translateY: h1TextY,
          position: h1TextPosition,
        }}
        className="text-8xl"
      >
        I Create 3D Graphics
      </motionDiv.h1>
      <Canvas
        ref={mainWrapper}
        style={{ background: `${color}`, height: "500vh", width: "100vw" }}
      >
        <ambientLight />
        <pointLight position={[5, -3, -5]} />
        <Suspense fallback={<>Loading</>}>
          <ModelComponent rotate={rotate} gltfPath={gltfPath} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default GraphicsPortfolio;

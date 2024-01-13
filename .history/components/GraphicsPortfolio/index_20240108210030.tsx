"use client";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
interface ModelProps {
  gltfPath: string;
  scale?: MotionValue<number>;
}

const ModelComponent: React.FC<ModelProps> = ({ scale, gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return (
    <motion.primitive
      style={{ scale }}
      object={gltf.scene}
      scale={scale}
      rotation-x={scale}
      rotation-y={scale}
      position={[-3, -3, -3]}
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
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, -3]);

  return (
    <Canvas
      ref={mainWrapper}
      style={{ background: `${color}`, height: "500vh", width: "100vw" }}
    >
      <ambientLight />
      <pointLight position={[5, -3, -5]} />
      <Suspense fallback={<>Loading</>}>
        <ModelComponent scale={scale} gltfPath={gltfPath} />
      </Suspense>
    </Canvas>
  );
};

export default GraphicsPortfolio;

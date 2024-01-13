"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { useTransform } from "framer-motion";

interface ModelProps {
  gltfPath: string;
  scale?: number;
}

const ModelComponent: React.FC<ModelProps> = ({ scale, gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return <primitive object={gltf.scene} scale={[scale, scale, scale]} />;
};

const GraphicsPortfolio: React.FC = () => {
  const gltfPath = "/untitled.glb"; // Replace with the actual path to your GLB model
  const color = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["rgb(161 161 170)", "rgb(63 63 70)"]
  );
  return (
    <Canvas style={{ height: "200vh", width: "100vw" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <ModelComponent scale={scale} gltfPath={gltfPath} />
      </Suspense>
    </Canvas>
  );
};

export default GraphicsPortfolio;

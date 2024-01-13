"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

interface ModelProps {
  gltfPath: string;
}

const ModelComponent: React.FC<ModelProps> = ({ gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return <primitive object={gltf.scene} />;
};

const GraphicsPortfolio: React.FC = () => {
  const gltfPath = "/untitled.glb"; // Replace with the actual path to your GLB model

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <ModelComponent gltfPath={gltfPath} />
      </Suspense>
    </Canvas>
  );
};

export default GraphicsPortfolio;

"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { MotionValue, useScroll, useTransform } from "framer-motion";

interface ModelProps {
  gltfPath: string;
  scale?: MotionValue<number>;
}

const ModelComponent: React.FC<ModelProps> = ({ scale, gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);
  console.log(scale);

  return (
    <primitive
      object={gltf.scene}
      scale={[scale?.get() || 1, scale?.get() || 1, scale?.get() || 1]}
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

  const scale = useTransform(scrollYProgress, [0.2, 1], [0.2, 3]);

  return (
    <Canvas ref={mainWrapper} style={{ height: "200vh", width: "100vw" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <ModelComponent scale={scale} gltfPath={gltfPath} />
      </Suspense>
    </Canvas>
  );
};

export default GraphicsPortfolio;

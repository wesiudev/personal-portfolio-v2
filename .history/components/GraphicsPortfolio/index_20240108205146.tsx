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

  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 3]);

  return (
    <motion.div>
      <Canvas ref={mainWrapper} style={{ height: "200vh", width: "100vw" }}>
        <ambientLight />
        <pointLight position={[5, -3, -5]} />
        <Suspense fallback={<>Loading</>}>
          <ModelComponent scale={scale} gltfPath={gltfPath} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default GraphicsPortfolio;

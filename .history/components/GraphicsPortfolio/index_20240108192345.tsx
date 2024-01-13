import React from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltfPath = "path/to/your_model.glb"; // Replace with the actual path to your GLB model

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <ModelComponent gltfPath={gltfPath} />
      </Suspense>
    </Canvas>
  );
};

const ModelComponent = ({ gltfPath }) => {
  const gltf = useLoader(GLTFLoader, gltfPath);

  return <primitive object={gltf.scene} />;
};

export default Model;

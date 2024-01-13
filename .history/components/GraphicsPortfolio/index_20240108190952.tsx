import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface ThreeSceneProps {}

const GraphicsPortfolio: React.FC<ThreeSceneProps> = () => {
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );
  const rendererRef = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer());

  useEffect(() => {
    // Set up camera (non-movable)
    cameraRef.current.position.set(0, 0, 5);

    // Set up renderer
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    // Load GTB file (Replace 'your_model.gltf' with the actual file path)
    const loader = new GLTFLoader();
    loader.load("path/to/your_model.gltf", (gltf: any) => {
      // Adjust the position, rotation, and scale of the loaded model as needed
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.rotation.set(0, 0, 0);
      gltf.scene.scale.set(1, 1, 1);

      sceneRef.current.add(gltf.scene);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Add any animations or updates here

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    // Resize handler
    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    // Event listeners
    window.addEventListener("resize", handleResize);

    // Start the animation loop
    animate();

    return () => {
      // Clean up resources on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run the effect only once when the component mounts

  return <div />;
};

export default GraphicsPortfolio;

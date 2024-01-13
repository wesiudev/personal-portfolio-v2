import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export default function StarsBg() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        left: "0",
        top: "0",
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <Stars />
    </Canvas>
  );
}

function Stars(props: any) {
  const ref = useRef<any>();
  const [spheres] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 5 })
  );

  // Convert the flat array to an array of vectors
  const points = new Array(spheres.length / 3)
    .fill(0)
    .map((_, index) => [
      spheres[index * 3],
      spheres[index * 3 + 1],
      spheres[index * 3 + 2],
    ]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 35;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} position={points} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.009}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

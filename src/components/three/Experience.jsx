import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Lights } from "./Lights";
import { Shadows } from "./Shadows";
import { GridDotted } from "./GridDotted";
import { IsometricCamera } from "./IsometricCamera";
import { useControls } from "leva";
import { BakeShadows } from "@react-three/drei";

import { Effects } from "./Effects";

export function Experience() {
  const { position } = useControls("canva", {
    position: {
      value: { x: 400, y: 600, z: 400 },
      step: 10,
    },
  });

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        shadows
        orthographic
        camera={{
          position: [position.x, position.y, position.z],
          fov: 50,
          zoom: 10,
        }}
      >
        <color attach="background" args={["#FCFDFC"]} />
        {/* <Effects /> */}

        <GridDotted />
        <Scene />
        <Lights />
        <BakeShadows />
        <Shadows />

        <IsometricCamera />
      </Canvas>
    </div>
  );
}

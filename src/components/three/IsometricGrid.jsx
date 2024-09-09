import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  ContactShadows,
  OrthographicCamera,
  SoftShadows,
} from "@react-three/drei";
import { Scene } from "./Scene";
import { GridCustom } from "./GridCustom";
import { Cubes } from "./Cubes";
import { Lights } from "./Lights";
import { Shadows } from "./Shadows";

export function IsometricGrid() {
  // Trimetric 01
  // const cameraDistance = 15;
  // const angle1 = Math.PI / 5.5; // Approximately 36 degrees
  // const angle2 = Math.PI / 4; // 45 degrees
  // const x = cameraDistance * Math.cos(angle1) * Math.cos(angle2);
  // const y = cameraDistance * Math.sin(angle1);
  // const z = cameraDistance * Math.cos(angle1) * Math.sin(angle2);

  // Trimetric 02
  // Calculate camera position for trimetric projection
  // const cameraDistance = 15;
  // const angle1 = Math.PI / 5.5; // Approximately 36 degrees
  // const angle2 = Math.PI / 4; // 45 degrees
  // const x = cameraDistance * Math.cos(angle1) * Math.cos(angle2);
  // const y = cameraDistance * Math.sin(angle1);
  // const z = cameraDistance * Math.cos(angle1) * Math.sin(angle2);

  // Diametric 01
  // const cameraDistance = 20;
  // const angle1 = Math.PI / 6; // 30 degrees (vertical angle)
  // const angle2 = Math.atan(3.5); // Approximately 26.57 degrees (horizontal angle)
  // const x = cameraDistance * Math.cos(angle1) * Math.cos(-angle1);
  // const y = cameraDistance * Math.sin(angle1);
  // const z = cameraDistance * Math.cos(angle1) * Math.sin(-angle1);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas shadows>
        <Scene>
          <OrthographicCamera
            left={window.innerWidth / -2}
            top={window.innerHeight * 0.5}
            bottom={window.innerHeight * -0.5}
            makeDefault
            zoom={100}
            // zoom={40}
            position={[25, 25, 25]}
            // position={[x, y, z]}
            near={0.01}
            far={1000}
          />
          <GridCustom />
          <Cubes />
          <Lights />
          <Shadows />
          {/* <SoftShadows /> */}
          {/* <ContactShadows
            opacity={1}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          /> */}
          {/* <AccumulativeShadows temporal frames={100} scale={100} /> */}
        </Scene>
      </Canvas>
    </div>
  );
}

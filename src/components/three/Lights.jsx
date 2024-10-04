import { SoftShadows, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

// const helper = new THREE.DirectionalLightHelper( light, 5 );

export function Lights() {
  const lightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper);
  const shadowSizeMargin = 1200;
  const shadowMapSizeFactor = 8;
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={lightRef}
        position={[-40, 60, 40]}
        intensity={5}
        castShadow
        shadow-mapSize={[
          1024 * shadowMapSizeFactor,
          1024 * shadowMapSizeFactor,
        ]}
        shadow-camera-right={shadowSizeMargin}
        shadow-camera-left={-shadowSizeMargin}
        shadow-camera-top={shadowSizeMargin}
        shadow-camera-bottom={-shadowSizeMargin}
      ></directionalLight>
      {/* <SoftShadows /> */}
    </>
  );
}

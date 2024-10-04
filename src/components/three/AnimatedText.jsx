import { Text3D, useMatcapTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

import { useFrame } from "@react-three/fiber";

import useAnimationStore from "../../store/animationStore";
import { useState } from "react";

export const AnimatedText = () => {
  const [opacity, setOpacity] = useState(0);
  const [matcapTexture] = useMatcapTexture("728473_534C40_7BCEC8_7BB9B6", 256);
  const { isBouncing, setIsBouncing } = useAnimationStore();

  const { scale, position } = useSpring({
    scale: isBouncing ? [1.05, 1.05, 1.05] : [1, 1, 1],
    position: isBouncing ? [0, 0.25, 0] : [0, 0, 0],
    config: { tension: 200, friction: 10 },
    onRest: () => setIsBouncing(false),
  });

  const handleSphereClick = () => {
    setIsBouncing(true);
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    setOpacity(Math.abs(Math.sin(t * 0.5)));
  });

  const textConfig = {
    // position: [0, 0, 0],
    curveSegments: 12,
    bevelEnabled: true,
    bevelSize: 0.01,
    bevelThickness: 0.1,
    height: 0.01,
    lineHeight: 0.5,
    letterSpacing: 0.1,
    size: 1,
    font: "/Kanit Black_Regular.json",
    receiveShadow: true,
    castShadow: true,
  };

  return (
    <animated.mesh
      scale={scale}
      onClick={handleSphereClick}
      onPointerOver={handleSphereClick}
      position={position}
    >
      <group
        position={[0.75, 1, 3]}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.25]}
      >
        <Text3D position={position} {...textConfig}>
          Esteban
          {/* <meshStandardMaterial color="#88ccff" transparent opacity={opacity} /> */}
          <meshMatcapMaterial
            matcap={matcapTexture}
            transparent
            opacity={opacity}
          />
        </Text3D>
      </group>
    </animated.mesh>
  );
};

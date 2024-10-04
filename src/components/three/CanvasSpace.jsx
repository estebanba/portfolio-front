import {
  AccumulativeShadows,
  Environment,
  Grid,
  Html,
  OrbitControls,
  PresentationControls,
  RandomizedLight,
  SpotLight,
  Text3D,
  useMatcapTexture,
  useProgress,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import stylesCanvas from "./CanvasSpace.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { CONSTANTS } from "../../utils/constants";
import useAnimationStore from "../../store/animationStore";
import { Suspense, useRef, useState } from "react";

export const CanvasSpace = () => {
  const isMobile = useMediaQuery({ maxWidth: CONSTANTS.mobileWidth });
  const { gridSize, ...gridConfig } = {
    gridSize: [10.5, 10.5],
    cellSize: 1,
    cellThickness: 1,
    cellColor: "lightgray",
    sectionSize: 3,
    sectionThickness: 0,
    sectionColor: "lightgray",
    fadeDistance: 50,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };

  //   const [isBouncing, setIsBouncing] = useState(false);
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

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  return (
    <div id={stylesCanvas.canvasSpace}>
      <Canvas
        shadows
        camera={{ position: isMobile ? [0, 10, 20] : [0, 10, 12], fov: 50 }}
      >
        <Suspense fallback={<Loader />}>
          {/* <PresentationControls
          global // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, 0]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          //   domElement={events.connected} // The DOM element events for this controller will attach to
        > */}
          {/* <PresentationControls
            snap
            global
            zoom={0.8}
            rotation={[0, 0, 0]} // Default rotation
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          > */}
          {/* <OrthographicCamera
          makeDefault
          zoom={1}
          top={10}
          bottom={-10}
          left={10}
          right={-10}
          near={1}
          far={10}
          position={[1, 1, 1]}
        /> */}
          <Grid
            receiveShadow
            position={[0, -0.01, 0]}
            args={gridSize}
            {...gridConfig}
          />
          {/* <Box castShadow receiveShadow position={[-0.75, 0.5, 2]}>
          <meshStandardMaterial color="#d1d1d1" />
        </Box> */}
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
              <AnimatedText text={"PORTFOLIO"} position={[-3.75, 1.75, 0]} />
              <AnimatedText text={"IN PROGRESS"} position={[-4.3, 0.5, 0]} />
            </group>
          </animated.mesh>

          {/* <AnimatedText /> */}

          <OrbitControls
            makeDefault
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 6}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minDistance={10}
            maxDistance={30}
          />
          <Environment preset={"city"} />
          <AccumulativeShadows
            temporal
            frames={100}
            color="white"
            colorBlend={10}
            alphaTest={0.9}
            scale={20}
          >
            <RandomizedLight amount={1} radius={4} position={[5, 5, -10]} />
          </AccumulativeShadows>
          {/* </PresentationControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

function AnimatedText({ text, position }) {
  const textRef = useRef();
  const [opacity, setOpacity] = useState(0);
  const [matcapTexture] = useMatcapTexture("728473_534C40_7BCEC8_7BB9B6", 256);

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
    <group ref={textRef}>
      <Text3D position={position} {...textConfig}>
        {text}
        {/* <meshStandardMaterial color="#88ccff" transparent opacity={opacity} /> */}
        <meshMatcapMaterial
          matcap={matcapTexture}
          transparent
          opacity={opacity}
        />
      </Text3D>
    </group>
  );
}

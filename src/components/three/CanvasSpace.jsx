import {
  AccumulativeShadows,
  Environment,
  Grid,
  PresentationControls,
  RandomizedLight,
  Text3D,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import stylesCanvas from "./CanvasSpace.module.css";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { CONSTANTS } from "../../utils/constants";
import useAnimationStore from "../../store/animationStore";

export const CanvasSpace = () => {
  const isMobile = useMediaQuery({ maxWidth: CONSTANTS.mobileWidth });
  const { gridSize, ...gridConfig } = {
    gridSize: [10.5, 10.5],
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: "lightgray",
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: "lightgray",
    fadeDistance: 25,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };

  const textConfig = {
    // position: [0, 0, 0],
    curveSegments: 32,
    bevelEnabled: true,
    bevelSize: 0.01,
    bevelThickness: 0.1,
    height: 0.05,
    lineHeight: 0.5,
    letterSpacing: 0,
    size: 1,
    font: "/Kanit Black_Regular.json",
    receiveShadow: true,
    castShadow: true,
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

  return (
    <div id={stylesCanvas.canvasSpace}>
      <Canvas
        shadows
        camera={{ position: isMobile ? [10, 7, 10] : [7, 5, 7], fov: 50 }}
      >
        <PresentationControls
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
        >
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
            position={position}
          >
            <Text3D
              position={[-3, 0.5, 0]}
              //   curveSegments={32}
              //   bevelEnabled
              //   bevelSize={0.01}
              //   bevelThickness={0.1}
              //   height={0.05}
              //   lineHeight={0.5}
              //   letterSpacing={0}
              //   size={1}
              //   font={"/Kanit Black_Regular.json"}
              //   receiveShadow
              //   castShadow
              {...textConfig}
            >
              {`updating`}
              <meshStandardMaterial color="#d1d1d1" />
              {/* <meshNormalMaterial /> */}
            </Text3D>
            <Text3D position={[-2.5, 0.5, 2]} {...textConfig}>
              {"portfolio..."}
              <meshStandardMaterial color="#d1d1d1" />
              {/* <meshNormalMaterial /> */}
            </Text3D>
            {/* 
            <animated.mesh position={[0, 0, 0]} opacity={opacity}>
              <Text3D position={[3.85, 0.5, 2]} {...textConfig}>
                {displayedText}
                <meshStandardMaterial color="#d1d1d1" />
              </Text3D>
            </animated.mesh> */}
          </animated.mesh>
          {/* <OrbitControls makeDefault /> */}
          <Environment preset="studio" />
          <AccumulativeShadows
            temporal
            frames={100}
            color="lightgray"
            colorBlend={10}
            alphaTest={0.9}
            scale={20}
          >
            <RandomizedLight amount={10} radius={4} position={[5, 5, -10]} />
          </AccumulativeShadows>
          ;
        </PresentationControls>
      </Canvas>
    </div>
  );
};

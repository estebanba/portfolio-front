// import { Text3D, useMatcapTexture } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { useState } from "react";

// const textConfig = {
//   curveSegments: 12,
//   bevelEnabled: true,
//   bevelSize: 0.01,
//   bevelThickness: 0.1,
//   height: 1,
//   lineHeight: 1,
//   letterSpacing: 0.25,
//   size: 9.5,

//   receiveShadow: true,
//   castShadow: true,
// };

// export const TextTitle3D = ({
//   position,
//   rotation = [-Math.PI * 0.5, 0, Math.PI * 0.5],
//   maxWidth,
//   font,
//   title,
// }) => {
//   const [isHovering, setIsHovering] = useState(false);

//   const { gl } = useThree();

//   const handelPointerEnter = (event) => {
//     event.stopPropagation();
//     setIsHovering(true);
//     gl.domElement.style.cursor = "pointer";
//   };

//   const handlePointerLeave = (event) => {
//     event.stopPropagation();
//     setIsHovering(false);
//     gl.domElement.style.cursor = "default";
//   };

//   const [matcapTextureA] = useMatcapTexture("678E67_C4D9C4_ACC8AC_98B898", 256);
//   const [matcapTextureB] = useMatcapTexture("3B6E10_E3F2C3_88AC2E_99CE51", 256);

//   return (
//     <Text3D
//       position={position}
//       rotation={rotation}
//       maxWidth={maxWidth}
//       font={font}
//       {...textConfig}
//       onPointerEnter={handelPointerEnter}
//       onPointerLeave={handlePointerLeave}
//     >
//       {title}

//       <meshMatcapMaterial
//         matcap={isHovering ? matcapTextureB : matcapTextureA}
//         transparent
//       />
//     </Text3D>
//   );
// };

// ----------------------------------------------------------------

// import { Text3D, useMatcapTexture } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { useState, useEffect, useMemo } from "react";
// import { useSpring, animated } from "@react-spring/three";
// import * as THREE from "three";

// const textConfig = {
//   curveSegments: 12,
//   bevelEnabled: true,
//   bevelSize: 0.01,
//   bevelThickness: 0.1,
//   height: 1,
//   lineHeight: 1,
//   letterSpacing: 0.25,
//   size: 9.5,
//   receiveShadow: true,
//   castShadow: true,
// };

// export const TextTitle3D = ({
//   position,
//   rotation = [-Math.PI * 0.5, 0, Math.PI * 0.5],
//   maxWidth,
//   font,
//   title,
// }) => {
//   const [isHovering, setIsHovering] = useState(false);
//   const { gl } = useThree();

//   const [matcapTextureA] = useMatcapTexture("678E67_C4D9C4_ACC8AC_98B898", 256);
//   const [matcapTextureB] = useMatcapTexture("3B6E10_E3F2C3_88AC2E_99CE51", 256);

//   const handlePointerEnter = (event) => {
//     event.stopPropagation();
//     setIsHovering(true);
//     gl.domElement.style.cursor = "pointer";
//   };

//   const handlePointerLeave = (event) => {
//     event.stopPropagation();
//     setIsHovering(false);
//     gl.domElement.style.cursor = "default";
//   };

//   const { mixFactor } = useSpring({
//     mixFactor: isHovering ? 1 : 0,
//     config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
//   });

//   useEffect(() => {
//     matcapTextureA.needsUpdate = true;
//     matcapTextureB.needsUpdate = true;
//   }, [matcapTextureA, matcapTextureB]);

//   const shaderData = useMemo(
//     () => ({
//       uniforms: {
//         matcapA: { value: matcapTextureA },
//         matcapB: { value: matcapTextureB },
//         mixFactor: { value: 0 },
//       },
//       vertexShader: `
//         varying vec3 vNormal;
//         varying vec3 vViewPosition;

//         void main() {
//           vNormal = normalize(normalMatrix * normal);
//           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//           vViewPosition = -mvPosition.xyz;
//           gl_Position = projectionMatrix * mvPosition;
//         }
//       `,
//       fragmentShader: `
//         uniform sampler2D matcapA;
//         uniform sampler2D matcapB;
//         uniform float mixFactor;

//         varying vec3 vNormal;
//         varying vec3 vViewPosition;

//         void main() {
//           vec3 normal = normalize(vNormal);
//           vec3 viewDir = normalize(vViewPosition);
//           vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
//           vec3 y = cross(viewDir, x);
//           vec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 + 0.5;

//           vec4 matcapColorA = texture2D(matcapA, uv);
//           vec4 matcapColorB = texture2D(matcapB, uv);
//           gl_FragColor = mix(matcapColorA, matcapColorB, mixFactor);
//         }
//       `,
//     }),
//     [matcapTextureA, matcapTextureB]
//   );

//   return (
//     <Text3D
//       position={position}
//       rotation={rotation}
//       maxWidth={maxWidth}
//       font={font}
//       {...textConfig}
//       onPointerEnter={handlePointerEnter}
//       onPointerLeave={handlePointerLeave}
//     >
//       {title}
//       <animated.shaderMaterial
//         attach="material"
//         args={[shaderData]}
//         uniforms-mixFactor-value={mixFactor}
//       />
//     </Text3D>
//   );
// };

// ---------------------------------------------------------------------

// import {
//   Text3D,
//   useMatcapTexture,
//   MeshTransmissionMaterial,
// } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { useState, useEffect, useRef } from "react";
// import { useSpring, animated } from "@react-spring/three";
// import * as THREE from "three";

// const textConfig = {
//   curveSegments: 12,
//   bevelEnabled: true,
//   bevelSize: 0.01,
//   bevelThickness: 0.1,
//   height: 1,
//   lineHeight: 1,
//   letterSpacing: 0.25,
//   size: 9.5,
//   receiveShadow: true,
//   castShadow: true,
// };

// const AnimatedMeshTransmissionMaterial = animated(MeshTransmissionMaterial);

// export const TextTitle3D = ({
//   position,
//   rotation = [-Math.PI * 0.5, 0, Math.PI * 0.5],
//   maxWidth,
//   font,
//   title,
// }) => {
//   const [isHovering, setIsHovering] = useState(false);
//   const { gl } = useThree();

//   const [matcapTextureA] = useMatcapTexture("678E67_C4D9C4_ACC8AC_98B898", 256);
//   const [matcapTextureB] = useMatcapTexture("3B6E10_E3F2C3_88AC2E_99CE51", 256);

//   const materialRef = useRef();

//   const handlePointerEnter = (event) => {
//     event.stopPropagation();
//     setIsHovering(true);
//     gl.domElement.style.cursor = "pointer";
//   };

//   const handlePointerLeave = (event) => {
//     event.stopPropagation();
//     setIsHovering(false);
//     gl.domElement.style.cursor = "default";
//   };

//   const { mixFactor } = useSpring({
//     mixFactor: isHovering ? 1 : 0,
//     config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
//   });

//   useEffect(() => {
//     matcapTextureA.needsUpdate = true;
//     matcapTextureB.needsUpdate = true;
//   }, [matcapTextureA, matcapTextureB]);

//   useEffect(() => {
//     if (materialRef.current) {
//       materialRef.current.transmission = 1;
//       materialRef.current.thickness = 0.5;
//     }
//   }, []);

//   return (
//     <Text3D
//       position={position}
//       rotation={rotation}
//       maxWidth={maxWidth}
//       font={font}
//       {...textConfig}
//       onPointerEnter={handlePointerEnter}
//       onPointerLeave={handlePointerLeave}
//     >
//       {title}
//       <AnimatedMeshTransmissionMaterial
//         ref={materialRef}
//         matcap={matcapTextureA}
//         transmissionSampler={false}
//         backside={false}
//         samples={16}
//         resolution={1024}
//         transmission={1}
//         thickness={0.5}
//         clearcoat={0}
//         attenuationDistance={0.5}
//         attenuationColor="#ffffff"
//         color="#ffffff"
//         backsideThickness={0}
//         buffer={mixFactor.to((v) => v * 0.5)}
//       />
//       <meshMatcapMaterial
//         matcap={matcapTextureB}
//         transparent
//         opacity={mixFactor}
//       />
//     </Text3D>
//   );
// };

import { Text3D, useMatcapTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import useExperienceStore from "../../store/experienceStore";

export const TextTitle3D = ({
  position = [0, 0, 0],
  rotation = [-Math.PI * 0.5, 0, Math.PI * 0.5],
  maxWidth,
  font = "/fonts/Inter_Bold.json",
  title = "Hello World",
  size = 9.5,
}) => {
  const { setTextRef, cameraControlsRef } = useExperienceStore();
  const [isHovering, setIsHovering] = useState(false);
  const { gl } = useThree();
  const textRef = useRef();

  const [matcapTextureA] = useMatcapTexture("678E67_C4D9C4_ACC8AC_98B898", 256);
  const [matcapTextureB] = useMatcapTexture("3B6E10_E3F2C3_88AC2E_99CE51", 256);

  const textConfig = {
    curveSegments: 12,
    bevelEnabled: true,
    bevelSize: 0.01,
    bevelThickness: 0.1,
    height: 1,
    lineHeight: 1,
    letterSpacing: 0.25,
    size: size,
    receiveShadow: true,
    castShadow: true,
  };

  const handlePointerEnter = (event) => {
    event.stopPropagation();
    setIsHovering(true);
    gl.domElement.style.cursor = "pointer";
  };

  const handlePointerLeave = (event) => {
    event.stopPropagation();
    setIsHovering(false);
    gl.domElement.style.cursor = "default";
  };

  const handleClick = (event) => {
    event.stopPropagation();
    // setTextRef(textRef);
    const options = {
      cover: false,
      paddingTop: 10,
      paddingRight: 0,
      paddingBottom: 12,
      paddingLeft: 0,
    };
    cameraControlsRef.current?.fitToBox(textRef.current, true, options);
  };

  const { height } = useSpring({
    height: isHovering ? 2 : 1,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.group position={position} rotation={rotation}>
      <animated.mesh scale-z={height} position-y={-0.5}>
        <Text3D
          ref={textRef}
          font={font}
          {...textConfig}
          // height={height}
          maxWidth={maxWidth}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onClick={handleClick}
        >
          {title}
          <meshMatcapMaterial
            // matcap={isHovering ? matcapTextureB : matcapTextureA}
            matcap={matcapTextureA}
            transparent
          />
          {/* <meshStandardMaterial color={"white"} /> */}
        </Text3D>
      </animated.mesh>
    </animated.group>
  );
};

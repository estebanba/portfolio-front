import { useRef, useState, useMemo, useCallback } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { DraggableCube } from "./DraggableCube";

export function Cubes() {
  const y = 0.25;

  const cubePositions = [
    [-2, y, -2],
    [2, y, -2],
    [0, y, 0],
    [-2, y, 2],
    [2, y, 2],
  ];

  const cubeColors = [
    0xc08060, // Desaturated orange
    0xe0d0c0, // Off-white
    0xd0a0b0, // Desaturated pink
    0x505050, // Dark gray
    0x80b090, // Desaturated green
  ];

  return (
    <>
      {cubePositions.map((position, index) => (
        <DraggableCube
          key={index}
          position={position}
          color={cubeColors[index]}
        />
      ))}
    </>
  );
}

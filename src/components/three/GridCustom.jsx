import { useState } from "react";
import {
  Grid,
  Center,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";

export function GridCustom() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);

  const { gridSize, ...gridConfig } = useControls({
    gridSize: [900, 900],
    cellSize: { value: 1, min: 0, max: 9, step: 1 },
    cellThickness: { value: 0.5, min: 0, max: 5, step: 0.1 },
    cellColor: "#a6938c",
    sectionSize: { value: 1, min: 0, max: 9, step: 1 },
    sectionThickness: { value: 0.5, min: 0, max: 5, step: 0.1 },
    sectionColor: "#a6938c",
    fadeDistance: { value: 50, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  });

  const handlePointerMove = (event) => {
    event.stopPropagation();
    const { point } = event;
    const x = Math.floor(point.x);
    const z = Math.floor(point.z);
    setHoveredCell({ x, z });
  };

  const handleClick = (event) => {
    event.stopPropagation();
    if (hoveredCell) {
      setSelectedCell(hoveredCell);
    }
  };

  return (
    <group>
      {/* <gridHelper args={[1000, 1000, "#a6938c", "#a6938c"]} /> */}

      <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerMove={handlePointerMove}
        onPointerOut={() => setHoveredCell(null)}
        onClick={handleClick}
      >
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      {hoveredCell && (
        <mesh
          position={[hoveredCell.x + 0.5, 0.01, hoveredCell.z + 0.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial color={"red"} opacity={0.5} transparent />
        </mesh>
      )}
      {selectedCell && (
        <mesh
          position={[selectedCell.x + 0.5, 0.01, selectedCell.z + 0.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial color={0x0000ff} opacity={0.5} transparent />
        </mesh>
      )}
    </group>
  );
}

import { useRef, useState, useMemo, useCallback } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export function DraggableCube({ position, color }) {
  const [pos, setPos] = useState(position);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const meshRef = useRef();
  const { camera, raycaster, gl } = useThree();
  const plane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
    []
  );
  const intersection = useMemo(() => new THREE.Vector3(), []);

  const handelPointerEnter = (event) => {
    event.stopPropagation();
    setIsHovering(true);
  };

  const handlePointerLeave = (event) => {
    event.stopPropagation();
    setIsHovering(false);
  };

  const handlePointerDown = (event) => {
    console.log(event);
    event.stopPropagation();
    if (event.button === 0) {
      setIsDragging(true);
      gl.domElement.style.cursor = "grabbing";
    }
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    setIsDragging(false);
    gl.domElement.style.cursor = "grab";
    // Snap to grid
    const x = Math.round(pos[0]);
    const z = Math.round(pos[2]);
    setPos([x, 0.25, z]);
  };

  const handlePointerMove = useCallback(
    (event) => {
      if (isDragging) {
        raycaster.setFromCamera(event.pointer, camera);
        raycaster.ray.intersectPlane(plane, intersection);
        setPos([intersection.x, 0.5, intersection.z]);
      }
    },
    [isDragging, raycaster, camera, plane, intersection]
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.set(pos[0] + 0.5, pos[1], pos[2] + 0.5);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={pos}
      castShadow
      receiveShadow
      onPointerEnter={handelPointerEnter}
      onPointerLeave={handlePointerLeave}
      // onPointerDown={handlePointerDown}
      // onPointerUp={handlePointerUp}
      // onPointerMove={handlePointerMove}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={new THREE.Color(color)}
        emissive={isHovering ? 0xff0000 : 0x000000}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

export function GridDotted({ size = 2000, spacing = 10, dotSize = 0.25 }) {
  const meshRef = useRef();
  const tempObject = useMemo(() => new THREE.Object3D(), []);
  const count = Math.pow(Math.floor(size / spacing) + 1, 2);

  useFrame(() => {
    let i = 0;
    for (let x = -size / 2; x <= size / 2; x += spacing) {
      for (let z = -size / 2; z <= size / 2; z += spacing) {
        const id = i++;
        tempObject.position.set(x, 0, z);
        tempObject.rotation.set(-Math.PI * 0.5, 0, Math.PI * 0.25);
        tempObject.updateMatrix();
        meshRef.current.setMatrixAt(id, tempObject.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <circleGeometry args={[dotSize, 16]} />
      <meshBasicMaterial color="gray" />
    </instancedMesh>
  );
}

// import { useRef, useMemo, useState, useEffect } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// export function GridDotted({ size = 100, spacing = 1, dotSize = 0.025 }) {
//   const meshRef = useRef();
//   const tempObject = useMemo(() => new THREE.Object3D(), []);
//   const count = Math.pow(Math.floor(size / spacing) + 1, 2);
//   const colorArray = useMemo(() => new Float32Array(count * 3), [count]); // Color buffer for each instance
//   const [hoveredId, setHoveredId] = useState(null);
//   const { raycaster, camera } = useThree();

//   // Helper to update color
//   const setInstanceColor = (id, color) => {
//     if (meshRef.current && meshRef.current.geometry.attributes.instanceColor) {
//       color.toArray(colorArray, id * 3);
//       meshRef.current.geometry.attributes.instanceColor.needsUpdate = true;
//     }
//   };

//   const handlePointerMove = (event) => {
//     const { clientX, clientY } = event;
//     const mouse = new THREE.Vector2(
//       (clientX / window.innerWidth) * 2 - 1,
//       -(clientY / window.innerHeight) * 2 + 1
//     );

//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObject(meshRef.current);

//     if (intersects.length > 0) {
//       const instanceId = intersects[0].instanceId;
//       if (instanceId !== hoveredId) {
//         setHoveredId(instanceId);
//       }
//     } else {
//       setHoveredId(null);
//     }
//   };

//   useFrame(() => {
//     let i = 0;
//     for (let x = -size / 2; x <= size / 2; x += spacing) {
//       for (let z = -size / 2; z <= size / 2; z += spacing) {
//         const id = i++;
//         tempObject.position.set(x, 0, z);
//         tempObject.rotation.set(-Math.PI * 0.5, 0, Math.PI * 0.25);

//         // Scale the hovered instance
//         if (id === hoveredId) {
//           tempObject.scale.set(1.5, 1.5, 1.5);
//         } else {
//           tempObject.scale.set(1, 1, 1);
//         }

//         tempObject.updateMatrix();
//         if (meshRef.current) {
//           meshRef.current.setMatrixAt(id, tempObject.matrix);
//         }

//         // Update colors for each instance
//         const color =
//           id === hoveredId ? new THREE.Color("red") : new THREE.Color("gray");
//         setInstanceColor(id, color);
//       }
//     }
//     if (meshRef.current) {
//       meshRef.current.instanceMatrix.needsUpdate = true;
//     }
//   });

//   // Creating the instanceColor attribute after the mesh is ready
//   useEffect(() => {
//     if (meshRef.current) {
//       const colorAttribute = new THREE.InstancedBufferAttribute(colorArray, 3);
//       meshRef.current.geometry.setAttribute("instanceColor", colorAttribute);
//     }
//   }, [colorArray]);

//   return (
//     <instancedMesh
//       ref={meshRef}
//       args={[null, null, count]}
//       onPointerMove={handlePointerMove}
//     >
//       <circleGeometry args={[dotSize, 16]} />
//       <meshBasicMaterial vertexColors />
//     </instancedMesh>
//   );
// }

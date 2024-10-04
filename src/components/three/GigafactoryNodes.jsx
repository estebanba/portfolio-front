import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const GigafactoryNodes = (props) => {
  const { nodes, materials } = useGLTF("./gigafactory_plane.glb");

  console.log({ nodes, materials });

  return (
    <group {...props} scale={1} position={[-0.5, 0, 0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        // material={materials["Material.001"]}
        position={[0, 2, 0]}
        scale={[6, 2, 4]}
      >
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve027.geometry}
        // material={materials.red}
        position={[-3, 4.2, 5]}
        // rotation={[0, Math.PI / 2, 0]}
        scale={[75, 25, 75]}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        // material={materials.red}
        position={[0, 0.1, 0]}
        // rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial color={"gray"} />
      </mesh> */}
    </group>
  );
};

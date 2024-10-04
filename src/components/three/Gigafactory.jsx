import { useGLTF } from "@react-three/drei";

export const Gigafactory = () => {
  const { nodes, materials, ...gigafactory } = useGLTF("./gigafactory.glb");

  console.log(nodes, materials);

  return (
    <primitive
      object={gigafactory.scene}
      scale={0.5}
      position={[0, 0, 0]}
      // rotation-y={0.3}
      castShadow
    />
  );
};

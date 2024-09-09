export function Shadows() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  );
}

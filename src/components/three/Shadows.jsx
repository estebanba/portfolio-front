export function Shadows() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[10000, 10000]} />
      <shadowMaterial transparent opacity={0.25} />
      {/* <meshStandardMaterial color={"white"} /> */}
    </mesh>
  );
}

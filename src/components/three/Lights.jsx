export function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[-5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
}

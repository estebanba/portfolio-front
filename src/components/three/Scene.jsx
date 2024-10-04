import { useEffect, useRef } from "react";
import useExperienceStore from "../../store/experienceStore";

import { GigafactoryNodes } from "./GigafactoryNodes";
import { useControls } from "leva";
import { TextComp3D } from "./TextComp3D";

export function Scene() {
  const { setGigaFactoryRef } = useExperienceStore();

  const gigaFactoryRef = useRef();

  console.log({ gigaFactoryRef });

  useEffect(() => {
    setGigaFactoryRef(gigaFactoryRef);
  }, [gigaFactoryRef]);

  const { position } = useControls("gigaFactory", {
    position: {
      value: { x: 150, y: 0, z: -150 },
      step: 1,
    },
  });

  return (
    <>
      {/* <OrbitControls
        enableRotate={false}
        args={[camera, gl.domElement]}
        enableDamping
        dampingFactor={0.05}
        // minAzimuthAngle={-Math.PI / 10}
        // maxAzimuthAngle={Math.PI / 10}
        // maxPolarAngle={Math.PI / 4}
      /> */}

      {/* <OrbitControls
        enableRotate={false}
        makeDefault
        // maxPolarAngle={Math.PI / 4}
        // minPolarAngle={Math.PI / 4}
        // minAzimuthAngle={Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4}
        // minDistance={10}
        // maxDistance={30}
      /> */}

      {/* <Gigafactory /> */}

      <TextComp3D />

      <group
        position={[position.x, position.y, position.z]}
        ref={gigaFactoryRef}
      >
        <GigafactoryNodes />
      </group>
    </>
  );
}

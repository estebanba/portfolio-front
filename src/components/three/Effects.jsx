import { EffectComposer, Noise } from "@react-three/postprocessing";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"; // Import RenderPass
import { useEffect, useRef } from "react";

import { extend, useThree } from "@react-three/fiber";
import PaperEffect from "./PaperEffect";
import { BlendFunction } from "postprocessing";

extend({ RenderPass });

export const Effects = () => {
  const { scene, camera, gl } = useThree();

  const composer = useRef();
  const noiseRef = useRef();

  console.log({ noiseRef });

  //   useEffect(() => {
  //     if (composer.current) {
  //       // Create RenderPass manually and add it to the composer
  //       const renderPass = new RenderPass(scene, camera);
  //       composer.current.addPass(renderPass);
  //     }
  //   }, [scene, camera]);

  return (
    <>
      <EffectComposer ref={composer} args={gl}>
        {/* <ToneMapping mode={ToneMappingMode.ACES_FILMIC} /> */}
        <Noise
          ref={noiseRef}
          premultiply={false}
          blendFunction={BlendFunction.SOFT_LIGHT}
          opacity={0.5}
        />
        {/* <RenderPass attachArray="passes" scene={scene} camera={camera} /> */}
        {/* <Pixelation granularity={2} /> */}
      </EffectComposer>
      {/* <PaperEffect composer={composer} /> */}
    </>
  );
};

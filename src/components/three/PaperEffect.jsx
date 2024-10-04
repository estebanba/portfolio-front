import { useEffect } from "react";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { extend } from "@react-three/fiber";
import { PaperShader } from "./PaperShader";

extend({ ShaderPass });

const PaperEffect = ({ composer }) => {
  useEffect(() => {
    if (composer.current) {
      const shaderPass = new ShaderPass(PaperShader);
      composer.current.addPass(shaderPass);
    }
  }, [composer]);

  return null; // This component only modifies the composer, no need to render anything
};

export default PaperEffect;

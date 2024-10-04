import { useEffect, useRef } from "react";
import { TextTitle3D } from "./TextTitle3D";
import { button, useControls } from "leva";
import useExperienceStore from "../../store/experienceStore";

export const TextComp3D = () => {
  const { setTitleRef, cameraControlsRef } = useExperienceStore();

  const titleRef = useRef();
  console.log({ titleRef });
  console.log({ cameraControlsRef });

  const { font, yText } = useControls("text", {
    font: {
      options: ["/Kanit Black_Regular.json", "/Source Code Pro_Bold.json"],
    },
    yText: {
      value: 0,
      step: 0.1,
    },
    "fitToBox(title)": button(() => {
      const options = {
        cover: false,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 12,
        paddingLeft: 0,
      };

      cameraControlsRef.current?.fitToBox(titleRef.current, true, options);
    }),
  });
  return (
    <>
      <group position={[-21, yText, 30]} ref={titleRef}>
        <TextTitle3D position={[0, 0, 0]} title={"esteban"} font={font} />
        <TextTitle3D position={[10, 0, 0]} title={"basili"} font={font} />
        <TextTitle3D
          position={[10, 0, -40]}
          title={"developer"}
          font={font}
          size={4.5}
        />
        <TextTitle3D
          position={[5, 0, -40]}
          title={"architect"}
          font={font}
          size={4.5}
        />
      </group>
      <group
        // rotation={[0, -Math.PI * 0.5, 0]}
        position={[0, yText, 0]}
        ref={titleRef}
      >
        <TextTitle3D position={[40, 0, 0]} title={"about"} font={font} />
        <TextTitle3D position={[50, 0, 0]} title={"projects"} font={font} />
        <TextTitle3D position={[60, 0, 0]} title={"blog"} font={font} />
        <TextTitle3D position={[70, 0, 0]} title={"photos"} font={font} />
      </group>
    </>
  );
};

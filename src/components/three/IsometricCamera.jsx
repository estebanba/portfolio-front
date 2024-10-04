import * as THREE from "three";
import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { button, buttonGroup, folder, useControls } from "leva";
import { useCallback, useEffect, useRef } from "react";
import useExperienceStore from "../../store/experienceStore";

const { DEG2RAD } = THREE.MathUtils;

export const IsometricCamera = () => {
  const { titleRef, textRef, gigaFactoryRef, setCameraControlsRef } =
    useExperienceStore();

  const cameraControlsRef = useRef();

  useEffect(() => {
    setCameraControlsRef(cameraControlsRef);
  }, [cameraControlsRef]);

  const { camera } = useThree();

  // useEffect(() => {
  //   if (textRef != null && textRef.current) {
  //     const options = {
  //       cover: false,
  //       paddingTop: 10,
  //       paddingRight: 0,
  //       paddingBottom: 12,
  //       paddingLeft: 0,
  //     };

  //     cameraControlsRef.current?.fitToBox(textRef.current, true, options);
  //   }
  // }, [textRef]);

  //   useFrame((state) => {
  //     console.log(state.camera);
  //   });

  const truckToGroup = useCallback((groupRef) => {
    if (cameraControlsRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const distance = maxDim;

      const newPosition = new THREE.Vector3(
        center.x + distance,
        center.y + distance,
        center.z + distance
      );

      cameraControlsRef.current.setLookAt(
        newPosition.x,
        newPosition.y,
        newPosition.z,
        center.x,
        center.y,
        center.z,
        true // animate
      );
    }
  }, []);

  const maintainParallelDuringTrucking = useCallback((groupRef) => {
    if (cameraControlsRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const distance = maxDim * 2;

      // Get the current position and target using getPosition and getTarget
      const currentPosition = new THREE.Vector3();
      const currentTarget = new THREE.Vector3();

      cameraControlsRef.current.getPosition(currentPosition);
      cameraControlsRef.current.getTarget(currentTarget);

      // Calculate the target vector (direction from camera position to target)
      const targetVector = currentTarget.clone().sub(currentPosition);

      // New position for trucking to the group
      const newPosition = new THREE.Vector3(
        center.x + distance,
        center.y + distance,
        center.z + distance
      );

      // Maintain the same target vector direction by adding it to the new position
      const newTarget = newPosition.clone().add(targetVector);

      //   cameraControlsRef.current.setLookAt(
      //     newPosition.x,
      //     newPosition.y,
      //     newPosition.z,
      //     newTarget.x,
      //     newTarget.y,
      //     newTarget.z,
      //     true // animate
      //   );

      cameraControlsRef.current?.moveTo(
        newPosition.x,
        newPosition.y,
        newPosition.z,
        true
      );

      //   const truckDistance = Math.hypot(newPosition.x, newPosition.z);

      //   cameraControlsRef.current?.truck(truckDistance, 0, true);
      //   cameraControlsRef.current?.truck(newPosition.x, newPosition.z, true);
    }
  }, []);

  // All same options as the original "basic" example: https://yomotsu.github.io/camera-controls/examples/basic.html
  const {
    minDistance,
    enabled,
    verticalDragToForward,
    dragToOffset,
    dollyToCursor,
    infinityDolly,
  } = useControls({
    thetaGrp: buttonGroup({
      label: "rotate theta",
      opts: {
        "+45º": () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
        "-90º": () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
        "+360º": () =>
          cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true),
      },
    }),
    // phiGrp: buttonGroup({
    //   label: "rotate phi",
    //   opts: {
    //     "+40º": () => cameraControlsRef.current?.rotate(0, 40 * DEG2RAD, true),
    //     "-40º": () => cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true),
    //   },
    // }),
    truckGrp: buttonGroup({
      label: "truck",
      opts: {
        "(1,0)": () => cameraControlsRef.current?.truck(1, 0, true),
        "(-210.213,0)": () =>
          cameraControlsRef.current?.truck(-210.213, 0, true),
        "(210.213,0)": () => cameraControlsRef.current?.truck(210.213, 0, true),
      },
    }),
    dollyGrp: buttonGroup({
      label: "dolly",
      opts: {
        1: () => cameraControlsRef.current?.dolly(100, true),
        "-1": () => cameraControlsRef.current?.dolly(-100, true),
      },
    }),
    zoomGrp: buttonGroup({
      label: "zoom",
      opts: {
        "/2": () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
        "/-2": () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true),
      },
    }),
    minDistance: { value: 0 },
    moveTo: folder(
      {
        vec1: { value: [3, 5, 2], label: "vec" },
        "moveTo(…vec)": button((get) =>
          cameraControlsRef.current?.moveTo(...get("moveTo.vec1"), true)
        ),
      },
      { collapsed: true }
    ),
    "fitToBox(mesh)": button(() => {
      const options = {
        cover: false,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 12,
        paddingLeft: 0,
      };

      cameraControlsRef.current?.fitToBox(titleRef.current, true, options);
    }),
    goTo: button(() => maintainParallelDuringTrucking(gigaFactoryRef)),
    // changePosition: button(() =>
    //   cameraControlsRef.current?.setPosition(548, 600, 251, true)
    // ),

    setTarget: folder(
      {
        vec3: { value: [3, 0, -3], label: "vec" },
        "setTarget(…vec)": button((get) =>
          cameraControlsRef.current?.setTarget(...get("setTarget.vec3"), true)
        ),
      },
      { collapsed: true }
    ),
    setLookAt: folder(
      {
        vec4: { value: [1, 2, 3], label: "position" },
        vec5: { value: [1, 1, 0], label: "target" },
        "setLookAt(…position, …target)": button((get) =>
          cameraControlsRef.current?.setLookAt(
            ...get("setLookAt.vec4"),
            ...get("setLookAt.vec5"),
            true
          )
        ),
      },
      { collapsed: true }
    ),
    lerpLookAt: folder(
      {
        vec6: { value: [-2, 0, 0], label: "posA" },
        vec7: { value: [1, 1, 0], label: "tgtA" },
        vec8: { value: [0, 2, 5], label: "posB" },
        vec9: { value: [-1, 0, 0], label: "tgtB" },
        t: { value: Math.random(), label: "t", min: 0, max: 1 },
        "f(…posA,…tgtA,…posB,…tgtB,t)": button((get) => {
          return cameraControlsRef.current?.lerpLookAt(
            ...get("lerpLookAt.vec6"),
            ...get("lerpLookAt.vec7"),
            ...get("lerpLookAt.vec8"),
            ...get("lerpLookAt.vec9"),
            get("lerpLookAt.t"),
            true
          );
        }),
      },
      { collapsed: true }
    ),
    saveState: button(() => cameraControlsRef.current?.saveState()),
    reset: button(() => cameraControlsRef.current?.reset(true)),
    enabled: { value: true, label: "controls on" },
    verticalDragToForward: {
      value: false,
      label: "vert. drag to move forward",
    },
    dragToOffset: { value: true, label: "drag to offset" },
    dollyToCursor: { value: false, label: "dolly to cursor" },
    infinityDolly: { value: false, label: "infinity dolly" },
  });

  return (
    <>
      <CameraControls
        makeDefault
        ref={cameraControlsRef}
        minDistance={minDistance}
        enabled={enabled}
        verticalDragToForward={verticalDragToForward}
        dragToOffset={dragToOffset}
        dollyToCursor={dollyToCursor}
        infinityDolly={infinityDolly}
        truckSpeed={1}
        // azimuthRotateSpeed={0} // Disable horizontal rotation
        // polarRotateSpeed={0} // Disable vertical rotation
        // minZoom={10}
        // maxZoom={10}
        smoothTime={0.5}
      />
    </>
  );
};

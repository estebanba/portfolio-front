import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

export function Scene({ children }) {
  const { camera, gl, scene } = useThree();
  const controlsRef = useRef();
  // const [target] = useState(() => new THREE.Vector3());
  // const [zoomTarget, setZoomTarget] = useState(50);

  // useFrame(() => {
  //   controlsRef.current?.update();
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     const aspect = window.innerWidth / window.innerHeight;
  //     const frustumSize = 20;
  //     camera.left = (-frustumSize * aspect) / 2;
  //     camera.right = (frustumSize * aspect) / 2;
  //     camera.top = frustumSize / 2;
  //     camera.bottom = -frustumSize / 2;
  //     camera.updateProjectionMatrix();
  //     gl.setSize(window.innerWidth, window.innerHeight);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [camera, gl]);

  useFrame(() => {
    controlsRef.current?.update();
    // camera.zoom = THREE.MathUtils.lerp(camera.zoom, zoomTarget, 0.1);
    // camera.updateProjectionMatrix();
  });

  // const handleDoubleClick = (event) => {
  //   event.stopPropagation();
  //   if (event.object) {
  //     const box = new THREE.Box3().setFromObject(event.object);
  //     const center = box.getCenter(new THREE.Vector3());
  //     const size = box.getSize(new THREE.Vector3());
  //     const maxDim = Math.max(size.x, size.y, size.z);
  //     const fov = camera.fov * (Math.PI / 180);
  //     let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

  //     target.copy(center);
  //     setZoomTarget(50 / maxDim);

  //     controlsRef.current.target.copy(center);
  //   }
  // };

  return (
    <>
      <color attach="background" args={[0xd6b18b]} />
      <OrbitControls
        enableRotate={false}
        ref={controlsRef}
        args={[camera, gl.domElement]}
        enableDamping
        dampingFactor={0.05}
        // minAzimuthAngle={-Math.PI / 10}
        // maxAzimuthAngle={Math.PI / 10}
        // maxPolarAngle={Math.PI / 4}
      />
      {children}
    </>
  );
}

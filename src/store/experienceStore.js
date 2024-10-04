import { create } from "zustand";

const useExperienceStore = create((set) => ({
  cameraControlsRef: null,
  setCameraControlsRef: (value) => set({ cameraControlsRef: value }),

  titleRef: null,
  setTitleRef: (value) => set({ titleRef: value }),

  textRef: null,
  setTextRef: (value) => set({ textRef: value }),

  cubesRef: null,
  setCubesRef: (value) => set({ cubesRef: value }),

  gigaFactoryRef: null,
  setGigaFactoryRef: (value) => set({ gigaFactoryRef: value }),
}));

export default useExperienceStore;

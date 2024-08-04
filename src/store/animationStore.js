import { create } from "zustand";

const useAnimationStore = create((set) => ({
  isBouncing: false,
  setIsBouncing: (bool) => set({ isBouncing: bool }),
}));

export default useAnimationStore;

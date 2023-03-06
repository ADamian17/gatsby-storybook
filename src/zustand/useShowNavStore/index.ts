import create from "zustand";

type UseShowNavStoreType = {
  showNav: boolean;
  setShowNav: (val: boolean) => void;
  resetShowNav: () => void;
};

const useShowNavStore = create<UseShowNavStoreType>(set => ({
  showNav: false,
  setShowNav: val => set(_ => ({ showNav: val })),
  resetShowNav: () => set(_ => ({ showNav: false })),
}));

export default useShowNavStore;

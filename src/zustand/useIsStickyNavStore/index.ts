import create from "zustand";

type UseIsStickyNavStoreType = {
  isSticky: boolean;
  setIsSticky: (val: boolean) => void;
};

const useIsStickyNavStore = create<UseIsStickyNavStoreType>(set => ({
  isSticky: false,
  setIsSticky: val =>
    set(_ => ({
      isSticky: val,
    })),
}));

export default useIsStickyNavStore;

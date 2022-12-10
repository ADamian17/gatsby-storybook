import create from 'zustand';

type MobileNavBtnState = {
  showNav: boolean;
  setShowNav: (val: boolean) => void;
  resetShowNav: () => void;
};

const useMobileNavBtnStore = create<MobileNavBtnState>()((set) => ({
  showNav: false,
  setShowNav: (val) => set((state) => ({ ...state, showNav: val })),
  resetShowNav: () => set((state) => ({ ...state, showNav: false })),
}));

export default useMobileNavBtnStore;

import create from 'zustand';

type MobileNavBtnState = {
  showNav: boolean;
  setShowNav: (val: boolean) => void;
};

const useMobileNavBtnStore = create<MobileNavBtnState>()((set) => ({
  showNav: false,
  setShowNav: (val) => set((state) => ({ ...state, showNav: val })),
}));

export default useMobileNavBtnStore;

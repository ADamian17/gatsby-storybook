import create from "zustand";

type MainNavMenusStoreType = {
  features: boolean;
  products: boolean;
  professions: boolean;
  resources: boolean;
  setExpandMenu: (menu: MainLayoutTypes.MenuOptions, val: boolean) => void;
};

const useMainNavMenusStore = create<MainNavMenusStoreType>()(set => ({
  features: false,
  products: false,
  professions: false,
  resources: false,
  setExpandMenu: (menu, val) => set(_ => ({ [menu]: val })),
}));

export default useMainNavMenusStore;

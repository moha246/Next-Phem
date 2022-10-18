import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { storeVersion } from "@store/storeHelpers";

let store = (set, get) => ({
  groups: null,

  populateAllGroups: (payload) => set((state) => ({ groups: payload })),
});

store = devtools(store);

store = persist(store, {
  name: "ALL_GROUPS_STORE",
  version: storeVersion,
});

const useAllGroupsStore = create(store);

export default useAllGroupsStore;

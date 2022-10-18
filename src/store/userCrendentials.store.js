import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { storeVersion } from "@store/storeHelpers";

let store = (set, get) => ({
  jwt: null,
  userDetails: null,

  populateUserInfoAndJwt: (payload) =>
    set((state) => ({ userDetails: payload, jwt: payload.token })),

  refreshUserInfo: (payload) => {
    set((state) => ({
      userDetails: payload,
    }));
  },

  reset: () => {
    set((state) => ({ userDetails: null, jwt: null }));
  },
});

store = devtools(store);

store = persist(store, {
  name: "USER_CREDENTIALS_STORE",
  version: storeVersion,
});

const useUserCredentialsStore = create(store);

export default useUserCredentialsStore;

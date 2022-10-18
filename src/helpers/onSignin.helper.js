import { jwtCookies } from "@config/index";
import useUserCredentialsStore from "@store/userCrendentials.store";
import Router from "next/router";
import { setCookie } from "nookies";

export const onSigninHelper = async (payload) => {
  const populateUserDetails =
    useUserCredentialsStore.getState().populateUserInfoAndJwt;

  setCookie?.(null, jwtCookies, payload.token, {
    maxAge: 29 * 24 * 60 * 60,
    path: "/",
    sameSite: "strict",
  });

  populateUserDetails(payload);

  Router.replace("/dashboard");
};

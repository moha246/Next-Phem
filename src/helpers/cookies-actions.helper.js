import { jwtCookies } from "@config/index";
import nookies from "nookies";

export const ParseCookiesValue = async (ctx) => {
  //server side
  try {
    if (ctx) {
      const serverCookies = nookies.get(ctx);
      return serverCookies;
    } else {
      //   client side
      const clientCookies = nookies.get(null);
      return clientCookies;
    }
  } catch (error) {
    return null;
  }
};

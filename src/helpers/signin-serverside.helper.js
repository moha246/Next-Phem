import { jwtCookies } from "@config/index";
import { ParseCookiesValue } from "@helpers/cookies-actions.helper";

export const signinServerSideHelper = async (ctx) => {
  const cookies = await ParseCookiesValue(ctx);
  try {
    if (cookies?.[jwtCookies]) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

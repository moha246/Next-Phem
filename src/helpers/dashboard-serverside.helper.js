import { jwtCookies } from "@config/index";
import { ParseCookiesValue } from "@helpers/cookies-actions.helper";

export const dashboardServerSideHelper = async (ctx) => {
  const cookies = await ParseCookiesValue(ctx);
  try {
    if (!cookies?.[jwtCookies]) {
      return {
        redirect: {
          destination: "/",
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

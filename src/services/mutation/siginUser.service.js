import { publicInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets posts data. default is 100 posts.
 * @returns { Array }
 */
export const signinUser = async (loginDetails) => {
  const res = await publicInstanceAxios.post(`/api/users/login/`, loginDetails);

  return res?.data;
};

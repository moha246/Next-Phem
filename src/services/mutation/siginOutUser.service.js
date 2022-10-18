import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc logs user out
 * @returns { Array }
 */
export const signoutUser = async (refreshToken) => {
  const payload = {
    refresh_token: `Bearer ${refreshToken}`,
  };
  const res = await authInstanceAxios.post(`/api/users/logout/`, payload);
  return res?.data;
};

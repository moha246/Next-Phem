import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc create a user member.
 * @returns { Array }
 */
export const createUser = async (memberDetails) => {
  const res = await authInstanceAxios.post(`/api/users/users/`, memberDetails);

  return res?.data;
};

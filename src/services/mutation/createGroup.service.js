import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc create a group.
 * @returns { Array }
 */
export const createGroup = async (memberDetails) => {
  const res = await authInstanceAxios.post(`/api/users/groups/`, memberDetails);

  return res?.data;
};

import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets all groups
 * @returns { Array }
 */
export const getAllGroups = async () => {
  const res = await authInstanceAxios.get(`/api/users/groups/`);
  return res?.data;
};

import { useQuery } from "react-query";
import useAllGroupsStore from "@store/allGroups.store";
import shallow from "zustand/shallow";
import { GET_ALL_GROUPS_KEY } from "@config/queryKeys";
import { getAllGroups } from "@services/query/getAllGroups.service";

export const useGetAllGroups = () => {
  const [populateAllGroups] = useAllGroupsStore(
    (state) => [state.populateAllGroups],
    shallow
  );

  const { data, isLoading, error, isFetching } = useQuery(
    GET_ALL_GROUPS_KEY,
    getAllGroups,
    {
      refetchInterval: 10000, //1 min
      onSuccess: (result) => {
        populateAllGroups(result);
      },
    }
  );

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};

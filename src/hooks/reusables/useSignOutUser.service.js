import { useMutation } from "react-query";
import { SIGNOUT_USER_KEY } from "@config/queryKeys";
import { signoutUser } from "@services/mutation/siginOutUser.service";
import Alert from "@components/Utilities/Alert";
import { useToast } from "@chakra-ui/react";
import useUserCredentialsStore from "@store/userCrendentials.store";
import { destroyCookie } from "nookies";
import { jwtCookies } from "@config/index";
import { useQueryClientAndsettings } from "@config/queryClient";
import Router from "next/router";

export const useSignOutUserLocal = () => {
  const resetUserDetails = useUserCredentialsStore((state) => state.reset);
  const { queryClient } = useQueryClientAndsettings();
  const toast = useToast();
  const id = "signout-toast";

  const { isLoading, mutate, error, status, data } = useMutation({
    mutationKey: SIGNOUT_USER_KEY,
    mutationFn: signoutUser,
    retry: 2,
    onSuccess: () => {
      destroyCookie(null, jwtCookies);
      localStorage.clear();
      resetUserDetails();
      queryClient.cancelQueries();
      queryClient.cancelMutations();
      queryClient.removeQueries();
      queryClient.resetQueries();
      queryClient.clear();
      Router.replace("/");
    },
    onError: () => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 9000,
          render: () => (
            <Alert mode="error" message="Log out failed" toastId={id} />
          ),
        });
      }
    },
  });
  return {
    isLoading,
    error,
    status,
    mutate,
    data,
  };
};

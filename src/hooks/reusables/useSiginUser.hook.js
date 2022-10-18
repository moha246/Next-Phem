import { useMutation } from "react-query";
import { SIGNIN_USER_KEY } from "@config/queryKeys";
import { onSigninHelper } from "@helpers/onSignin.helper";
import Alert from "@components/Utilities/Alert";
import { useToast } from "@chakra-ui/react";

export const useSigninUserLocal = ({ mutationFn }) => {
  const toast = useToast();
  const id = "signin-password-toast";

  const { isLoading, mutate, error, status, data } = useMutation({
    mutationKey: SIGNIN_USER_KEY,
    mutationFn: mutationFn,
    retry: 2,
    onSuccess: (result) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 9000,
          render: () => (
            <Alert mode="success" message="Sign in successful" toastId={id} />
          ),
        });
      }
      onSigninHelper(result);
    },
    onError: (error) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 3.6e6,
          render: () => (
            <Alert
              mode="error"
              message={error?.detail || "Login failed"}
              toastId={id}
            />
          ),
        });
      }
    },
    onMutate: () => {
      if (toast.isActive(id)) {
        toast.close(id);
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

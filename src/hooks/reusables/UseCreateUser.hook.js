import { useMutation } from "react-query";
import { CREATE_USER_KEY } from "@config/queryKeys";
import Alert from "@components/Utilities/Alert";
import { useToast } from "@chakra-ui/react";

export const useCreateUser = ({ mutationFn }) => {
  const toast = useToast();
  const id = "create-user-password-toast";

  const { isLoading, mutate, error, status, data } = useMutation({
    mutationKey: CREATE_USER_KEY,
    mutationFn: mutationFn,
    retry: 2,
    onSuccess: (result) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 9000,
          render: () => (
            <Alert
              mode="success"
              message="User created successfully"
              toastId={id}
            />
          ),
        });
      }
    },
    onError: (error) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 3.6e6,
          render: () => (
            <Alert
              mode="error"
              message={error?.detail || "User creation failed"}
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

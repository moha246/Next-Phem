import React from "react";
import Success from "@components/Utilities/Alert/Success";
import Warning from "@components/Utilities/Alert/Warning";
import Error from "@components/Utilities/Alert/Error";
import { useToast } from "@chakra-ui/react";

const Alert = ({ mode, message, toastId }) => {
  const toast = useToast();

  const ComponentMap = {
    error: <Error message={message} />,
    idle: <Error message={message} />,
    warning: <Warning message={message} />,
    success: <Success message={message} />,
  };

  const dismissToast = () => {
    if (toastId && toast.isActive(toastId)) {
      toast.close(toastId);
    }
  };
  return (
    <div className="font-sans cursor-pointer" onClick={dismissToast}>
      {ComponentMap[mode]}
    </div>
  );
};

export default Alert;

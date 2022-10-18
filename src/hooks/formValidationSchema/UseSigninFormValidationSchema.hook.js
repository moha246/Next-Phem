import { useFormik } from "formik";
import * as yup from "yup";

export const useSigninValidationSchema = (onSubmit) => {
  const signinValidationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: signinValidationSchema,
  });
  return { formik };
};

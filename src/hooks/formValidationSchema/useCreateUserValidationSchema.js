import { useFormik } from "formik";
import * as yup from "yup";

export const useCreateUserValidationSchema = (onSubmit) => {
  const createUserValidationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    group: yup.string().required("Group is required"),
    role: yup.string().required("Role is required"),
  });

  const initialValues = {
    username: "",
    password: "",
    lastname: "",
    firstname: "",
    group: "",
    role: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: createUserValidationSchema,
  });
  return { formik };
};

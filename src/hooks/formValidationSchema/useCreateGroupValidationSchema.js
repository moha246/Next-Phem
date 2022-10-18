import { useFormik } from "formik";
import * as yup from "yup";

export const useCreateUserValidationSchema = (onSubmit) => {
  const createGroupValidationSchema = yup.object({
    name: yup.string().required("Group name is required"),
  });

  const initialValues = {
    name: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: createGroupValidationSchema,
  });
  return { formik };
};

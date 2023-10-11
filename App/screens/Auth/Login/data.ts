import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

export const initialValues = {
  email: "",
  password: "",
};

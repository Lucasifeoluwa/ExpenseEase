import { object, string } from "yup";

export const validationSchema = object().shape({
  fullName: string().required().label("Full Name"),
  email: string().email().required().label("Email"),
  phoneNumber: string()
    .required()
    .min(11, "Phone number should be 11 digits")
    .label("Phone Number"),
  password: string().required().min(4, "Password should be at least 4 numbers"),
});

export const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

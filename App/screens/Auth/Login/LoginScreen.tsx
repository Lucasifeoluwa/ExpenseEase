import { View, Pressable } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../../components/AppScreen/index";
import Header from "../../../components/Header/Header";
import AppForm from "../../../components/AppForm/AppForm";
import AuthField from "../../../components/AuthComponents/AuthField/AuthField";
import { initialValues, validationSchema } from "./data";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import AppText from "../../../components/AppText";
import { styles } from "./styles";
import { auth } from "../../../auth/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthScreenProps } from "../../../router/navigationTypes";
import { useDispatch } from "react-redux";
import { setVisibleRoute } from "../../../store/slices/appState";

type LoginProps = {
  email: string;
  password: string;
};

export default function LoginScreen({ navigation }: AuthScreenProps<"Login">) {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }: LoginProps) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        }
      );
    } catch (error) {
      console.log("Wrong Email or Password", error);
    }
    dispatch(setVisibleRoute("app"));
  };

  return (
    <AppScreen scrollable={false}>
      <View style={styles.container}>
        <Header
          tag="Welcome Back"
          title="Login to track your Expenses"
          onPress={() => console.log("tapped")}
        />
        <View style={styles.formCtn}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <View style={styles.fieldCtn}>
              <AuthField
                fieldName="email"
                label="Email"
                placeholder="janedoe@mymail.com"
                autoComplete="email"
                keyboardType="email-address"
                showErrorMessage
              />
              <AuthField
                fieldName="password"
                label="Set Password"
                isPassword={true}
                showErrorMessage
                forgotPassword
                onForgotPasswordPress={() => console.log("PasswordForgotten")}
              />
              <View style={styles.subCtn}>
                <SubmitButton title="Login" />
              </View>
            </View>
          </AppForm>
          <View style={styles.footerCtn}>
            <AppText style={styles.footerText}>Don't have an account?</AppText>
            <Pressable onPress={() => console.log("SignUp")}>
              <AppText style={styles.leftFooterText}>{" Sign Up"}</AppText>
            </Pressable>
          </View>
        </View>
      </View>
    </AppScreen>
  );
}

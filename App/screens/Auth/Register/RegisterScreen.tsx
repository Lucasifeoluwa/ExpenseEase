import React, { useState } from "react";
import { styles } from "./styles";
import AppScreen from "../../../components/AppScreen";
import AppText from "../../../components/AppText";
import { Pressable, View } from "react-native";
import { regProps } from "../../../interfaces/auth";
import Header from "../../../components/Header/Header";
import AppForm from "../../../components/AppForm/AppForm";
import { initialValues, validationSchema } from "./data";
import AuthField from "../../../components/AuthComponents/AuthField/AuthField";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import { auth } from "../../../auth/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthScreenProps } from "../../../router/navigationTypes";

function RegisterScreen({ navigation }: AuthScreenProps<"Register">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (val: regProps) => {
    setEmail(val.email);
    setPassword(val.password);

    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        }
      );
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Success");
  };

  return (
    <AppScreen scrollable>
      <View style={styles.container}>
        <Header
          tag="Create a New Account"
          title="Create an account to manage your expenses"
          onPress={() => console.log("tapped")}
        />
        <View style={styles.formCtn}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(val) => handleSubmit(val)}
          >
            <View style={styles.fieldCtn}>
              <AuthField
                fieldName="fullName"
                label="Full Name"
                placeholder="John Doe"
                autoCorrect
                autoCapitalize="words"
                autoComplete="name"
                showErrorMessage
              />
              <AuthField
                fieldName="email"
                label="Email"
                placeholder="janedoe@mymail.com"
                keyboardType="email-address"
                showErrorMessage
              />
              <AuthField
                fieldName="phoneNumber"
                label="Phone Number"
                placeholder="Phone Number"
                keyboardType="number-pad"
                showErrorMessage
              />
              <AuthField
                fieldName="password"
                label="Set Password"
                isPassword={true}
                showErrorMessage
              />
              <View>
                <AppText style={styles.warnText}>
                  By creating an account, I confirm that I have read, understood
                  and have agreed to eFactory's {""}
                  <AppText style={[styles.warnText, styles.subText]}>
                    Terms of Service
                  </AppText>{" "}
                  and{" "}
                  {
                    <AppText style={[styles.warnText, styles.subText]}>
                      Privacy Policy
                    </AppText>
                  }
                  .
                </AppText>
              </View>
              <SubmitButton title="Create Account" />
            </View>
          </AppForm>
          <View style={styles.footerCtn}>
            <AppText style={styles.footerText}>
              Already have an account?
            </AppText>
            <Pressable>
              <AppText style={styles.leftFooterText}>{" Sign in"}</AppText>
            </Pressable>
          </View>
        </View>
      </View>
    </AppScreen>
  );
}

export default RegisterScreen;

import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import AppScreen from "../../../components/AppScreen";
import { StatusBar } from "expo-status-bar";
import colors from "../../../config/colors";
import AppText from "../../../components/AppText";
import AppButton from "../../../components/AppButton";
import { AuthScreenProps } from "../../../router/navigationTypes";

export default function SuccessScreen({
  navigation,
}: AuthScreenProps<"Success">) {
  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../../assets/images/ribbon.png")}
          style={styles.confttiCtn}
        />
        <View style={styles.checkCtn}>
          <Image
            source={require("../../../../assets/images/success.png")}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.textCtn}>
        <AppText style={styles.text}>Congratulations</AppText>
        <AppText style={styles.subText}>
          Your Account creation was successful
        </AppText>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Continue to Home Screen"
          style={styles.btn}
          textStyle={styles.btnTxt}
          onPress={handleSubmit}
        />
      </View>
      <StatusBar backgroundColor={colors.primary} />
    </View>
  );
}

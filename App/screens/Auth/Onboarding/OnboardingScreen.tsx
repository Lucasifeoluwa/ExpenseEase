import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppButton from "../../../components/AppButton";
import AppScreen from "../../../components/AppScreen";
import { AuthScreenProps } from "../../../router/navigationTypes";

const OnboardingScreen = ({ navigation }: AuthScreenProps<"Onboarding">) => {
  const handleSubmit = () => {
    navigation.navigate("Login");
  };

  return (
    <AppScreen>
      <View style={styles.container}>
        <Text>OnboardingScreen</Text>
        <AppButton
          title="Move On"
          style={{ width: "80%" }}
          onPress={handleSubmit}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;

import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

interface props {}

function Splash({}: props) {
  return (
    <ImageBackground
      source={require("../../../../assets/images/splash.png")}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;

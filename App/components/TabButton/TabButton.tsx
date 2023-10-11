import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { heightPixel, normalise, widthPixel } from "../../config/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type props = {
  onPress: () => void;
};

const TabButton = ({ onPress }: props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={normalise(40)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: normalise(40),
    borderWidth: normalise(5),
    bottom: normalise(20),
    height: heightPixel(60),
    justifyContent: "center",
    width: widthPixel(60),
    elevation: 1,
  },
});

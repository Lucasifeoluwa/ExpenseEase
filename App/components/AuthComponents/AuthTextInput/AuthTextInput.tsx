import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  TextInputProps,
} from "react-native";
import { normalise } from "../../../config/normalize";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../AppText";
import { AuthInput } from "../../../interfaces/AppComponents";
import { styles } from "./styles";

export type IAuthTextInput = AuthInput & TextInputProps;

function AuthTextInput({
  forgotPassword,
  label,
  onForgotPasswordPress,
  isPassword,
  viewStyle,
  rightLabel,
  ...otherProps
}: IAuthTextInput) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.labelCtn}>
        {label && <AppText style={styles.leftLabel}>{label}</AppText>}
        {forgotPassword && (
          <Pressable
            style={styles.forgotPasswordCtn}
            onPress={onForgotPasswordPress}
          >
            <AppText style={styles.rightLabel}>Forgot Password?</AppText>
          </Pressable>
        )}
      </View>
      <View style={[styles.inputCtn, viewStyle]}>
        <TextInput
          style={styles.textInput}
          secureTextEntry={isPassword && !showPassword}
          cursorColor={colors.black}
          placeholderTextColor={colors.lightgray}
          {...otherProps}
        />
        {isPassword && (
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={normalise(18)}
              color={showPassword ? colors.primary : colors.darkgray}
              onPress={() => setShowPassword(!showPassword)}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ backgroundColor: "black" }}>
        {forgotPassword && (
          <Pressable
            style={styles.forgotPasswordCtn}
            onPress={onForgotPasswordPress}
          >
            <AppText style={styles.rightLabel}>Forgot Password?</AppText>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default AuthTextInput;

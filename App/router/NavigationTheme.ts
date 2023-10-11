import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: "white",
  },
};

export default NavigationTheme;

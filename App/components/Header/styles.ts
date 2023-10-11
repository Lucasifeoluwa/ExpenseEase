import colors from "../../config/colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  heightPixel,
} from "../../config/normalize";

type Props = {
  container: ViewStyle;
  textCtn: ViewStyle;
  tag: TextStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<Props>({
  container: {
    paddingHorizontal: pixelSizeHorizontal(10),
    marginTop: pixelSizeVertical(40),
  },
  textCtn: {
    justifyContent: "center",
    marginTop: pixelSizeVertical(20),
  },
  tag: {
    color: colors.primary,
    fontSize: fontPixel(35),
    fontWeight: "600",
  },
  title: {
    fontSize: fontPixel(18),
    marginTop: pixelSizeVertical(10),
    color: colors.lightgray,
    fontWeight: "700",
  },
});

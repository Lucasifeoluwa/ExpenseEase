import { StyleSheet } from "react-native";
import colors from "../../../config/colors";
import {
  normalise,
  pixelSizeVertical,
  heightPixel,
  fontPixel,
} from "../../../config/normalize";

export const styles = StyleSheet.create({
  inputCtn: {
    borderRadius: 10,
    borderWidth: normalise(1),
    borderColor: colors.lightgray,
    overflow: "hidden",
    paddingHorizontal: pixelSizeVertical(13),
    flexDirection: "row",
    alignItems: "center",
    height: heightPixel(56),
  },
  textInput: { flex: 1, color: colors.black },
  container: {
    rowGap: pixelSizeVertical(3),
  },
  labelCtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftLabel: {
    color: colors.darkgray,
    fontWeight: "700",
  },
  rightLabel: {
    color: colors.primary,
    fontSize: fontPixel(13),
    fontWeight: "700",
  },
  forgotPasswordCtn: {
    flex: 1,
    alignItems: "flex-end",
  },
});

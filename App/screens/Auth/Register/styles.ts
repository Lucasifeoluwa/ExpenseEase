import colors from "../../../config/colors";
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from "../../../config/normalize";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type props = {
  container: ViewStyle;
  formCtn: ViewStyle;
  fieldCtn: ViewStyle;
  warnText: TextStyle;
  subText: TextStyle;
  footerCtn: ViewStyle;
  footerText: TextStyle;
  leftFooterText: TextStyle;
};

export const styles = StyleSheet.create<props>({
  container: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  formCtn: {
    marginTop: 25,
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  fieldCtn: {
    rowGap: pixelSizeVertical(20),
  },
  footerCtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: pixelSizeVertical(20),
  },
  footerText: {
    fontSize: fontPixel(15),
  },
  warnText: {
    fontSize: fontPixel(15),
    marginLeft: pixelSizeHorizontal(8),
    textAlign: "justify",
    color: colors.darkgray,
  },
  subText: {
    fontWeight: "700",
    color: colors.primary,
  },
  leftFooterText: { color: colors.primary, fontWeight: "500" },
});

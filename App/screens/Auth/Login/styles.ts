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
  footerCtn: ViewStyle;
  footerText: TextStyle;
  leftFooterText: TextStyle;
  subCtn: ViewStyle;
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
    marginBottom: pixelSizeVertical(150),
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
  leftFooterText: { color: colors.primary, fontWeight: "500" },
  subCtn: {
    marginTop: pixelSizeVertical(50),
  },
});

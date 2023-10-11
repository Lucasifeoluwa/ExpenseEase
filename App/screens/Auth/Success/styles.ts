import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import colors from "../../../config/colors";
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "../../../config/normalize";

type props = {
  container: ViewStyle;
  btnContainer: ViewStyle;
  checkCtn: ViewStyle;
  confttiCtn: ImageStyle;
  logo: ImageStyle;
  textCtn: ViewStyle;
  text: TextStyle;
  subText: TextStyle;
  btn: TextStyle;
  btnTxt: TextStyle;
};

export const styles = StyleSheet.create<props>({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  btnContainer: {
    marginTop: pixelSizeVertical(80),
  },
  btn: {
    backgroundColor: colors.white,
    width: "90%",
    alignSelf: "center",
  },
  btnTxt: {
    color: colors.primary,
  },
  checkCtn: {
    alignItems: "center",
    bottom: pixelSizeVertical(60),
    height: heightPixel(209),
  },
  confttiCtn: {
    height: heightPixel(350),
    width: widthPixel(390),
    resizeMode: "cover",
  },
  logo: {
    width: widthPixel(209),
    height: heightPixel(209),
    resizeMode: "contain",
  },
  textCtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: fontPixel(28),
    lineHeight: fontPixel(48),
  },
  subText: {
    color: colors.white,
    fontSize: fontPixel(15),
  },
});

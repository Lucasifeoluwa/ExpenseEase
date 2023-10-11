import colors from "../../../../config/colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
  fontPixel,
  heightPixel,
  normalise,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "../../../../config/normalize";

type props = {
  mainCtn: ViewStyle;
  text: TextStyle;
  textCtn: ViewStyle;
  iconCtn: ViewStyle;
};

export const styles = StyleSheet.create<props>({
  mainCtn: {
    backgroundColor: colors.brown,
    height: heightPixel(100),
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: pixelSizeVertical(50),
    flexDirection: "row",
    paddingHorizontal: normalise(20),
  },
  text: {
    fontSize: fontPixel(13.5),
    color: colors.black,
  },
  textCtn: {
    maxWidth: "80%",
  },
  iconCtn: {
    width: widthPixel(50),
    height: heightPixel(50),
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: normalise(1),
    borderColor: colors.grey,
  },
});

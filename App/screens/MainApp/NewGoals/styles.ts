import colors from "../../../config/colors";
import { ViewStyle, StyleSheet, TextStyle, View } from "react-native";
import {
  normalise,
  fontPixel,
  widthPixel,
  pixelSizeHorizontal,
} from "../../../config/normalize";

type props = {
  container: ViewStyle;
  headerTxt: TextStyle;
  amountCtn: ViewStyle;
  txtInput: ViewStyle | TextStyle;
  valueCtn: ViewStyle;
};

const styles = StyleSheet.create<props>({
  amountCtn: {
    height: "auto",
    backgroundColor: colors.secondary,
    padding: normalise(10),
    marginTop: normalise(20),
    borderRadius: normalise(15),
    rowGap: normalise(10),
    marginHorizontal: pixelSizeHorizontal(5),
    elevation: 2,
  },
  container: { padding: normalise(20) },
  headerTxt: {
    fontSize: fontPixel(30),
    fontWeight: "bold",
  },
  txtInput: {
    fontWeight: "bold",
    fontSize: fontPixel(25),
    color: colors.primary,
  },
  valueCtn: {
    flexDirection: "row",
  },
});

export default styles;

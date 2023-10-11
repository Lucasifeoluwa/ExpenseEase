import colors from "../../config/colors";
import {
  heightPixel,
  widthPixel,
  normalise,
  fontPixel,
} from "../../config/normalize";
import { ViewStyle, TextStyle, StyleSheet } from "react-native";

type props = {
  container: ViewStyle;
  leftCtn: ViewStyle;
  iconCtn: ViewStyle;
  tag: TextStyle;
  date: TextStyle;
  time: TextStyle;
  amount: TextStyle;
  amountCtn: ViewStyle;
};

const styles = StyleSheet.create<props>({
  container: {
    paddingHorizontal: normalise(30),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  leftCtn: {
    flexDirection: "row",
  },
  iconCtn: {
    backgroundColor: colors.green,
    width: widthPixel(40),
    height: heightPixel(40),
    borderRadius: normalise(40),
    alignItems: "center",
    justifyContent: "center",
    marginRight: normalise(10),
  },
  tag: {
    fontSize: fontPixel(16),
    fontWeight: "600",
  },
  date: {
    fontSize: fontPixel(14),
  },
  time: {
    fontSize: fontPixel(14),
  },
  amount: {
    fontSize: fontPixel(18),
    fontWeight: "500",
  },
  amountCtn: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

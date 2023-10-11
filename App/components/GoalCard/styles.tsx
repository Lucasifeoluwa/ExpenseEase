import colors from "../../config/colors";
import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import {
  normalise,
  pixelSizeVertical,
  fontPixel,
  heightPixel,
  widthPixel,
} from "../../config/normalize";

interface props {
  container: ViewStyle;
  title: TextStyle;
  amountAchieved: TextStyle;
  amountGoal: TextStyle;
  iconCtn: ViewStyle;
  amountCtn: ViewStyle;
}

const styles = StyleSheet.create<props>({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: pixelSizeVertical(10),
    padding: normalise(10),
    alignItems: "center",
    borderRadius: normalise(20),
  },
  amountAchieved: {
    fontSize: fontPixel(24),
    fontWeight: "600",
  },
  amountCtn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: pixelSizeVertical(10),
  },
  amountGoal: {
    fontSize: fontPixel(16),
    alignItems: "flex-end",
    justifyContent: "flex-end",
    fontWeight: "500",
  },
  iconCtn: {
    alignItems: "center",
    justifyContent: "center",
    height: heightPixel(50),
    width: widthPixel(50),
    borderRadius: 30,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: fontPixel(30),
  },
});

export default styles;

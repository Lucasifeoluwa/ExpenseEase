import { ViewStyle, TextStyle, StyleSheet, ImageStyle } from "react-native";
import colors from "../../../config/colors";
import {
  pixelSizeVertical,
  pixelSizeHorizontal,
  fontPixel,
  heightPixel,
  normalise,
  widthPixel,
} from "../../../config/normalize";

type props = {
  headerCtn: ViewStyle;
  headerTxt: TextStyle;
  headerSubTxt: TextStyle;
  bellCtn: ViewStyle;
  container: ViewStyle;
  percentCtn: ViewStyle;
  percentTextCtn: ViewStyle;
  percentText: ViewStyle;
  percentSubText: ViewStyle;
  percentContent: ViewStyle;
  streakCtn: ViewStyle;
  streakContent: ViewStyle;
  streakText: ViewStyle;
  streakIcon: ViewStyle;
  streakSubText: ViewStyle | TextStyle;
  streakIimg: ImageStyle;
};

export const styles = StyleSheet.create<props>({
  container: {
    paddingHorizontal: normalise(15),
  },
  headerCtn: {
    marginTop: pixelSizeVertical(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTxt: {
    fontSize: fontPixel(20),
  },
  headerSubTxt: {
    fontSize: fontPixel(20),
    fontWeight: "bold",
  },
  bellCtn: {
    height: heightPixel(40),
    width: widthPixel(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: normalise(30),
    borderWidth: 2,
    borderColor: colors.primary,
    //elevation: 1,
  },
  percentCtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: pixelSizeVertical(25),
  },
  percentContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  percentTextCtn: {
    marginLeft: pixelSizeHorizontal(5),
  },
  percentText: {
    fontSize: normalise(16),
  },
  percentSubText: {
    fontSize: normalise(30),
    fontWeight: "bold",
  },
  streakCtn: {
    flexDirection: "row",
    backgroundColor: colors.purple,
    borderRadius: normalise(20),
    alignItems: "center",
    marginVertical: pixelSizeVertical(30),
  },
  streakContent: {
    padding: normalise(20),
    //backgroundColor: "green",
    justifyContent: "space-around",
    width: "55%",
  },
  streakText: {
    fontWeight: "bold",
    fontSize: fontPixel(20),
    lineHeight: normalise(25),
  },
  streakSubText: {
    flexDirection: "row",
    marginTop: normalise(20),
    fontWeight: "bold",
  },
  streakIcon: {
    height: heightPixel(20),
    width: widthPixel(20),
    borderRadius: normalise(10),
    backgroundColor: colors.darkPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  streakIimg: {
    height: "100%",
    width: "45%",
    resizeMode: "cover",
  },
});

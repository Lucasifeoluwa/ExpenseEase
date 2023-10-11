import colors from "../../config/colors";
import {
  normalise,
  pixelSizeVertical,
  fontPixel,
  pixelSizeHorizontal,
} from "../../config/normalize";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface props {
  container: ViewStyle;
  content: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<props>({
  container: {
    paddingHorizontal: pixelSizeHorizontal(30),
    paddingVertical: pixelSizeVertical(10),
    width: "33%",
    flex: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: normalise(5),
    textAlign: "center",
    fontSize: fontPixel(14),
  },
});

export default styles;

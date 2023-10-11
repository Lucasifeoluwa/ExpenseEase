import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size: number;
  backgroundColor?: string;
  iconColor?: string;
}

export default function Icon({
  name,
  size,
  backgroundColor,
  iconColor,
}: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

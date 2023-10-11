import React from "react";
import { View, Pressable } from "react-native";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { normalise } from "../../config/normalize";

interface HeaderProps {
  title?: string;
  tag?: string;
  type?: "others" | "login";
  onPress?: () => void;
}

function Header({ title, tag, onPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={{ marginBottom: 2 }}>
        <MaterialCommunityIcons name="arrow-left" size={normalise(25)} />
      </Pressable>
      <View style={styles.textCtn}>
        <AppText style={styles.tag}>{tag}</AppText>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

export default Header;

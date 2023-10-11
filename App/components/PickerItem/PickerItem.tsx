import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../AppText";
import styles from "./styles";

interface PickerProps {
  label: string;
  onPress: () => void;
  IconComponent: JSX.Element;
}

const PickerItem: React.FC<PickerProps> = ({
  label,
  onPress,
  IconComponent,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        {IconComponent}
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;

import { View, Text } from "react-native";
import React from "react";
import { Check } from "phosphor-react-native";
import AppText from "../AppText";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface TranCardProps {
  id: number;
  icon: JSX.Element;
  tag: string;
  date: string;
  time: string;
  amount: string;
}

const TranCard = ({ icon, tag, time, date, amount }: TranCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCtn}>
        <View style={styles.iconCtn}>{icon}</View>
        <View>
          <AppText style={styles.tag}>{tag}</AppText>
          <AppText style={styles.date}>
            {date} - <AppText style={styles.time}>{time}</AppText>
          </AppText>
        </View>
      </View>
      <View>
        <AppText style={styles.amount}>{amount}</AppText>
      </View>
    </View>
  );
};

export default TranCard;

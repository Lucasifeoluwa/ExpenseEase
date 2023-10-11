import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Calendar, CaretRight } from "phosphor-react-native";
import * as Progress from "react-native-progress";

import AppText from "../AppText";
import { normalise, pixelSizeHorizontal } from "../../config/normalize";
import colors from "../../config/colors";

type GoalCardProps = {
  title: string;
  amountAchieved: number;
  amountGoal: number;
  bg?: string;
};

const GoalCard = ({
  amountAchieved,
  amountGoal,
  title,
  bg = colors.green,
}: GoalCardProps) => {
  const amountPcnt = amountAchieved / amountGoal;
  const amount = Math.ceil(amountPcnt * 100);

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <TouchableOpacity style={styles.iconCtn}>
        <Calendar size={30} color={colors.primary} />
      </TouchableOpacity>
      <View style={{ marginHorizontal: pixelSizeHorizontal(20) }}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.amountCtn}>
          <AppText style={styles.amountAchieved}>${amountAchieved}</AppText>
          <AppText style={styles.amountGoal}>/${amountGoal}</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText
            style={{ fontWeight: "500", marginRight: normalise(5) }}
          >{`$ ${amount}`}</AppText>
          <Progress.Bar progress={amountPcnt} color={colors.primary} />
        </View>
      </View>
      <TouchableOpacity style={[styles.iconCtn]}>
        <CaretRight size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default GoalCard;

import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import AppText from "../../../../components/AppText";
import { CalendarBlank } from "phosphor-react-native";

const NotifCard = () => {
  return (
    <View style={styles.mainCtn}>
      <View style={styles.textCtn}>
        <AppText style={styles.text}>
          You have 3 recurring charges that are due at the end of next month
        </AppText>
      </View>
      <View style={styles.iconCtn}>
        <CalendarBlank weight="fill" />
      </View>
    </View>
  );
};

export default NotifCard;

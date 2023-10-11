import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import AppScreen from "../../../components/AppScreen";
import { styles } from "./styles";
import AppText from "../../../components/AppText";
import { BellRinging, CaretRight, Check } from "phosphor-react-native";
import NotifCard from "./NotifCard/NotifCard";
import PercentageCircle from "react-native-progress-circle";
import colors from "../../../config/colors";
import {
  fontPixel,
  normalise,
  pixelSizeVertical,
} from "../../../config/normalize";
import GoalCard from "../../../components/GoalCard/GoalCard";
import TranCard from "../../../components/TranscationCard/TranCard";
import { transactions } from "../../../static/transactions";
import { HomeScreenProps } from "../../../router/navigationTypes";

interface props {}

export default function Home() {
  return (
    <AppScreen scrollable>
      <View style={styles.container}>
        <View style={styles.headerCtn}>
          <AppText style={styles.headerTxt}>
            Hi, <AppText style={styles.headerSubTxt}>There</AppText>
          </AppText>
          <TouchableOpacity style={styles.bellCtn}>
            <BellRinging size={normalise(25)} />
          </TouchableOpacity>
        </View>
        <View>
          <NotifCard />
        </View>
        <View style={styles.percentCtn}>
          <View style={styles.percentContent}>
            <PercentageCircle
              percent={30}
              radius={25}
              borderWidth={8}
              color={colors.primary}
            />
            <View style={styles.percentTextCtn}>
              <AppText style={styles.percentText}>Today</AppText>
              <AppText style={styles.percentSubText}>
                $185.<AppText style={{ fontSize: normalise(14) }}>80</AppText>
              </AppText>
            </View>
          </View>
          <View
            style={{
              height: "60%",
              backgroundColor: colors.grey,
              width: 2,
            }}
          />
          <View style={styles.percentContent}>
            <PercentageCircle
              percent={70}
              radius={25}
              borderWidth={8}
              color={colors.primary}
            />

            <View style={styles.percentTextCtn}>
              <AppText style={styles.percentText}>March</AppText>
              <AppText style={styles.percentSubText}>
                $1085.<AppText style={{ fontSize: normalise(16) }}>65</AppText>
              </AppText>
            </View>
          </View>
        </View>

        <View style={styles.streakCtn}>
          <View style={styles.streakContent}>
            <AppText style={styles.streakText}>134 Day Save Streak!!</AppText>
            <View style={styles.streakSubText}>
              <AppText
                style={{ flex: 1, fontWeight: "bold", fontSize: fontPixel(16) }}
              >
                Tap to find out More
              </AppText>
              <View style={styles.streakIcon}>
                <CaretRight color="white" size={15} weight="bold" />
              </View>
            </View>
          </View>
          <Image
            source={require("../../../../assets/images/hand.png")}
            style={styles.streakIimg}
          />
        </View>
        <View style={{ marginBottom: pixelSizeVertical(20) }}>
          <AppText style={{ fontSize: fontPixel(40), fontWeight: "500" }}>
            Your Goals
          </AppText>
          <GoalCard
            title="Big Goals"
            amountAchieved={4000}
            amountGoal={40000}
          />
          <GoalCard
            title="That AMG"
            amountAchieved={40000}
            amountGoal={135000}
            bg={colors.mediumprimary}
          />
        </View>

        {transactions.map((item, index) => (
          <TranCard
            key={index}
            id={item.id}
            amount={item.amount}
            date={item.date}
            icon={item.icon}
            tag={item.tag}
            time={item.time}
          />
        ))}
      </View>
    </AppScreen>
  );
}

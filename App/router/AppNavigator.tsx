import React from "react";
import { AppTabParamList } from "./navigationTypes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, ViewStyle } from "react-native";
import { heightPixel, normalise } from "../config/normalize";
import HomeScreen from "../screens/MainApp/Home/Home";
import Profile from "../screens/MainApp/Profile/Profile";
import {
  ChartBar,
  House,
  PlusCircle,
  Target,
  User,
} from "phosphor-react-native";
import NewGoals from "../screens/MainApp/NewGoals/NewGoals";
import TabButton from "../components/TabButton/TabButton";
import ChartsScreen from "../screens/MainApp/Charts/ChartsScreen";
import NotificationScreen from "../screens/MainApp/Notification/NotificationScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

const Tab = createBottomTabNavigator<AppTabParamList>();

interface props {
  routeName?: string;
}

const AppNavigator = ({ routeName }: props) => {
  const navigation = useNavigation();
  /*  const homeFilter = routeName === "HomeScreen";
  const profileFilter = routeName === "ProfileScreen"; */

  const styles = (filter: boolean): ViewStyle => {
    return {
      height: Platform.OS === "android" ? heightPixel(65) : heightPixel(50),
      display: filter ? "flex" : "none",
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "android" ? heightPixel(65) : heightPixel(90),
        },
        tabBarShowLabel: false,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <House size={size} color={color} weight="duotone" />
          ),
        }}
      />
      <Tab.Screen
        name="ChartsScreen"
        component={ChartsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ChartBar size={size} color={color} weight="duotone" />
          ),
        }}
      />
      {
        <Tab.Screen
          name="NewGoals"
          component={NewGoals}
          options={{
            tabBarIcon: ({ size }) => (
              <PlusCircle
                color={colors.primary}
                size={normalise(40)}
                weight="duotone"
              />
            ),
          }}
        />
      }
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Target size={size} color={color} weight="duotone" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} weight="duotone" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

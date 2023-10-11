import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// Auth
export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Success: undefined;
  Splash: undefined;
  CreatePassWord: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

type AuthScreenNavigationProp<Screen extends keyof AuthStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<AuthStackParamList, Screen>,
    BottomTabNavigationProp<AppTabParamList>
  >;
type AuthScreenRouteProp<Screen extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  Screen
>;
export type AuthScreenProps<Screen extends keyof AuthStackParamList> = {
  navigation: AuthScreenNavigationProp<Screen>;
  route: AuthScreenRouteProp<Screen>;
};

//Home

export type HomeStackParamList = {
  Homepage: undefined;
  Notification: undefined;
};

type HomeScreenNavigationProp<Screen extends keyof HomeStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, Screen>,
    BottomTabNavigationProp<AppTabParamList>
  >;
type HomeScreenRouteProp<Screen extends keyof HomeStackParamList> = RouteProp<
  HomeStackParamList,
  Screen
>;
export type HomeScreenProps<Screen extends keyof HomeStackParamList> = {
  navigation: HomeScreenNavigationProp<Screen>;
  route: HomeScreenRouteProp<Screen>;
};

type NewGoalsParamList = {
  NewGoals: undefined;
  TabButtton: undefined;
};

type NewGoalsNavigationProp<Screen extends keyof NewGoalsParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<NewGoalsParamList, Screen>,
    BottomTabNavigationProp<AppTabParamList>
  >;

export type NewGoalsScreenProps<Screen extends keyof NewGoalsParamList> = {
  navigation: NewGoalsNavigationProp<Screen>;
};

//Profile
export type ProfileStackParamList = {
  ProfilePage: undefined;
};

export type MoreStackParamList = {
  NewGoals: undefined;
  Notifications: undefined;
};

type ProfileScreenNavigationProps<Screen extends keyof ProfileStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<ProfileStackParamList, Screen>,
    BottomTabNavigationProp<AppTabParamList>
  >;
type ProfileScreenRouteProp<Screen extends keyof ProfileStackParamList> =
  RouteProp<ProfileStackParamList, Screen>;

export type ProfileScreenProps<Screen extends keyof ProfileStackParamList> = {
  navigation: ProfileScreenNavigationProps<Screen>;
  route: ProfileScreenRouteProp<Screen>;
};

//AppNav

export type AppTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
  NewGoals: NavigatorScreenParams<MoreStackParamList>;
  Notifications: NavigatorScreenParams<MoreStackParamList>;
  ChartsScreen: NavigatorScreenParams<MoreStackParamList>;
  TabButton: NavigatorScreenParams<NewGoalsParamList>;
};

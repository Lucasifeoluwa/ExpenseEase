import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./navigationTypes";
import { useAppSelector } from "../hooks/useAppStore";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import SuccessScreen from "../screens/Auth/Success/SuccessScreen";
import ForgotPasswordScree from "../screens/Auth/ForgotPassword/ForgotPasswordScree";
import OnboardingScreen from "../screens/Auth/Onboarding/OnboardingScreen";
import SplashScreen from "../screens/Auth/SplashScreen/SplashScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { initialAppVisit } = useAppSelector((state) => state.appState);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarHidden: true,
      }}
      initialRouteName={initialAppVisit ? "Onboarding" : "Register"}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScree} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

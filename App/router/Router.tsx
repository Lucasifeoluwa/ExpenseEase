import React, { useState } from "react";
import AuthNavigator from "./AuthNavigator";
import {
  createNavigationContainerRef,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import NavigationTheme from "./NavigationTheme";
import { useAppSelector } from "../hooks/useAppStore";
import { AuthStackScreenProps } from "./navigationTypes";

export default function Router() {
  const [routeName, setRouteName] = useState<string>();
  const ref = createNavigationContainerRef();
  const { visibleRoute } = useAppSelector((state) => state.appState);
  return (
    <NavigationContainer
      theme={NavigationTheme}
      ref={ref}
      onReady={() => {
        setRouteName(ref.getCurrentRoute()?.name);
      }}
      onStateChange={async () => {
        setRouteName(ref.getCurrentRoute()?.name);
      }}
    >
      {/*  {visibleRoute == "auth" ? (
        <AuthNavigator />
      ) : (
        <AppNavigator routeName={routeName} />
      )} */}

      <AppNavigator />
    </NavigationContainer>
  );
}

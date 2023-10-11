import React from "react";
import Router from "./App/router/Router";
import { store, persistor } from "./App/store";
import { PersistGate } from "redux-persist/es/integration/react";
import Splash from "./App/screens/Auth/SplashScreen/SplashScreen";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

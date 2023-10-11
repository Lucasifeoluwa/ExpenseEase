import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import appStateReducer from "./slices/appState";

const rootReducer = combineReducers({
  appState: appStateReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["appState"],
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  visibleRoute: "auth" | "app";
  initialAppVisit: boolean;
}

const initialState: AppState = {
  visibleRoute: "auth",
  initialAppVisit: true,
};

const appStateSlice = createSlice({
  initialState,
  name: "appStateSlice",
  reducers: {
    setVisibleRoute(state, action: PayloadAction<"auth" | "app">) {
      state.visibleRoute = action.payload;
    },
    setInitialAppVisit(state, action: PayloadAction<boolean>) {
      state.initialAppVisit = action.payload;
    },
  },
});

export const { setVisibleRoute, setInitialAppVisit } = appStateSlice.actions;
export default appStateSlice.reducer;

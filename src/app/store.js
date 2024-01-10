import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/AuthSlice";
import goalReducer from "../Features/Goals/goalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer,
  },
});

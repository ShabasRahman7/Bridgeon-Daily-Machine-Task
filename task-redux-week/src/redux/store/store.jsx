import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/fetchSlice";

export const store = configureStore({
  reducer:{
    user:userReducer,
  },
});
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import category from "./features/catSlice";

export const store = configureStore({
  reducer: {
    category,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "../features/Stock/stockSlice";
export const store = configureStore({
  reducer: {
    stock: stockSlice,
  },
});

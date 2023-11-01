import { createSlice } from "@reduxjs/toolkit";
import {
  searchSymbol,
  fetchStockDetails,
  fetchQuote,
  fetchHistory,
} from "./stockService";
const initialState = {
  data: {
    a: [],
    b: [],
    c: [],
    d: [],
  },
};

export const stockSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchSymbol.fulfilled, (state, action) => {
        state.data.a = action.payload;
        console.log(action.payload);
      })
      .addCase(searchSymbol.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchStockDetails.fulfilled, (state, action) => {
        state.data.b = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchStockDetails.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.data.c = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.data.d = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default stockSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { basePath } from "../../utils";
import axios from "axios";

const token = "cl0u3mpr01qn90knf2s0cl0u3mpr01qn90knf2sg";

export const searchSymbol = createAsyncThunk(
  "searchsymbol",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get(
        `${basePath}/search?q=${payload}&token=${token}`
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
export const fetchStockDetails = createAsyncThunk(
  "stock_details",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get(
        `${basePath}/stock/profile2?symbol=${payload}&token=${token}`
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const fetchQuote = createAsyncThunk(
  "quote",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get(
        `${basePath}/quote?symbol=${payload}&token=${token}`
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const fetchHistory = createAsyncThunk(
  "fetchhsymbol",
  async (payload, thunkApi) => {
    const { symbol, resolution, from, to } = payload;
    try {
      const res = await axios.get(
        `${basePath}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

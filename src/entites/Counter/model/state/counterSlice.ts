import { createSlice } from "@reduxjs/toolkit";
import { Counter } from "../types";

const initialState: Counter = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Counter) => {
      state.value += 1;
    },
    decrement: (state: Counter) => {
      state.value -= 1;
    },
  },
});

export const { decrement, increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

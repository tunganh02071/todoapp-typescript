/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export interface CounterState {
  count: number | null;
}

const initialState: CounterState = {
  count: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (_.isNil(state.count)) {
        return;
      }
      state.count += 1;
    },
    decrement: (state) => {
      if (_.isNil(state.count)) {
        return;
      }
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<CounterState["count"]>) => {
      const newCount = action.payload;
      state.count = newCount;
    },
  },
});

export const { increment, decrement, setCount } = counterSlice.actions;

export default counterSlice.reducer;

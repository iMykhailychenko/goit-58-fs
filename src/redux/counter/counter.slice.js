import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incrementAction: state => {
      return state + 1;
    },
    decrementAction: state => {
      return state - 1;
    },
  },
});

export const { incrementAction, decrementAction } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

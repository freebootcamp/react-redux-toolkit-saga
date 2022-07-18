import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSignal: "RED",
};

export const signalSlice = createSlice({
  name: "signal",
  initialState,
  reducers: {
    changeSignal: (state, action) => {
      state.currentSignal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSignal } = signalSlice.actions;

export default signalSlice.reducer;

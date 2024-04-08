import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: 0,
};

const userSlice = createSlice({
  name: "useSlice",
  initialState,
  reducers: {
    onlike: (state) => {
      state.like += 1;
    },
    ondeslike: (state) => {
      state.like -= 1;
    },
  },
});

export const { onlike, ondeslike } = userSlice.actions;
export default userSlice.reducer;
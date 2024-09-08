import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    user: {},
  },
  reducers: {
    setUserDetails: (state, { payload }) => {
      return { ...state, user: payload };
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Export actions for use in components
export const { setUserDetails } = userSlice.actions;

// Export the reducer to be included in the store
export default userSlice.reducer;

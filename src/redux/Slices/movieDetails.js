import { createSlice } from "@reduxjs/toolkit";

const movieDetails = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    add(state, action) {
      return action.payload;
    },
  },
});

export default movieDetails.reducer;
export const { add } = movieDetails.actions;

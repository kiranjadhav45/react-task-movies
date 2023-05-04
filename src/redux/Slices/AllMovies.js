import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchProducts", async (qurry) => {
  const q = qurry ? qurry : "all";
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
  return response.json();
});

const getAllMovies = createSlice({
  name: "AllProducts",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default getAllMovies.reducer;
// export const { add, remove } = addProductsSlice.actions;

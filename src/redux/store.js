import { configureStore } from "@reduxjs/toolkit";
import allMovies from "./Slices/AllMovies";
import movieDetails from "./Slices/movieDetails";

export default configureStore({
  reducer: {
    allMovies: allMovies,
    movieDetails: movieDetails,
  },
});

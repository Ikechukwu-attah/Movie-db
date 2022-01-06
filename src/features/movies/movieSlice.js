import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieApiKey } from "../../common/apis/movieApiKeys";
import MovieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async(term) => {


        const response = await MovieApi.get(
            `?apikey=${MovieApiKey}&s=${term}&type=movie`
        );

        return response.data;

    },

);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async(term) => {


        const response = await MovieApi.get(
            `?apikey=${MovieApiKey}&s=${term}&type=series`
        );

        return response.data;

    },

);

export const fetchAsyncDetails = createAsyncThunk(
    "movies/fetchAsyncDetails",
    async(id) => {
        const response = await MovieApi.get(
            `?apikey=${MovieApiKey}&i=${id}&Plot=full`
        );

        return response.data;

    },

);

const initialState = {
    movies: {},
    shows: {},
    selectedDetails: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload;
        // },

        removeSelectedMovieOrShow: (state) => {
            state.selectedDetails = {};
        },
    },


    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },

        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return {...state, movies: payload };
        },

        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },

        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return {...state, shows: payload };
        },

        [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return {...state, selectedDetails: payload };
        },
    },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedDetails = (state) => state.movies.selectedDetails;
export default movieSlice.reducer;
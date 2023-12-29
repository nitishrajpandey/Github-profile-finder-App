
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// require('dotenv').config()

const config = {
    headers: {
        Authorization: `Token ${import.meta.env.VITE_GITHUB_TOKEN_KEY}`,
    },
};

export const fetchGithubUserRepo = createAsyncThunk("search/githubUserRepo", async (username) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, config);
    return data;
});

export const fetchGithubUser = createAsyncThunk("search/githubUser", async (username) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}`, config);
    return data;
});



export const searchSlice = createSlice({
    name: "search",
    initialState: {
        isLoadingUser: false,
        userData: null,
        isErrorUser: false,
        isLoadingRepo: false,
        repoData: null,
        isErrorRepo: false,
    },
    extraReducers: (builder) => {

        builder.addCase(fetchGithubUserRepo.pending, (state) => {
            state.isLoadingRepo = true;
        });

        builder.addCase(fetchGithubUserRepo.fulfilled, (state, action) => {
            state.isLoadingRepo = false;
            state.isErrorRepo = false;
            state.repoData = action.payload;
        });

        builder.addCase(fetchGithubUserRepo.rejected, (state, action) => {
            state.isLoadingRepo = false;
            console.log("error", action.payload);
            state.isErrorRepo = true;
        });


        builder.addCase(fetchGithubUser.pending, (state) => {
            state.isLoadingUser = true;
            state.isErrorUser = false
        });

        builder.addCase(fetchGithubUser.fulfilled, (state, action) => {
            state.isLoadingUser = false;
            state.isErrorUser = false;
            state.userData = action.payload;
        });

        builder.addCase(fetchGithubUser.rejected, (state, action) => {
            state.isLoadingUser = false;
            console.log("error", action.payload);
            state.isErrorUser = true;
        });


    },
});

export default searchSlice.reducer;

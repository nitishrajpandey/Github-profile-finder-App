// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



// export const fetchGithubUser = createAsyncThunk("search/githubUserProfile", async (username) => {
//     const { data } = await axios.get(`https://api.github.com/users/${username}`)
//     return data
// })

// export const fetchGithubUserRepo = createAsyncThunk("search/githubUserRepo", async (username) => {
//     const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
//     return data
// })


// export const searchSlice = createSlice({
//     name: "search",
//     initialState: {
//         isLoding: false,
//         Data: null,
//         isError: false
//     },
//     extraReducers: (builder) => {

//         builder.addCase(fetchGithubUser.pending, (state) => {
//             state.isLoding = true
//         })

//         builder.addCase(fetchGithubUser.fulfilled, (state, action) => {
//             state.isLoding = false,
//                 state.isError = false,
//                 state.Data = action.payload
//         })
//         builder.addCase(fetchGithubUser.rejected, (state, action) => {
//             state.isLoding = false,
//                 console.log("error", action.payload)
//             state.isError = true
//         })
//     }
// })


// export default searchSlice.reducer




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGithubUserRepo = createAsyncThunk("search/githubUserRepo", async (username) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
    return data;
});

export const fetchGithubUser = createAsyncThunk("search/githubUser", async (username) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}`);
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

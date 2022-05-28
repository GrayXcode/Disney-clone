import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    trending: null,
    original: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            
        }
    }
})
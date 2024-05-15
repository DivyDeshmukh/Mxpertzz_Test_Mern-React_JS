import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storiesData: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setStoriesData: (state, action) => {
            // console.log(action.payload);
            state.storiesData = action.payload;
        }
    }
});

export const {setStoriesData} = dataSlice.actions;

export default dataSlice.reducer;
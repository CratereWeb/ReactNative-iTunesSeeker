import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "tracksToAddToTracksBase"
const tracksToAddToTracksBaseSlice = createSlice({
    name: "tracksToAddToTracksBase",
    initialState: [],
    reducers: {
        addTrack: (state, action) => {
            state.push(action.payload);
        },
        removeTrack: (state, action) => {
            state = state.filter(track => track !== action.payload);
        }
    }
})
//~


export const { addTrack, removeTrack } = tracksToAddToTracksBaseSlice.actions;
export const tracksToAddToTracksBaseSliceReducer = tracksToAddToTracksBaseSlice.reducer;
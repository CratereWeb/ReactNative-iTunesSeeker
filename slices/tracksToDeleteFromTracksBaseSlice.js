import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "tracksToDeleteFromTracksBase"
const tracksToDeleteFromTracksBaseSlice = createSlice({
    name: "tracksToDeleteFromTracksBase",
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

export const { addTrack, removeTrack } = tracksToDeleteFromTracksBaseSlice.actions;
export const tracksToDeleteFromTracksBaseSliceReducer = tracksToDeleteFromTracksBaseSlice.reducer;
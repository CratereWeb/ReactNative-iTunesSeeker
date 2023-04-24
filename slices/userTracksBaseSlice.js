import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "userTracksBase"
const userTracksBaseSlice = createSlice({
    name: "userTracksBase",
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

export const { addTrack, removeTrack } = userTracksBaseSlice.actions;
export const userTracksBaseSliceReducer = userTracksBaseSlice.reducer;
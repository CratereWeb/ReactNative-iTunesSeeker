import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "currentTrack"
const currentTrackSlice = createSlice({
    name: "currentTrack",
    initialState: {},
    reducers: {
        setTrack: (state, action) => {
            state = action.payload;
        }
    }
})
//~



export const { setTrack } = currentTrackSlice.actions;
export const currentTrackSliceReducer = currentTrackSlice.reducer;
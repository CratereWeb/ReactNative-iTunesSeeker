/*
Slice du Store
Correpond à la sélection de morceaux que l'utilisateur prévoie de supprimer de sa trackbase, lorsqu'il navigue dans la liste des morceaux enregistrés dans sa trackbase via l'écran UserTracksBaseScreen.
*/

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
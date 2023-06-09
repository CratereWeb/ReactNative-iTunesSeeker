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
        addTrackToDeleteList: (state, action) => {
            state.push(action.payload);
        },
        removeTrackFromDeleteList: (state, action) => {
            state = state.filter(track => track.trackId !== action.payload.trackId);
            return state;
        }
    }
})
//~

export const { addTrackToDeleteList, removeTrackFromDeleteList} = tracksToDeleteFromTracksBaseSlice.actions;
export const tracksToDeleteFromTracksBaseSliceReducer = tracksToDeleteFromTracksBaseSlice.reducer;
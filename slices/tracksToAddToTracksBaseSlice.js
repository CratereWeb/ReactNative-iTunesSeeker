/*
Slice du Store
Correpond à la sélection de morceaux que l'utilisateur prévoie d'ajouter à sa trackbase, lorsqu'il navigue dans la liste des morceaux renvoyée par l'API iTunes via l'écran SearchTracksScreen.
*/

import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "tracksToAddToTracksBase"
const tracksToAddToTracksBaseSlice = createSlice({
    name: "tracksToAddToTracksBase",
    initialState: [],
    reducers: {
        addTrackToAddList: (state, action) => {
            state.push(action.payload);
        },
        removeTrackFromAddList: (state, action) => {
            console.log("Avant :", state.length);
            console.log(action.payload.trackId, "(from tracksToAddToTracksBaseSlice)");
            state = state.filter(track => track.trackId !== action.payload.trackId);
            console.log("Après :", state.length);
            return state;
        },
        emptyTracksToAddList: (state, action) => {
            state = [];
        }
    }
})
//~


export const { addTrackToAddList, removeTrackFromAddList, emptyTracksToAddList } = tracksToAddToTracksBaseSlice.actions;
export const tracksToAddToTracksBaseSliceReducer = tracksToAddToTracksBaseSlice.reducer;
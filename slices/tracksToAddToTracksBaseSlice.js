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
            state = state.filter(track => track !== action.payload);
        }
    }
})
//~


export const { addTrackToAddList, removeTrackFromAddList } = tracksToAddToTracksBaseSlice.actions;
export const tracksToAddToTracksBaseSliceReducer = tracksToAddToTracksBaseSlice.reducer;
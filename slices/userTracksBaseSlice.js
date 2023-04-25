/*
Slice du Store
Correpond à la trackbase, c'est-à-dire la base de données de morceaux enregistrés par l'utilisateur.
*/

import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "userTracksBase"
const userTracksBaseSlice = createSlice({
    name: "userTracksBase",
    initialState: [],
    reducers: {
        addTrackToUserTracksBase: (state, action) => {
            state.push(action.payload);
        },
        removeTrackFromUserTracksBase: (state, action) => {
            state = state.filter(track => track !== action.payload);
        }
    }
})
//~

export const { addTrackToUserTracksBase, removeTrackFromUserTracksBase } = userTracksBaseSlice.actions;
export const userTracksBaseSliceReducer = userTracksBaseSlice.reducer;
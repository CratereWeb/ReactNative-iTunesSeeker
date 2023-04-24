/*
Slice du Store
Correspond au morceau dont l'utilisateur souhaite visualiser la fiche via l'écran Track.
Se met à jour lorsque l'utilisateur clique sur un morceau dans une liste dans l'un des écrans UserTracksBaseScreen ou SearchTracksScreen,
et est récupéré par le composant Track pour qu'il affiche les données de ce morceau.
*/

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
/*
Slice du Store
Correpond à la requête de l'utilisateur à l'API iTunes et à la liste de morceaux qu'elle renvoie dans sa réponse.
*/

import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "userAPIRequestSlice" qui stocke la dernière requête saisie par l'utilisateur
const userAPIRequestSlice = createSlice({
    name: "userAPIRequest",
    initialState: {
        query: "",
        results: []
    },
    reducers: {
        setUserAPIRequestQuery: (state, action) => {
            state.query = action.payload;
        },
        emptyUserAPIRequestQuery: (state, action) => {
            state.query = initialState;
        },
        setUserAPIRequestResults: (state, action) => {
            state.results = action.payload;
        },
        emptyUserAPIRequestResults: (state, action) => {
            state.results = initialState;
        }
    }
})
//~

export const { setUserAPIRequestQuery, emptyUserAPIRequestQuery, setUserAPIRequestResults, emptyUserAPIRequestResults } = userAPIRequestSlice.actions;
export const userAPIRequestSliceReducer = userAPIRequestSlice.reducer;
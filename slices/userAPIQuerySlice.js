import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "userAPIQuerySlice" qui stocke la dernière requête saisie par l'utilisateur
const userAPIQuerySlice = createSlice({
    name: "userAPIQuery",
    initialState: {
        query: "",
        results: []
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        emptyQuery: (state, action) => {
            state.query = initialState;
        },
        setResults: (state, action) => {
            state.results = action.payload;
        },
        emptyResults: (state, action) => {
            state.results = initialState;
        }
    }
})
//~

export const { setQuery, emptyQuery, setResults, emptyResults } = userAPIQuerySlice.actions;
export const userAPIQuerySliceReducer = userAPIQuerySlice.reducer;
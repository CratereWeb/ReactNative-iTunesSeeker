import { createSlice } from "@reduxjs/toolkit"

//~ Créer la slice "userAPIQuerySlice" qui stocke la dernière requête saisie par l'utilisateur
const userAPIQuerySlice = createSlice({
    name: "userAPIQuery",
    initialState: "",
    reducers: {
        setQuery: (state, action) => {
            state = action.payload;
        },
        emptyQuery: (state, action) => {
            state = initialState;
        }
    }
})
//~

export const { setQuery } = userAPIQuerySlice.actions;
export const userAPIQuerySliceReducer = userAPIQuerySlice.reducer;
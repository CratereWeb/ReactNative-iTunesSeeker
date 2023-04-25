import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userAPIRequestSliceReducer } from "./slices/userAPIRequestSlice";
import { currentTrackSliceReducer } from "./slices/currentTrackSlice";
import { userTracksBaseSliceReducer } from "./slices/userTracksBaseSlice";
import { tracksToAddToTracksBaseSliceReducer } from "./slices/tracksToAddToTracksBaseSlice";
import { tracksToDeleteFromTracksBaseSliceReducer } from "./slices/tracksToDeleteFromTracksBaseSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from 'redux-thunk';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({
    userAPIRequest : userAPIRequestSliceReducer,
    currentTrack : currentTrackSliceReducer,
    userTracksBase : userTracksBaseSliceReducer,
    tracksToAddToTracksBase : tracksToAddToTracksBaseSliceReducer,
    tracksToDeleteFromTracksBase : tracksToDeleteFromTracksBaseSliceReducer,
})

const persistConfig = { key: "root", storage: AsyncStorage }
const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: [thunk]
    }
)

export const persistor = persistStore(store);
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertReducer from "./slices/alert/alertSlice";

const persistConfig = {
    key: 'root',
    storage
}

const persistedAlertReducer = persistReducer(persistConfig, alertReducer)

export const store = configureStore({
    reducer: {
        alert: persistedAlertReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})
export const persistedStore = persistStore(store);
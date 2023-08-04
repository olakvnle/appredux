import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../Redux/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist/";

const persistCofig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistCofig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({})
});

export const persistor = persistStore(store);
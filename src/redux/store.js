import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./authSlice/authSlice";
import { noticesReducer } from "./noticesSlice/noticesSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        notices: noticesReducer
    },
    middleware,
    // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

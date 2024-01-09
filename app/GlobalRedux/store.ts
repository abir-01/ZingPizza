'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/CartMenu/cartmenu';
import storage from 'redux-persist/lib/storage';
// import AsyncStorage from '@react-native-community/async-storage';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { persistStore, persistReducer ,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist';

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const persistConfig = {
    key: 'root',
    storage: createWebStorage('local') ,
    version:1
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    // devTools: devToolsCompose,
    reducer: persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

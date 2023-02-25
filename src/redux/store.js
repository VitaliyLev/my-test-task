import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from "./favoritePokemon/slice";

//all reducers
const rootReducer = {
  favorite: favoriteReducer,
  // darkTheme: darkThemeReducer,
};

//record in the storage of an array of carts
const persistedReducer = persistReducer(
  {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
  },
  combineReducers(rootReducer)
);

//redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//redux persist store
export const persistor = persistStore(store);
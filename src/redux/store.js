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

//reducers
import { favoriteReducer } from './favoritePokemon/slice';
import { themeReducer } from './themeMode/slice';

//config favorite
const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

//config theme
const themePersistConfig = {
  key: 'isDarkTheme',
  storage,
};

//all reducers
const rootReducer = combineReducers({
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  themeToggle: persistReducer(themePersistConfig, themeReducer),
});

//save reducer in localStorage
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer
);

//store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };
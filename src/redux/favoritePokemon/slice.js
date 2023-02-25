import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoritePokemon: [],
  },
  reducers: {
    addFavoritePokemon: (state, action) => {
      const name = action.payload.name;
      const isPokemon = state.favoritePokemon.find(item => item.name === name);
      if (!isPokemon) {
        // const { name, sprites, abilities, types } = action.payload;
        // state.favoritePokemon.push({ name, sprites, abilities, types });
        state.favoritePokemon.push(action.payload);
      }
    },

    removeFavoritePokemon: (state, action) => {
      const index = state.favoritePokemon.findIndex(
        pokemon => pokemon.id === action.payload
      );
      if (index !== -1) {
        state.favoritePokemon.splice(index, 1);
      }
    },
  },
});

export const { addFavoritePokemon, removeFavoritePokemon } =
  favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
export default favoriteSlice.reducer;

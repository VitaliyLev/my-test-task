import { createSlice } from '@reduxjs/toolkit';

//favorite slice
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoritePokemon: [],
  },
  reducers: {
    //add pokemon
    addFavoritePokemon: (state, action) => {
      const name = action.payload.name;
      const isPokemon = state.favoritePokemon.find(item => item.name === name);
      if (!isPokemon) {
        state.favoritePokemon.push(action.payload);
      }
    },

    //remove pokemon
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

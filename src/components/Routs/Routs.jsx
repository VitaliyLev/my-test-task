import Header from 'components/Header/Header';
import PokemonInfo from 'components/PokemonInfo/PokemonInfo';
import Favorite from 'pages/FavoritePage/Favorite';
import PokemonPage from 'pages/PokemonPage/PokemonPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//app routes
export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<PokemonPage />} />
        <Route path="favorite" element={<Favorite />} />

        <Route path="pokemonList" element={<PokemonPage />}>
          <Route path=":name" element={<PokemonInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}

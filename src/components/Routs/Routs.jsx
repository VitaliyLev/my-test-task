import PokemonInfo from 'components/PokemonInfo/PokemonInfo';
import PokemonPage from 'pages/PokemonPage/PokemonPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Routs() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="pokemonList" element={<PokemonPage />}>
          <Route path=":name" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </>
  );
}

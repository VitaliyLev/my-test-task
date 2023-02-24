import React from 'react';

// import PokemonInfo from 'components/PokemonInfo/PokemonInfo';
import PokemonList from 'components/PokemonList/PokemonList';
import { Outlet } from 'react-router-dom';

//home page Pokemon
export default function PokemonPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <PokemonList />
      {/* <PokemonInfo /> */}
      <Outlet />
    </div>
  );
}

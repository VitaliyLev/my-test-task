//компонент з пагінацією, який містить список покемонів та кнопки для пагінації:
// Pagination;
// PokemonCard;

import { fetchPokemonList } from 'apiServices/fetchPokemonList';
import React, { useCallback, useEffect, useState } from 'react';

import Pagination from './pagination/Pagination';
import PokemonCard from './pokemonCard/PokemonCard';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);

  //limit pokemons
  const limit = 12;

  const fetchPokemon = useCallback(async () => {
    const pokemonData = await fetchPokemonList(page, limit);
    setPokemonList(pokemonData);
  }, [page, limit]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <>
      <div style={{ flexDirection: 'column', minWidth: 400 }}>
        <div>PokemonList</div>
        <ul>
          {pokemonList.map(pokemon => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </ul>

        <Pagination setPage={setPage} />
      </div>
    </>
  );
}

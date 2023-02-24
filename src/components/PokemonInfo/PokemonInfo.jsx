// компонент, який відображає інформацію про вибраного покемона:
// PokemonName - компонент, який відображає ім'я покемона
// PokemonImage - компонент, який відображає зображення покемона
// PokemonAbilities - компонент, який відображає список здібностей покемона
// PokemonTypes - компонент, який відображає список типів покемона

import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from 'apiServices/fetchPokemonDetails';
import PokemonInfoCard from './PokemonInfoCard/PokemonInfoCard';

export default function PokemonInfo() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const getPokemonDetails = useCallback(async () => {
    const pokemonData = await fetchPokemonDetails(name);
    setPokemonDetails(pokemonData);
  }, [name]);

  useEffect(() => {
    getPokemonDetails();
  }, [getPokemonDetails]);

  return (
    <>
      <div style={{ flexDirection: 'column', minWidth: 400 }}>
        <div>PokemonInfo</div>
        <PokemonInfoCard pokemonDetails={pokemonDetails} />
      </div>
    </>
  );
}

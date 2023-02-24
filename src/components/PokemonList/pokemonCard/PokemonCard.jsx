//компонент, який відображає інформацію про покемона у вигляді картки:
// PokemonName - компонент, який відображає ім/${name}`я покемона
// PokemonImage - компонент, який відображає зображення покемона
import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  const { name } = pokemon;

  return (
    <>
      <li>
        <Link to={`/pokemonList/${name}`}>{name}</Link>
      </li>
    </>
  );
}

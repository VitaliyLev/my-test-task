import React from 'react';

export default function PokemonInfoCard({ pokemonDetails }) {
  const { name, sprites, abilities, types } = pokemonDetails;

  const pokemonImageUrl = sprites?.back_default;

  const pokemonAbility = abilities?.map((item, index) => (
    <li key={index}>{item.ability.name}</li>
  ));

  const pokemonTypes = types?.map((item, index) => (
    <li key={index}>{item.type.name}</li>
  ));

  return (
    <>
      {pokemonDetails && (
        <>
          <p>{name}</p>
          <img src={pokemonImageUrl} alt={name} />
          <p>Ability:</p>
          <ul>{pokemonAbility}</ul>
          <p>Types:</p>
          <ul>{pokemonTypes}</ul>
        </>
      )}
    </>
  );
}

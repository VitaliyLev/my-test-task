//компонент, який відображає інформацію про покемона у вигляді картки:
// PokemonName - компонент, який відображає ім/${name}`я покемона
// PokemonImage - компонент, який відображає зображення покемона

import React, { useEffect, useRef } from 'react';
import { StyledLink } from './PokemonCard.styled';

export default function PokemonCard({ pokemon }) {
  const { name } = pokemon;

  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [linkRef]);

  return (
    <>
      <StyledLink ref={linkRef} to={`/pokemonList/${name}`}>
        {name}
      </StyledLink>
    </>
  );
}

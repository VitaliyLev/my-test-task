import React, { useEffect, useRef } from 'react';
import { StyledLink } from './PokemonCard.styled';

// a component that shows information about a Pokemon in the form of a card
export default function PokemonCard({ pokemon }) {
  const { name } = pokemon;
  const linkRef = useRef(null);

  //scroll to  pokemon details in mobile
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

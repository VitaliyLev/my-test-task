import React from 'react';
import { Outlet } from 'react-router-dom';

import PokemonList from 'components/PokemonList/PokemonList';
import { StyledContainer } from './PokemonPage.styled';

//home page Pokemon
export default function PokemonPage() {
  return (
    <StyledContainer fixed>
      <PokemonList />
      <Outlet />
    </StyledContainer>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favoritePokemon/selectors';

import { Grid } from '@mui/material';

import FavoritePokemonCard from '../../components/FavoriteCard/FavoritePokemonCard';
import { StyledContainer } from 'pages/PokemonPage/PokemonPage.styled';

//favorite polemons page
export default function Favorite() {
  const pokemonDetails = useSelector(selectFavorite);

  return (
    <StyledContainer fixed>
      <Grid container spacing={2}>
        {pokemonDetails?.map(item => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            style={{ position: 'relative' }}
          >
            <FavoritePokemonCard item={item} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

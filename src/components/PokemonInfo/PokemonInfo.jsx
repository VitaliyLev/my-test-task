// компонент, який відображає інформацію про вибраного покемона:
// PokemonName - компонент, який відображає ім'я покемона
// PokemonImage - компонент, який відображає зображення покемона
// PokemonAbilities - компонент, який відображає список здібностей покемона
// PokemonTypes - компонент, який відображає список типів покемона

import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from 'apiServices/fetchPokemonDetails';
import PokemonInfoCard from './PokemonInfoCard/PokemonInfoCard';
import { StyledTypography, StyledBox } from './PokemonInfo.styled';
import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addFavoritePokemon } from 'redux/favoritePokemon/slice';

export default function PokemonInfo() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const linkRef = useRef(null);

  const dispatch = useDispatch();
  const handleAddFavoritePokemon = pokemon => {
    dispatch(addFavoritePokemon(pokemon));
  };

  const getPokemonDetails = useCallback(async () => {
    const pokemonData = await fetchPokemonDetails(name);
    setPokemonDetails(pokemonData);
  }, [name]);

  useEffect(() => {
    getPokemonDetails();
  }, [getPokemonDetails]);

  return (
    <>
      <StyledBox ref={linkRef} style={{ flexDirection: 'column' }}>
        <StyledTypography variant="h6" component="h2">
          PokemonInfo
        </StyledTypography>
        <Button
          variant="contained"
          size="small"
          sx={{ mb: 1 }}
          onClick={() => handleAddFavoritePokemon(pokemonDetails)}
        >
          Add to Favotite
        </Button>
        <PokemonInfoCard pokemonDetails={pokemonDetails} />
      </StyledBox>
    </>
  );
}

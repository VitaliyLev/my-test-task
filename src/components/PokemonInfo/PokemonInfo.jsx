import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addFavoritePokemon } from 'redux/favoritePokemon/slice';
import { fetchPokemonDetails } from 'apiServices/fetchPokemonDetails';

import PokemonInfoCard from './PokemonInfoCard/PokemonInfoCard';
import { StyledTypography, StyledBox } from './PokemonInfo.styled';
import { Button } from '@mui/material';

//component that shows information about the selected Pokemon
export default function PokemonInfo() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const linkRef = useRef(null);
  const dispatch = useDispatch();

  //get pokemon details by name pokemon
  const getPokemonDetails = useCallback(async () => {
    const pokemonData = await fetchPokemonDetails(name);
    setPokemonDetails(pokemonData);
  }, [name]);

  useEffect(() => {
    getPokemonDetails();
  }, [getPokemonDetails]);

  //add pokemon to the favotite page
  const handleAddFavoritePokemon = pokemon => {
    dispatch(addFavoritePokemon(pokemon));
  };

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

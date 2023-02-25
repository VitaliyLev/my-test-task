//компонент з пагінацією, який містить список покемонів та кнопки для пагінації:
import { useState, useEffect, useCallback } from 'react';
import { fetchPokemonList } from 'apiServices/fetchPokemonList';
import PokemonCard from './pokemonCard/PokemonCard';
import PaginationBtn from './pagination/Pagination';

import { Grid, CardContent } from '@mui/material';
import { StyledBox, StyledTypography, StyledCard } from './PokemonList.styled';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const limit = 12;

  const handleChangePage = (_, value) => {
    setPage(value);
  };

  const fetchPokemon = useCallback(async () => {
    const pokemonData = await fetchPokemonList(page, limit);
    setPokemonList(pokemonData.results);
    setPageCount(pokemonData.count);
  }, [page, limit]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  const paginationSettings = {
    setPage,
    limit,
    pageCount,
    page,
    handleChangePage,
  };

  return (
    <StyledBox>
      <StyledTypography variant="h6" component="h2">
        PokemonList
      </StyledTypography>

      <Grid container spacing={2}>
        {pokemonList?.map(pokemon => (
          <Grid item key={pokemon.name} xs={8} sm={6} md={4}>
            <StyledCard>
              <CardContent style={{ textAlign: 'center' }}>
                <PokemonCard pokemon={pokemon} />
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <PaginationBtn paginationSettings={paginationSettings} />
    </StyledBox>
  );
}

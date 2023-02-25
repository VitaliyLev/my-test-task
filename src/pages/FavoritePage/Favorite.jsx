import { Button } from '@mui/material';
import React from 'react';

import { useDispatch } from 'react-redux';
import { removeFavoritePokemon } from 'redux/favoritePokemon/slice';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favoritePokemon/selectors';

export default function Favorite() {
  const dispatch = useDispatch();
  const handleRemoveFavoritePokemon = id => {
    dispatch(removeFavoritePokemon(id));
  };
  const pokemonDetails = useSelector(selectFavorite);

  return (
    <>
      <div>favorite</div>

      <ul>
        {pokemonDetails?.map(item => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <Button onClick={() => handleRemoveFavoritePokemon(item.id)}>
              Delete from Favorite
            </Button>
            <img src={item.sprites?.back_default} alt={item.name} />
            <ul>
              <p>Ability:</p>
              {item.abilities?.map((ability, index) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
            <ul>
              <p>Type:</p>
              {item.types?.map((type, index) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
            <p>base_experience: {item.base_experience}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

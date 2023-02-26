import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavoritePokemon } from 'redux/favoritePokemon/slice';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@emotion/react';

//favorite card
export default function FavoritePokemonCard({ item }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  //delete favorite card
  const handleRemoveFavoritePokemon = id => {
    dispatch(removeFavoritePokemon(id));
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={item.sprites?.back_default}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Ability:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.abilities?.map((ability, index) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Types:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.types?.map((type, index) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Typography variant="body2" color="text.secondary">
          Base experience: {item.base_experience}
        </Typography>
      </CardContent>
      <IconButton
        onClick={() => handleRemoveFavoritePokemon(item.id)}
        sx={{
          position: 'absolute',
          top: 20,
          right: 10,
          color: theme.text,
          '&:hover': {
            color: theme.palette.error.main,
          },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

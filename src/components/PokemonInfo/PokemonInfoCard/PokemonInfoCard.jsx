import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';

export default function PokemonInfoCard({ pokemonDetails }) {
  const theme = useTheme();
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
          <Typography
            sx={{ color: theme.palette.text.primary, textAlign: 'center' }}
          >
            Name: {name}
          </Typography>
          <img src={pokemonImageUrl} alt={name} width="150px" />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Ability:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{pokemonAbility}</Typography>
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
              <Typography>{pokemonTypes}</Typography>
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </>
  );
}

import styled from '@emotion/styled';
import { Box, Typography, Card } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',

  [theme.breakpoints.between(0, 600)]: {
    marginLeft: '25%',

    width: '300px',
    marginBottom: '25px',
  },
  [theme.breakpoints.between(600, 900)]: {
    width: '350px',
  },
  [theme.breakpoints.between(900, 1100)]: {
    width: '500px',
  },
  [theme.breakpoints.up(1100)]: {
    width: '600px',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto',
  color: theme.palette.text.primary,
  marginBottom: '15px',
}));

export const StyledCard = styled(Card)`
  &:hover {
    transform: scale(1.1);
  }
`;

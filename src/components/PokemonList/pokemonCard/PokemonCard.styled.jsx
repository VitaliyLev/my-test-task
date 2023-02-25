import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: 'Roboto',
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

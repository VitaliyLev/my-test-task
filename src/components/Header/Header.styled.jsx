import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)(({ theme }) => ({
  fontFamily: 'Roboto',
  color: theme.palette.text.primary,
  textDecoration: 'none',

  '&.active': {
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    color: 'white',
  },
}));

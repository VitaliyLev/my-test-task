import styled from '@emotion/styled';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
  marginBottom: '30px',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },

  [theme.breakpoints.up(600)]: {
    marginTop: '50px',
  },
}));

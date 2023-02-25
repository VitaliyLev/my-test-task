import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto',
  color: theme.palette.text.primary,
  marginBottom: '15px',
}));

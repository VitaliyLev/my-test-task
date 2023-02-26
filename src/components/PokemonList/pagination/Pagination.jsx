import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Button, Pagination } from '@mui/material';
import { StyledBox } from './Pagination.styled';
import { useTheme } from '@emotion/react';

//pagination buttons
export default function PaginationBtn({ paginationSettings }) {
  const { setPage, limit, pageCount, page, handleChangePage } =
    paginationSettings;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between(0, 900));

  //display none in mobile version
  const paginationStyle = {
    display: isSmallScreen ? 'none' : 'block',
  };

  return (
    <StyledBox>
      <Button
        variant="contained"
        size="small"
        disabled={page === 1}
        onClick={() => setPage(prev => prev - 1)}
        sx={{ marginRight: '20px' }}
      >
        Prev
      </Button>

      <Pagination
        count={Math.ceil(pageCount / limit)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        hidePrevButton
        hideNextButton
        style={paginationStyle}
      />

      <Button
        variant="contained"
        size="small"
        disabled={page === Math.ceil(pageCount / limit)}
        onClick={() => setPage(prev => prev + 1)}
        sx={{ marginLeft: '20px' }}
      >
        Next
      </Button>
    </StyledBox>
  );
}

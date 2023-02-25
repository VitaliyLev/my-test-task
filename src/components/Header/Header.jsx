import * as React from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ThemeButton from 'components/ThemeButton/ThemeBnt';
import { StyledLink } from './Header.styled';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg" fixed>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: 'block',
                    md: 'none',
                  },
                }}
              >
                <StyledLink to={'pokemonList'}>
                  <MenuItem>
                    <Typography
                      onClick={handleCloseNavMenu}
                      textAlign="center"
                      sx={{ color: 'text.primary' }}
                    >
                      Home
                    </Typography>
                  </MenuItem>
                </StyledLink>

                <Box>
                  <StyledLink to={'favorite'}>
                    <MenuItem>
                      <Typography
                        textAlign="center"
                        sx={{ color: 'text.primary' }}
                        onClick={handleCloseNavMenu}
                      >
                        Favorite
                      </Typography>
                    </MenuItem>
                  </StyledLink>
                </Box>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <StyledLink to={'pokemonList'}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  HOME
                </Button>
              </StyledLink>

              <Box sx={{ display: 'flex' }}>
                <StyledLink to={'favorite'}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    Favorite
                  </Button>
                </StyledLink>
              </Box>
            </Box>
            <ThemeButton />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;

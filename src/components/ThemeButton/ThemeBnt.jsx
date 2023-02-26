import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/themeMode/slice';
import { selectIsDarkMode } from 'redux/themeMode/selectors';

import { useTheme } from '@emotion/react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

//btn theme switcher
export default function ThemeButton() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const theme = useTheme();

  //togle theme
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          color: 'white',
        }}
        variant="contained"
        onClick={handleToggleTheme}
        control={<Switch />}
        label={theme.palette.mode}
        checked={isDarkMode}
      />
    </FormGroup>
  );
}

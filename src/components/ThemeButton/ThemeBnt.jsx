import { useContext } from 'react';
import { ThemeColorModeContext } from 'components/ThemeContext/ThemeContext';

import { useTheme } from '@emotion/react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ThemeButton() {
  const theme = useTheme();
  const themeColorMode = useContext(ThemeColorModeContext);

  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          // display: 'flex',
          // width: '100%',
          // alignItems: 'center',
          // justifyContent: 'center',
          // bgcolor: 'background.default',
          // color: 'text.primary',
          // borderRadius: 1,
          // p: 3,
          // color: theme.palette.text.primary,
          // color: 'text.primary',
          color: 'white',
        }}
        variant="contained"
        onClick={themeColorMode.toggleColorMode}
        control={<Switch />}
        label={theme.palette.mode}
        // labelPlacement={theme.palette.mode === 'dark' ? 'start' : 'end'}
        // labelPlacement="start"
      />
    </FormGroup>
  );
}

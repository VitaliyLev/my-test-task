import Routes from './Routs/Routs';
import { ThemeModeContext } from './ThemeContext/ThemeContext';

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './../index.css';

export const App = () => {
  return (
    <ThemeModeContext>
      <Routes />
    </ThemeModeContext>
  );
};
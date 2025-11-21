import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { themeDark, themeLight } from './theme';
import { PersonalHomepage } from '../../features/personalHomepage/PersonalHomepage';
import { selectIsDarkTheme } from '../../common/themeSlice';

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;

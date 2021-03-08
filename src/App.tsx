import React from 'react';
import { useTheming } from './shared/theme/useThemeing';
import ThemeContext from './shared/theme/themeContext';
import GlobalStyle from './shared/theme/GlobalStyle';
import Homepage from './pages/Homepage/Homepage';
import { ThemeProvider } from 'styled-components';
import { Themes } from './shared/theme/themes';

function App() {
  const themingValue = useTheming(Themes.light);

  return (
    <ThemeContext.Provider value={themingValue}>
      <ThemeProvider theme={themingValue.currentTheme}>
        <>
          <GlobalStyle />
          <Homepage />
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

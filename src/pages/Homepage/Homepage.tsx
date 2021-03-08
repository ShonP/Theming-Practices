import React, { useCallback } from 'react';
import styled from 'styled-components';
import { themes, Themes } from '../../shared/theme/themes';
import { useThemeContext } from '../../shared/theme/useThemeing';
import Button from '../../shared/components/Button';

const Root = styled.div`
  background-color: ${({ theme }) => theme.application.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Homepage = () => {
  const { changeTheme, currentTheme } = useThemeContext();
  const isThemeLight = currentTheme === themes[Themes.light];
  const toggleTheme = useCallback(
    () => changeTheme(isThemeLight ? Themes.dark : Themes.light),
    [changeTheme, isThemeLight]
  );
  
  return (
    <Root>
      <Button onClick={toggleTheme}>
        Current Theme:
        {isThemeLight ? ' Dark' : ' Light'}
      </Button>
    </Root>
  );
};

export default Homepage;

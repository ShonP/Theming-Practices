import React, { useCallback } from 'react';
import styled from 'styled-components';
import { themes, Themes } from '../../shared/theme/themes';
import { useThemeContext } from '../../shared/theme/useThemeing';
import Button from '../../shared/components/Button';

const Root = styled.div`
  background-color: ${({ theme }) => theme.application.background};
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const ReactStyledImg = styled.img.attrs(() => ({
  src: 'https://miro.medium.com/proxy/1*8slP0diGduUQy3qk9N7HsQ.png',
}))`
  width: 500px;
  height: 300px;
  border-radius: 50%;
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
      <ReactStyledImg />
      <Button onClick={toggleTheme}>
        Current Theme:
        {isThemeLight ? ' Light' : ' Dark'}
      </Button>
    </Root>
  );
};

export default Homepage;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html{
        display: flex;
        height: 100%;
        width: 100%;
    }
    body{
        background-color: ${({ theme }) => theme.application.background};
        color: ${({ theme }) => theme.application.textColor};
        display: flex;
        flex: 1;
        margin: 0;
    }
    #root{
        display: flex;
        flex: 1;
    }
`;

export default GlobalStyles;

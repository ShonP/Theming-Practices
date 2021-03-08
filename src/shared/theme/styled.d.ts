import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      big: string;
      medium: string;
      smal: string;
    };

    palette: {
      red: string;
      blue: string;
      green: string;
      black: string;
      white: string;
    };

    application: {
      background: string;
      textColor: string;
    };
  }
}

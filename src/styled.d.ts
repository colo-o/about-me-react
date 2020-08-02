import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      montserrat: string;
    };
    space: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}

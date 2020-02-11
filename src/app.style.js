import { createGlobalStyle } from 'styled-components';
import reset from './reset.style';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;
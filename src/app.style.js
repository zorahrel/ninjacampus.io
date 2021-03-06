import styled, { createGlobalStyle } from 'styled-components/macro';
import reset from './reset.style';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    ${p => p.blockScroll ? 'overflow: hidden;' : ''}
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    line-height: 1.2
    ;
  }
`;

export const BlackWrapper = styled.div`
  color: #FFF;
  background: #000;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
`;
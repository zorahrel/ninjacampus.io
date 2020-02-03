import styled, { createGlobalStyle } from 'styled-components';
import logo_url from './assets/ninjacampus_logo.svg';
import reset from './reset.style';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;

export const Header = styled.header`
`;

export const Logo = styled.img.attrs({ src: logo_url })`
  height: 150px;
`;

export const WelcomeSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 14vh 4vh;
`;

export const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  flex: 1;
  margin: auto;
`;

export const NavigationLink = styled.a`
  font-weight: 900;
  font-size: 20px;
`;

export const CtaWrapper = styled.div`
  
`;
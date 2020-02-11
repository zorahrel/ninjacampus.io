import styled from 'styled-components';
import logo_url from '../assets/ninjacampus_logo.svg';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
`;

export const Logo = styled.img.attrs({ src: logo_url })`
height: 150px;
`;

export const WelcomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 14vh 4vh;
`;

export const HeaderWrapper = styled(Wrapper)`
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

export const CtaWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const H3 = styled.h3`
  font-size: 27px;
`;
export const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 27px;
  margin-bottom: 25px;
`;
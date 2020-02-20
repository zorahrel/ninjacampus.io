import styled from 'styled-components/macro';
import logo_url from '../../assets/ninjacampus_logo.svg';
import Soul from '../../components/soul/soul.components';

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
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  flex: 1;
`;

export const NavigationLink = styled.a`
  font-weight: 900;
  font-size: 26px;
`;

export const CtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WelcomeBody = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  flex: 1;
  position: relative;
`;

export const H3 = styled.h3`
  font-size: 27px;
  font-weight: 500;
`;
export const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 25px;
`;

export const ValuesWrapper = styled.div``;
export const ValueShape = styled(Soul)`
  color: #FFFFFF;
  font-weight: 900;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%);
`;
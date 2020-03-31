import styled from 'styled-components/macro';
import logo_url from '../../assets/ninjacampus_logo.svg';
import Soul from '../../components/soul/soul.component';
import { SectionWrapper } from '../../common/style.common';

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

export const WelcomeWrapper = styled(SectionWrapper)`
  height: 100vh;
`;

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    justify-content: space-around;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  flex: 1;
  @media (max-width: 480px) {
    display: none;
  }
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
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
    margin: 4vh auto;
  }
`;

export const H3 = styled.h3`
  font-size: 27px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;
export const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 25px;
  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const ValuesWrapper = styled.div`
  @media (max-width: 480px) {
    position: relative;
    flex: 1;
  }
`;
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
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
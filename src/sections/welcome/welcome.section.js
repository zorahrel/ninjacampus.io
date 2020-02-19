import React from 'react';
import {
  Header,
  Logo,
  HeaderWrapper,
  Navigation,
  NavigationLink,
  CtaWrapper,
  H1,
  H3,
  WelcomeWrapper,
  ValuesWrapper,
  ValueShape,
  WelcomeBody
} from './welcome.style';

export default function WelcomeSection() {
  return <WelcomeWrapper>
    <Header>
      <HeaderWrapper>
        <Logo />
        <Navigation>
          <NavigationLink>Programma</NavigationLink>
          <NavigationLink>I nostri Ninjas</NavigationLink>
          <NavigationLink>I nostri Sensei</NavigationLink>
        </Navigation>
      </HeaderWrapper>
    </Header>
    <WelcomeBody>
      <CtaWrapper>
        <H1>C’è un nuovo modo di lavorare nell’IT.</H1>
        <H3>Acquisisci conoscenze e metologie da Ninja,<br/>supera le sfide e inizia a lavorare da remoto.</H3>
      </CtaWrapper>
      <ValuesWrapper>
        <ValueShape size={260} style={{top: '25%', right: '15%'}}>Mindset</ValueShape>
        <ValueShape size={260} style={{top: '55%', right: 0}}>Flow</ValueShape>
        <ValueShape size={260} style={{top: '70%', right: '20%'}}>Skills</ValueShape>
      </ValuesWrapper>
    </WelcomeBody>
  </WelcomeWrapper>
};
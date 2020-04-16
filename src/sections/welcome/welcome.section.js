import React, { useState } from 'react';
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
import { useMediaQuery } from 'beautiful-react-hooks';

export default function WelcomeSection() {
  const isTablet = useMediaQuery('(max-width: 480px)');
  const values = [
    {
      top: isTablet ? '30%' : '25%',
      right: isTablet ? '-10%' : '15%',
      label: 'Mindset'
    },
    {
      top: isTablet ? '40%' : '55%',
      right: isTablet ? '45%' : '0%',
      label: 'Flow'
    },
    {
      top: isTablet ? '82%' : '70%',
      right: isTablet ? '20%' : '20%',
      label: 'Skills'
    }
  ]
   
  // useWindowResize((event) => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // });
  
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
        { values.map(e =>
          <ValueShape
            key={e.label}
            scale={.5}
            style={{top: e.top, right: e.right}}>
            {e.label}
          </ValueShape>
        ) }
      </ValuesWrapper>
    </WelcomeBody>
  </WelcomeWrapper>
};
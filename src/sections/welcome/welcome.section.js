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
import { useWindowResize, useMediaQuery } from 'beautiful-react-hooks';

export default function WelcomeSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const values = [
    {
      top: useMediaQuery('(max-width: 480px)') ? '30%' : '25%',
      right: useMediaQuery('(max-width: 480px)') ? '0%' : '15%',
      label: 'Mindset'
    },
    {
      top: useMediaQuery('(max-width: 480px)') ? '40%' : '55%',
      right: useMediaQuery('(max-width: 480px)') ? '50%' : '0',
      label: 'Flow'
    },
    {
      top: useMediaQuery('(max-width: 480px)') ? '82%' : '70%',
      right: useMediaQuery('(max-width: 480px)') ? '20%' : '20%',
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
            size={.25*height}
            style={{top: e.top, right: e.right}}>
            {e.label}
          </ValueShape>
        ) }
      </ValuesWrapper>
    </WelcomeBody>
  </WelcomeWrapper>
};
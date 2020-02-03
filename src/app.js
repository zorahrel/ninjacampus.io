import React from 'react';
import { Header, Logo, HeaderWrapper, WelcomeSection, Navigation, NavigationLink, GlobalStyle, CtaWrapper } from './app.style';

function App() {
  return (
    <>
      <GlobalStyle />
      <WelcomeSection>
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
        <CtaWrapper>

        </CtaWrapper>
      </WelcomeSection>
    </>
  );
}

export default App;

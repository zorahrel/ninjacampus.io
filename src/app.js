import React from 'react';
import { GlobalStyle, BlackWrapper } from './app.style';
import WelcomeSection from './sections/welcome/welcome.section';
import WhatSection from './sections/what/what.section';
import PlanSection from './sections/plan/plan.section';

function App() {
  return (
    <>
      <GlobalStyle />
      <WelcomeSection />
      <BlackWrapper>
        <WhatSection />
        <PlanSection />
      </BlackWrapper>
    </>
  );
}

export default App;

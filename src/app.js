import React from 'react';
import { GlobalStyle, BlackWrapper } from './app.style';
import WelcomeSection from './sections/welcome/welcome.section';
import WhatSection from './sections/what/what.section';
import PlanSection from './sections/plan/plan.section';
import NinjasSection from './sections/ninjas/ninjas.section';
import SenseiSection from './sections/sensei/sensei.section';
import Soul from './components/soul/soul.components';
const soulsPositions = [
  [2, 5, 1, 0],
  [5, 47, .25, -80],
  [55, 63, 1.1, 220],
  [60, 25, 0.7, 220],
  // [66, 38, 0.60, 220],
  // [70, 60, 0.35, 220],
  [22, 25, 1.1, 220],
  [32, 48, .8, 120],
  [35, 25, .4, 270],
  [50, 5, .9, 90],
  // [75, 35, 1, 50],
  // [85, 15, 1.2, 50],
];
function App() {
  return (
    <>
      <GlobalStyle />
      <WelcomeSection />
      <BlackWrapper>
        { soulsPositions.map(s => <Soul key={s[0]+''+s[1]} scale={s[2]} style={{position: 'absolute', top: s[0]+'%', left: s[1]+'%' }}/>) }
        <WhatSection />
        <PlanSection />
        <NinjasSection />
        <SenseiSection />
      </BlackWrapper>
    </>
  );
}

export default App;

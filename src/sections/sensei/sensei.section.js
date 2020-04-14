import React from 'react';
import {
  SenseiWrapper,
  SenseiTitle,
  SenseiBody,
  SenseiSoul,
  SenseiSoulBody,
  SenseiName,
  SenseiSubTitle,
  SenseiDescription,
  SenseiAvatar,
  SenseiLink
} from './sensei.style';
import {
  H1,
  H3,
  P,
  B
} from '../../common/style.common';
import attilio from '../../assets/attilio.jpg';
import { NinjaLink, NinjaLinks } from '../ninjas/ninjas.style';

export default function SenseiSection() {
  return <SenseiWrapper>
    <SenseiTitle>
      <H1>Sensei</H1>
      <H3>I nostri trainer</H3>
    </SenseiTitle>
    <SenseiBody>
      <SenseiSoul scale={1.5}>
        <SenseiName>Attilio</SenseiName>
        <SenseiSoulBody>
          <SenseiSubTitle>IT Manager &amp; Ninja Developer</SenseiSubTitle>
          <SenseiDescription>13 anni di attività in architettura e sviluppo</SenseiDescription>
        </SenseiSoulBody>
        <NinjaLinks>
          {/* <NinjaLink href='https://www.linkedin.com/in/zorahrel/' type='linkedin'/> */}
          <NinjaLink href='https://github.com/zorahrel/' type='github'/>
          <NinjaLink href='https://instagram.com/zorahrel/' type='instagram'/>
          <SenseiAvatar src={attilio} scale={.45}></SenseiAvatar>
        </NinjaLinks>
      </SenseiSoul>
    </SenseiBody>
  </SenseiWrapper>
}
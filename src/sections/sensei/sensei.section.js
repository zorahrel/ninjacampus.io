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
      <SenseiSoul size={0.6 * window.innerHeight}>
        <SenseiName>Attilio</SenseiName>
        <SenseiAvatar src={attilio} size={0.2*window.innerHeight}></SenseiAvatar>
        <SenseiSoulBody>
          <SenseiSubTitle>IT Manager &amp; Ninja Developer</SenseiSubTitle>
          <SenseiDescription>13 anni di attività in architettura e sviluppo</SenseiDescription>
          <NinjaLinks>
            {/* <NinjaLink href='https://www.linkedin.com/in/zorahrel/' type='linkedin'/> */}
            <NinjaLink href='https://github.com/zorahrel/' type='github'/>
            <NinjaLink href='https://instagram.com/zorahrel/' type='instagram'/>
          </NinjaLinks>
        </SenseiSoulBody>
      </SenseiSoul>
    </SenseiBody>
  </SenseiWrapper>
}
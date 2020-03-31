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
    SenseiPic,
    SenseiLink 
} from './sensei.style';
import {
  H1,
  H3,
  P,
  B
} from '../../common/style.common';

export default function senseiSection() {
    return <SenseiWrapper>
        <SenseiTitle>
            <H1>Sensei</H1>
            <H3>I nostri trainer</H3>
        </SenseiTitle>
        <SenseiBody>
            <SenseiSoul size={0.4*window.innerWidth}>
                <SenseiName>Attilio</SenseiName>
                <SenseiSoulBody>
                    <SenseiSubTitle>IT Manager &amp; Ninja Developer</SenseiSubTitle>
                    <SenseiDescription>13 anni di attività in architettura e sviluppo</SenseiDescription>
                    <SenseiPic></SenseiPic>
                    <SenseiLink></SenseiLink>
                </SenseiSoulBody>
            </SenseiSoul>
        </SenseiBody>
    </SenseiWrapper>
}
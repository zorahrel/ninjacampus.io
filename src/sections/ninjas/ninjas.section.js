import React from 'react';
import OussamaPic from '../../assets/Oussama.png';
import { NinjasHeader, H1, H3, P, B, NinjasWrapper, NinjasBody, NinjasSoul, NinjaTitle, NinjaAvatar, NinjaLinks, Instagram, Github } from './ninjas.style';

const ninjasSouls = [
    {
        name: 'Oussama',
        img: OussamaPic
    },
    {
        name: 'Antimo',
        img: 'a'
    },
    {
        name: 'Giando',
        img: 'b'
    }
];

export function NinjasInfo(props) {
    return ninjasSouls.map((ninjasSoul) =>
        <B>{ninjasSoul.name}</B>
    );
}

export default function NinjasSection() {
  return <NinjasWrapper>
    <NinjasHeader>
        <H1>
            Ninjas
            <H3>
                I migliori talenti del Sud Italia
            </H3>  
        </H1>
    </NinjasHeader>
    <NinjasBody>
        {ninjasSouls.map((ninja) => 
            <NinjasSoul size={400}>
            <NinjaTitle>
                <B>{ninja.name}</B>
            </NinjaTitle>
            <NinjaAvatar src= {ninja.img}></NinjaAvatar>
            <NinjaLinks>
                <Github></Github>
                <Instagram></Instagram>
            </NinjaLinks>
        </NinjasSoul>
        )}
    </NinjasBody>
  </NinjasWrapper>

};
import React from 'react';
import OussamaPic from '../../assets/Oussama.png';
import {
  NinjasHeader,
  H1,
  H3,
  P,
  B,
  NinjasWrapper,
  NinjasBody,
  NinjasSoul,
  NinjaTitle,
  NinjaAvatar,
  NinjaLinks,
  NinjaLink
} from './ninjas.style';

const ninjasSouls = [
  {
    name: 'Oussama',
    avatar_url: OussamaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Antimo',
    avatar_url: OussamaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Giando',
    avatar_url: OussamaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      },
      {
        type: 'github',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Alessandro',
    avatar_url: OussamaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Andrea',
    avatar_url: OussamaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Marco',
    avatar_url: OussamaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      },
      {
        type: 'github',
        href: 'https://instagram.com/instagram'
      }
    ]
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
      <H1>Ninjas</H1>
      <H3>I migliori talenti del Sud Italia</H3>
    </NinjasHeader>
    <NinjasBody>
      {ninjasSouls.map((ninja) =>
        <NinjasSoul key={ninja.name} size={0.4*window.innerHeight}>
          <NinjaTitle>
            <B>{ninja.name}</B>
          </NinjaTitle>
          <NinjaAvatar src={ninja.avatar_url}></NinjaAvatar>
          { ninja.links.length && <NinjaLinks>
            {ninja.links.map(link => <NinjaLink key={link.type} href={link.href} type={link.type}/>)}
          </NinjaLinks> }
        </NinjasSoul>
      )}
    </NinjasBody>
  </NinjasWrapper>

};
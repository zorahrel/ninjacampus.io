import React from 'react';
import OussamaPic from '../../assets/oussama.jpg';
import AndreaPic from '../../assets/andrea.jpg';
import AntimoPic from '../../assets/antimo.jpg';
import GiandoPic from '../../assets/giando.jpg';
import MarcoPic from '../../assets/marco.jpg';
import {
  NinjasHeader,
  NinjasWrapper,
  NinjasBody,
  NinjasSoul,
  NinjaTitle,
  NinjaAvatar,
  NinjaLinks,
  NinjaLink,
  NinjasFooter,
  TrainingSoul,
  Cta,
  ReadySoul,
  Text
} from './ninjas.style';
import {
  H1,
  H3,
} from '../../common/style.common';

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
    avatar_url: AntimoPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Giando',
    avatar_url: GiandoPic,
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
    name: 'Andrea',
    avatar_url: AndreaPic,
    links: [
      {
        type: 'instagram',
        href: 'https://instagram.com/instagram'
      }
    ]
  },
  {
    name: 'Marco',
    avatar_url: MarcoPic,
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

export default function NinjasSection(props) {
  return <NinjasWrapper>
    <NinjasHeader>
      <H1>Ninjas</H1>
      <H3>I migliori talenti del Sud Italia</H3>
    </NinjasHeader>
    <NinjasBody>
      {ninjasSouls.map((ninja) =>
        <NinjasSoul key={ninja.name} scale={.8}>
          <NinjaTitle>
            {ninja.name}
          </NinjaTitle>
          <NinjaAvatar ninja={ninja.avatar_url} scale={.4}></NinjaAvatar>
          { ninja.links.length && <NinjaLinks>
            {ninja.links.map(link => <NinjaLink key={link.type} href={link.href} type={link.type}/>)}
          </NinjaLinks> }
        </NinjasSoul>
      )}
      <NinjasFooter>
      <TrainingSoul scale={1.4}>
        <Cta>Vuoi allenarti nel nostro dojo?</Cta>
        <ReadySoul onClick={() => props.showForm()} scale={.6} color='#FFFFFF'>
          <Text>Sono pronto.</Text>
        </ReadySoul>
      </TrainingSoul>
    </NinjasFooter>
    </NinjasBody>
  </NinjasWrapper>
};
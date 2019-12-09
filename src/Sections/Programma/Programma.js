import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'
import { map } from '@pups/utility/build/Object'

import Wrapper from 'Components/Wrapper'
import BaseList from 'Components/BaseList'

import Liste from 'Sections/Programma/Liste'
import Souls from 'Sections/Programma/Souls'

const getLists = () => 
{
    map(Liste, (list, name, index) => (
        <Lista key={index}>
            <Nome>{name}</Nome>
            <BaseList>
                {list.map((v, index) => <li key={index}>{v}</li>)}
            </BaseList>
        </Lista>
    ))

    return Object.values(Liste)
}

const Programma = () => (
    <Container name="plan">
        <Souls />
        <Wrapper style={{ position: 'relative', zIndex: 1 }}>
            <Title>Programma</Title>
            <Subtitle>Usciamo spesso fuori programma</Subtitle>
            {getLists()}
        </Wrapper>
    </Container>
)

const Container = styled.a`
    position: relative;
    display: block;
    background: #000;
    padding: ${pups.ms(5)} 0 ${pups.ms(2)};
    color: #fff;
`

const Title = styled.h1`
    margin: 0;
    font-size: ${pups.ms(4)};
    line-height: 1.3;
`

const Subtitle = styled.h3`
    margin: 0 0 ${pups.ms(4)};
    font-size: ${pups.ms(1)};
    line-height: 1;
    font-weight: 300;
`

const Lista = styled.div`
    margin: ${pups.ms(2)} 0;
    font-size: ${pups.add(1)};
`

const Nome = styled.b``

export default Programma
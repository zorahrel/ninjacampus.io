import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'
import { map } from '@pups/utility/build/Object'

import Wrapper from 'components/wrapper'
import BaseList from 'components/base-list'

import lists from 'pages/plan/lists'
import Souls from 'pages/plan/souls'

const getLists = () => 
{
    map(lists, (list, name, index) => (
        <Lista key={index}>
            <Nome>{name}</Nome>
            <BaseList>
                {list.map((v, index) => <li key={index}>{v}</li>)}
            </BaseList>
        </Lista>
    ))

    return Object.values(lists)
}

const Plan = () => (
    <Container name="plan">
        <Souls />
        <Wrapper style={{ position: 'relative', zIndex: 1 }}>
            <Title>Plan</Title>
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

export default Plan
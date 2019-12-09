import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'

import Wrapper from 'Components/Wrapper'
import BaseList from 'Components/BaseList'
import Arrow from 'Components/Arrow'

import Header from 'Sections/Home/Header'
import BottomContent from 'Sections/Home/BottomContent'

const Home = () => (
    <Flex>
        <Header />
        
        <Wrapper>
            <Title>Campus formativo mirato alle nuove tecnologie web e mobile.</Title>
        </Wrapper>
        
        <BottomContent />
    </Flex>
)

const Flex = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 100vh;
`

const Title = styled.h3`
    font-size: ${pups.ms(1)};
    font-weight: 400;
    color: ${pups.lightGray};
    margin: 0;    
`


export default Home
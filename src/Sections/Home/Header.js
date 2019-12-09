import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'

import Wrapper from 'Components/Wrapper'
import Navigation from 'Sections/Home/Navigation'

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo src="/assets/images/ninjacampus_logo.svg" />
            <Navigation />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled(Wrapper.withComponent('header'))`
    display: grid; 
    grid-template-columns: max-content auto;
    grid-gap: ${pups.ms(5)};
    align-items: center;
`

const Logo = styled.img`
    height: ${pups.add(5, 1)};
`

export default Header
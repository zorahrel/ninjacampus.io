import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'

const Navigation = () => {
    return (
        <NavigationList>
            <NavigationListItem href="#plan">Programma</NavigationListItem>
            <NavigationListItem>Progetti</NavigationListItem>
            <NavigationListItem>Ninjas</NavigationListItem>
            <NavigationListItem>Sensei</NavigationListItem>
        </NavigationList>
    )
}

const NavigationList = styled.nav`
    font-weight: 800;
    list-style: none;
    margin: 0; 
    padding: 0;
    display: flex;
    justify-content: space-between;
    font-size: ${pups.ms(1)};
`

const NavigationListItem = styled.a`
    display: inline-block;
`

export default Navigation
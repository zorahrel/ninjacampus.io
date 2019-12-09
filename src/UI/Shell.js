import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'

import GlobalStyle from 'UI/GlobalStyle'

import Home from 'Sections/Home/Home'
import Programma from 'Sections/Programma/Programma'

const Shell = () => {

    return (
        <React.Fragment>
            <GlobalStyle />
            <Home />
            <Programma />
        </React.Fragment>
    )
}

export default Shell
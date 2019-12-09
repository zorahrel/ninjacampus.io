import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'

import Wrapper from 'Components/Wrapper'
import BaseList from 'Components/BaseList'
import Arrow from 'Components/Arrow'

const BottomContent = () => (
    <BottomContentContainer>
        <div>
            <small>Un ninja developer è</small>

            <NinjaList>
                <li>Front-End Developer</li>
                <li>Back-End Developer</li>
                <li>Database Designer</li>
            </NinjaList>
        </div>

        <Button>
            Invia il tuo CV<br />per unirti al dojo
            <SArrow />
        </Button>           
    </BottomContentContainer>
)


const BottomContentContainer = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
`

const NinjaList = styled(BaseList)`
    margin-top: ${pups.ms(-2)};
    font-weight: 600;
    font-size: ${pups.add(0, -3)};
`

const Button = styled.button`
    position: relative;
    border: 0;
    height: 15vh;
    background-color: ${pups.lightenGray};
    mask-image: url(/assets/images/shape_base.svg);
    width: 30vw;
    mask-size: 30vw 15vh;
    font-size: ${pups.add(0, -2)};
    font-family: inherit;
    font-weight: 500;
    position: relative;
    cursor: pointer;
`

const SArrow = styled(Arrow)`
    position: absolute;
    top: 3.5vh;
    right: 3vh;
`

export default BottomContent
import pups from '@pups/js'
import { createGlobalStyle } from 'styled-components'
import { relativeClamp } from '@pups/utility/build/Number'

const rootBase = parseInt(relativeClamp(window.innerWidth, 360, 1920, 12, 16))

export default createGlobalStyle`
    html {
        font-family: 'Montserrat', sans-serif;
        font-size: ${pups.modularScale.getRootBase(true)}; 
        line-height: ${pups.modularScale.getRatio()}; 
        text-rendering: geometricPrecision;
        -webkit-font-smoothing: antialiased;
    }
  
    html, body {
        margin: 0; padding: 0;
        scroll-behavior: smooth;
    }
`
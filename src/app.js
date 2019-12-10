import React from 'react'
import { GlobalStyle } from 'app.style'

import Home from 'pages/home/home'
import Plan from 'pages/plan/plan'

const App = () => (
  <>
    <GlobalStyle />
    <Home />
    <Plan />
  </>
)

export default App
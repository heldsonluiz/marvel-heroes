import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['white']};
    color: ${props => props.theme['gray-500']}
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
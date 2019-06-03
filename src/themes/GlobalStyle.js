import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    padding-top: 6.2rem;
    color: #10132E;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle;
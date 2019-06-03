import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
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
  .uppercase {
    text-transform: uppercase;
  }
`

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    color: #10132E;
  }
  main {
    margin: 0 auto;
    padding-top: 2rem;
    width: 90vw;
    max-width: 99.2rem;
    display: flex;
    flex-direction: column;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    outline: none;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .viewing {
    background-color: #EAEFFA;
  }
`

export default GlobalStyle;
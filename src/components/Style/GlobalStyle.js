import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  
  html{
    box-sizing: border-box;
    color: white;
  }

  *,
  *::before,
  *::after {
    box-sizing:inherit;
  }

  body {
    margin:0;
    background-color: #f0f0f0;
    font-family: Roboto,san-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding:0;
    margin:0;
  }

  h1, h2, h3 {
    font-family: Pacifico,san-serif;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    text-align: right;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    text-align: right;

  }
`;

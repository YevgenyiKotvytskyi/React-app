import React from 'react';
import {createGlobalStyle} from 'styled-components';
import { NavBar } from './components/NavBar'

const GlobalStyle = createGlobalStyle`
  
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

  h1, h2, h3, p {
    font-family: Pacifico,san-serif;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

`;


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;
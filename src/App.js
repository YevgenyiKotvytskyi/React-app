import React from 'react';
import { NavBar } from './components/NavBar'
import { Menu } from './components/Menu'
import { GlobalStyle } from './components/GlobalStyle'
import { Banner } from './components/Banner'

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Banner/>
      <Menu/>
    </>
  );
}

export default App;

import React from 'react';
import { NavBar } from './components/NavBar'
import { Menu } from './components/Menu'
import { ModalItem } from './components/ModalItem'
import { GlobalStyle } from './components/GlobalStyle'

function App() {

  const [openItem, setOpenItem] = React.useState(null);
  
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem = { setOpenItem }/>
      <ModalItem 
        openItem = { openItem } 
        setOpenItem = { setOpenItem }
      />
    </>
  );
}

export default App;

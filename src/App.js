import React from 'react';
import { NavBar } from './components/NavBar';
import { Order } from './components/Order';
import { Menu } from './components/Menu';
import { ModalItem } from './components/ModalItem';
import { GlobalStyle } from './components/GlobalStyle';

function App() {

  const [openItem, setOpenItem] = React.useState(null);
  
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem = { setOpenItem }/>
      <ModalItem 
        openItem = { openItem } 
        setOpenItem = { setOpenItem }
      />
    </>
  );
}

export default App;

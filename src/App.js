import React from 'react';
import { NavBar } from './components/Common/NavBar';
import { Order } from './components/Order/Order';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/Model/ModalItem';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();
  
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu setOpenItem  { ...openItem }/>
      {openItem.openItem && <ModalItem { ...openItem } {...orders}/>}
    </>
  );
}

export default App;

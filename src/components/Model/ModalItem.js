import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Common/ButtonCheckout'
import { CountItem } from './CountItem'
import { useCount } from '../Hooks/useCount'
import { totalPriceItems, formatCurrency } from '../Function/SecondaryFunction'


const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const Modal = styled.div`
    position:relative;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image:  url(./image${ ({img}) => img });
    background-size: cover;
    backgrond-position: center;
`;

const Content = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Patifico', cursive;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = { 
        ...openItem,
        count: counter.count
    };

    const addToOrders = () => {
        setOrders( [...orders, order] );
        setOpenItem( null );
    }

    return (
        <Overlay id = "overlay" onClick = {closeModal}>
            <Modal>
                <Banner img = { openItem.img }/>
                    <Content>
                        <HeaderContent>
                            <div>{ openItem.name }</div>
                            <div>{ formatCurrency(openItem.price) }</div>
                        </HeaderContent>
                        <CountItem {...counter}/>
                        <TotalPriceItem>
                            <span>Цена</span>
                            <span>{formatCurrency(totalPriceItems(order))}</span>
                        </TotalPriceItem>
                        <ButtonCheckout onClick = { addToOrders } >Добавить</ButtonCheckout>
                    </Content>
            </Modal>
        </Overlay>
    )

} 
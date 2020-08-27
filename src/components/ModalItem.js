import React from 'react';
import styled from 'styled-components';
import { ModalButton } from './ModalButton'


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

const Modal =styled.div`
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
    margin-bottom: 20px;

`;

const SpanPrice = styled.span`
    float: right;
`

const PricePanel = styled.div`
    width: 100%;
    padding: 0 53px 0 37px;
    font-family: Pacifico,san-serif;
    font-size: 30px;
`;


export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    
    return (
        <Overlay id = "overlay" onClick = {closeModal}>
            <Modal>
                <Banner img = { openItem.img }/>
                    <PricePanel>
                        <span>{openItem.name}</span>
                        <SpanPrice>{openItem.price.toLocaleString('ru-Ru',
                            {style: 'currency', currency: 'RUB'})}</SpanPrice>
                    </PricePanel>
                    <ModalButton/>
            </Modal>
        </Overlay>
    )

} 
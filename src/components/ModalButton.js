import React from 'react';
import styled from 'styled-components';

const ButtonModal = styled.button`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 43px;
    text-align: center;
    width: 250px;
    height: 65px;
    font-size: 21px;
    background-color: #299B01;
    color: #fff;
    border-color: transparent;
`;

export const ModalButton = () => (
    <ButtonModal>
        Добавить
    </ButtonModal>
)
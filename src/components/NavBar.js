import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import buttonImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flax;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
`;

const ButtonSing = styled.button`
    padding: 0;
    border: none;
    background: none;
`;


export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src = {logoImg} alt = "logo"/>
            <H1>Mr Donald's</H1>  
        </Logo>
        <ButtonSing><img src ={buttonImg} alt = 'sign in'/></ButtonSing>
    </NavBarStyled>
);
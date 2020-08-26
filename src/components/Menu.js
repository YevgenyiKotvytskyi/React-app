import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import dbMenu from './DBMenu'

const MenuStyled = styled.main`
    backgrond-color: #ccc;
`;

const SectionMenu = styled.section`
    padding: 30px;

`;

export const Menu = () => (
    <MenuStyled>
        <SectionMenu>
            <h2>Бургеры</h2>  
            <ListItem itemList = { dbMenu.burger }/>
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / напитки</h2>  
            <ListItem itemList = { dbMenu.other }/>
        </SectionMenu>

    </MenuStyled>
);
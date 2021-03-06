import React from 'react';
import styled from 'styled-components';

const DivBanner =  styled.div`
    background-image:  ${({ img }) => `url(${ img })`};
    background-position: center;    
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height:210px
`;

export const Banner = () => (
    <DivBanner img = './image/banner.png'/>
)
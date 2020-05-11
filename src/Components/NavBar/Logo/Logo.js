import React from 'react';
import {NavLink} from 'react-router-dom';
import {LogoStyled} from './LogoStyled';

const Logo = ()=>(
    <LogoStyled as={NavLink} to="/" >Perfumeria</LogoStyled>
);
export default Logo;
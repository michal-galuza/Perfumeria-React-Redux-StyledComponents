import React from 'react';
import {NavLink} from 'react-router-dom';
import {LogoStyled} from './LogoStyled';

const Logo = ({className , isMenu})=>(
    <LogoStyled isMenu className={className} as={NavLink} to="/" >Katarzynix</LogoStyled>
);
export default Logo;
import React from 'react';
import {NavLink} from 'react-router-dom';
import {LogoStyled} from './LogoStyled';

const Logo = ()=>(
    <LogoStyled as={NavLink} to="/" >Eufemia</LogoStyled>
);
export default Logo;
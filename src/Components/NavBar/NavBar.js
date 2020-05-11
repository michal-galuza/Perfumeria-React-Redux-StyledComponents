import {NavLink} from 'react-router-dom';
import React from 'react';
import {Nav , NavItem} from './NavBarStyled';
import Logo from './Logo/Logo';
import Basket from './Basket/Basket';

const NavBar = ()=>(
    <Nav>
    <Logo/>
    <NavItem as={NavLink} exact to="/">Strona główna</NavItem>
    <NavItem as={NavLink} to="/sale">Promocje</NavItem>
    <NavItem as={NavLink} to="/products">Produkty</NavItem>
    <NavItem as={NavLink} to="/about_us">O nas</NavItem>
    <Basket/>
    </Nav>
);
export default NavBar;
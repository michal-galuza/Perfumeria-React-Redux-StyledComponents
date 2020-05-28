import {NavLink } from 'react-router-dom';
import React from 'react';
import {Nav , NavItem} from './NavBarStyled';
import Logo from './Logo/Logo';
import Basket from './Basket/Basket';

const NavBar = ()=>(
    <Nav>
    <Logo/>
    <NavItem as={NavLink} exact to="/">Strona główna</NavItem>
    <NavItem as={NavLink} to="/promocje">Promocje</NavItem>
    <NavItem as={NavLink} to="/produkty">Produkty</NavItem>
    <NavItem as={NavLink} to="/oNas">O nas</NavItem>
    <Basket/>
    </Nav>
);
export default NavBar;
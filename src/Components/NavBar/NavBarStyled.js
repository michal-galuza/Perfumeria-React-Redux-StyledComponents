import styled from 'styled-components';
import {NavLink } from 'react-router-dom';
import HamburgerButton from  './HamburgerButton/HamburgerButton';
import Logo from './Logo/Logo';
export const Hamburger = styled(HamburgerButton)`
@media (min-width: 1201px){display:none;}
`
export const Nav=styled.nav`
 box-shadow: 0 0 20px 0px black;
 background: ${({theme})=>theme.gradients.navBar} ;
padding: 0 50px;
position:fixed;
top:0;
left:0px;
width:100%;
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:nowrap;
z-index:800;
@media (max-width: 1400px){
    padding: 0 20px;
    box-shadow:none;
}
@media (max-width: 1220px){
    padding: 0 20px;
}
@media (max-width: 1100px){
    padding: 0 60px;
};
@media (max-width: 700px){
    padding: 0px 20px ;
};
@media (max-width: 400px){
    padding: 0px 20px ;
    height: 50px;
};
`;

export const NavItem=styled(NavLink)`

position:relative;
width:180px;
height:35px;
background:white;
color:black;
text-decoration:none;
border:1px solid blue;
border-radius: 10px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 20px;
border: 1px solid ${({theme})=>theme.colors.button};
box-shadow: 0 15px 20px -15px ${({theme})=>theme.colors.button};
overflow:hidden;
z-index:1;


@media (hover: hover) and (pointer: fine){
    ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transition: transform .3s ease-in-out ;
        transform: translateX(-110%);}
:hover{
    color:black;
    ::before{transform: translateX(0);}
    }
}
  &.active{
        background: ${({theme})=> theme.colors.button};
        color: #f2f2f2;
        animation: navitem__active .5s ease-in-out  both;
        @media (hover: hover) and (pointer: fine){
            :hover{
                color:black;
            }
        }
    }
    @media(max-width: 1200px){width: 65%;
    margin: 25px 0; }

`;

export const NavItemsWrapper=styled.div`
position:static;
display:flex;
justify-content:space-between;
align-items:center;
width: 900px;
@media (max-width: 1400px){
    width:850px;
}
@media (max-width: 1300px){
    width:800px;
}
@media (max-width: 1200px) {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100vw;
    height:100vh;
    background:white;
    z-index:999;
    display:flex;
    flex-direction:column;
    justify-content:center;
align-items:space-around;
transition: transform .5s ease ;
transform:translateX( ${({open})=>open?`0` :`-150%`} );
};
`;

export const CloseBtn=styled.button`
position:fixed;
right:25px;
top:25px;
align-self:flex-start;
justify-self:flex-end;
background:transparent;
font-size: 2em;
border: none;
font-weight: bold;
@media (min-width: 1200px){
    display:none;
}
@media(max-width:400px){
    font-size: 1.5em;
}
`;

export const MenuLogo=styled(Logo)`
text-align:center;
@media (${({isMenu})=>isMenu? `min-width: 1300px` :`min-width: 1200px`})
{
    display:none;
}
@media (max-width: 400px){
        font-size: 2.5em;
    }
`
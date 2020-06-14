import styled from 'styled-components';
import {NavLink } from 'react-router-dom';
import HamburgerButton from  './HamburgerButton/HamburgerButton';
export const Hamburger = styled(HamburgerButton)`
@media (min-width: 1101px){display:none;}
`
export const Nav=styled.nav`
 box-shadow: 0 0 20px 0px black;
 background: ${({theme})=>theme.colors.background} ;
padding: 0 50px;
position:sticky;
top:0;
width:100%;
height:100px;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:nowrap;
z-index:998;
@media (max-width: 1300px){
    padding: 0 40px; 
}
@media (max-width: 1220px){
    padding: 0 20px; 
}
@media (max-width: 1100px){
    padding: 0 60px;
};
@media (max-width: 700px){
    padding: 0px 10px ;
};
@media (max-width: 400px){
    padding: 0px 5px ;
    height: 80px;
};
`;

export const NavItem=styled(NavLink)`
position:relative;
width:170px;
height:40px;
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
font-size: 1.2em;
z-index:1;
    ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transition: transform .3s ease-in-out ;
        transform: translateX(-110%);
        
    }
    :hover{
        ::before{
            transform: translateX(0);
        }
    }
  &.active{
        background: ${({theme})=> theme.colors.button};
        color: #f2f2f2;
        animation: navitem__active .5s ease-in-out  both;
    }
    @media (max-width:1100px) {
        width:80%;
    }
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
@media (max-width: 1100px) {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background: ${({theme})=>theme.colors.background} ;
    width:100vw ;
    height:500px;
position:absolute;
top:100px;
left:0;
transition: transform .5s linear ;
transform: ${({open})=> open===true ? 'translateX(-100%)' : "translateX(0%)"};
display:flex;
flex-direction:column;
padding: 40px 0;
};
@media (max-width: 400px){
   
   top:80px;
};
`;
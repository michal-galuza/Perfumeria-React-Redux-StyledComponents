
import React ,{useState} from 'react';
import {Nav , NavItem , NavItemsWrapper , Hamburger} from './NavBarStyled';
import Logo from './Logo/Logo';
import Basket from './Basket/Basket';


const NavBar = ()=>{
 const [isOpen , setOpen]=useState(false);
return(
    <Nav  >
    <Logo/>
    
    <NavItemsWrapper open={isOpen===true? true : false}>
   
    <NavItem onClick={()=>setOpen(isOpen===true?false:true)}  exact to="/">Strona główna</NavItem>
    <NavItem onClick={()=>setOpen(isOpen===true?false:true)}  to="/promocje">Promocje</NavItem>
    <NavItem onClick={()=>setOpen(isOpen===true?false:true)}  to="/produkty">Produkty</NavItem>
    <NavItem onClick={()=>setOpen(isOpen===true?false:true)} to="/oNas">O nas</NavItem>
    <Basket/>
   
    </NavItemsWrapper>
    <Hamburger fn={()=>setOpen(isOpen===true?false:true)}/>
    </Nav>
);
}
export default NavBar;
//przypisujmey do nav bar nasłuchiwanie eventu scroll
//jeśli scrollujemy w dół to będzie -50px za erkanem
//gdy zaczniemy scollować w góre ma się pojawić 
//
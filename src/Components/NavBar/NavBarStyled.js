import styled from 'styled-components';

export const Nav
=styled.nav`
    position: sticky;
    top: 0 ;
    left: 0;
    right: 0;
    
   height: 100px;
    background: ${({theme})=>theme.colors.primaryChanged} ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    z-index: 100;
`;
export const NavItem
=styled('NavLink')`
@keyframes navitem__active {
    from{opacity:.2}
    to{opacity:1}
}
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme})=>theme.colors.primaryChanged};
    text-decoration: none;
    width: 10%;
    height: 50%;
    color:black;
    font-size: 1em;
    margin: 0 10px;
    border-radius: 5px;
    border: 2px solid ${({theme})=>theme.colors.button};
    box-shadow: 0 15px 20px -15px ${({theme})=>theme.colors.button};
    :hover{
        background:${({theme})=> theme.colors.primary};
        transition: background .2s ease-in-out ;
        
    }
  &.active{
        background: ${({theme})=> theme.colors.button};
        color: #f2f2f2;
        animation: navitem__active .5s ease-in-out  both;
    }

`;

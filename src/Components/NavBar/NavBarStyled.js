import styled from 'styled-components';

export const Nav
=styled.nav`
    position: sticky;
    top: 0 ;
    left: 0;
    right: 0;
    
   height: 100px;
    background-image: linear-gradient(to right bottom, #cdfffb, #baf9f4, #a6f3ed, #91ede5, #7ae7de);
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
    box-shadow: 0 15px 20px -15px black;
    :hover{
        background:${({theme})=> theme.colors.secondary};
        transition: background .2s ease-in-out ;

    }
  &.active{
        background: ${({theme})=> theme.colors.button};
        color: white;
        animation: navitem__active .5s ease-in-out  both;

    }

`;

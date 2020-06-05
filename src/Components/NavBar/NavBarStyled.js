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
position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-decoration: none;
    width: 10%;
    height: 50%;
    color:black;
    font-size: 1em;
    margin: 0 10px;
    border-radius: 5px;
    border: 2px solid ${({theme})=>theme.colors.button};
    box-shadow: 0 15px 20px -15px ${({theme})=>theme.colors.button};
    overflow:hidden;
    
    ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transform: translateX(-100%);
        
    }
    :hover{
        ::before{
            transition: transform .3s ease-in-out ;
            transform: translateX(0);
        }
    }
  &.active{
        background: ${({theme})=> theme.colors.button};
        color: #f2f2f2;
        animation: navitem__active .5s ease-in-out  both;
    }

`;

import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Wrapper = styled.nav`
position:fixed;
top:0;
left:0;
width:100vw;
height:100vh;
transform: translateY(${({isOpen})=>isOpen ? `0` : `-100%`});
z-index: 999;
background:white;
transition: transform .3s ease-in-out;
display:flex;
justify-content:center;
align-items:center;
padding: 20px;
@media (min-width:1300px){
    grid-area: sideMenu;
    position:static;
    width:100%;
    height:100%;
    transform:none;
    z-index:10;
}
`;
export const Button=styled.button`
position:fixed;
top:80px;
left:0;
width:100%;
height:35px;
z-index:700;
border: 1px solid black;
border-left:none;
border-right:none;
outline:none;
background: ${({theme})=>theme.colors.primary};
font-size: 1.05em;
@media (min-width:1300px){
  display:none;
}
@media(max-width: 400px){
    top:50px;
}
`;
export const Li = styled.li`
margin: 10px;

`;
export const Ul = styled.ul`
${({main})=>main
?
`
height:100%; 
overflow-Y: scroll;
::-webkit-scrollbar {
    display: none;
}
` 
: 
``};

list-style:none;
background:transparent;
padding: 6px 10px;

${({core})=>core ? `
position:relative;
::before{
    content:'';
    position:absolute;
    top: 98% ;
    left:0;
    width: 40%;
    height:1px;
    
}
`
:
``
} 
::before{
    border-bottom:3px solid ${({theme})=>theme.colors.primary};
border-bottom: ${({core})=>core? ` ` : `none` };
}
`;
export const LinkSide=styled(NavLink)`
text-decoration:none;
color:black;
position:relative;
font-size:1.1em;
font-weight:${({core})=>core ?`bold` : ` ` };
&.active{
    font-size:1.2em;
    text-decoration : underline ;
    ::before{
        content:'';
        position:absolute;
        width:110%;
        height:120%;
        background: ${({theme})=>theme.colors.primary};
        z-index:-1;
        transition: transform .3s ease-in-out ;
        top:50%;
        left:50%;
        transform:translate(-50% , -50%);
}
}

`;
export const CloseBtn=styled.button`
position:fixed;
right:20px;
top:20px;
align-self:flex-start;
justify-self:flex-end;
background:transparent;
font-size: 2em;
border: none;
font-weight: bold;
`;
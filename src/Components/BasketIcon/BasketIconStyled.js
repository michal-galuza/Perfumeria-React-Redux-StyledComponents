import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Img=styled.img`
width:100%;
height:100%;
object-fit:scale-down;
object-position:center;
`;
export const NumberStyled=styled.p`
position:absolute;
top:70%;
left:60%;
background:${({theme})=>theme.colors.primary};
display:flex;
justify-content:center;
align-items:center;
padding:4px;
border-radius:50%;
width:30px;
height:30px;
font-size:1.4em;
font-weight:bold;
`;
export const Wrapper=styled(NavLink)`
position:fixed;
bottom:40px;
right:40px;
width:70px;
height:70px;
background:${({theme})=>theme.colors.button};
z-index:700;
border-radius:50%;
display:${({isBasket})=>isBasket? `none` : `flex`};
justify-content:center;
align-items:center;
padding:6px;

@media (max-width: 500px){
    bottom:30px;
right:30px; 
width:60px;
height:60px; 
}
`;



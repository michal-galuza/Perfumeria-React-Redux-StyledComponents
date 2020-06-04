import styled from  'styled-components';
import {Link} from 'react-router-dom';
export const Wrapper=styled.div`
position:absolute;
top:0;
left:0;
z-index: 999;

width: 100vw;
height: 100vh;
background: ${({theme})=> theme.colors.primary};
color:black;
text-decoration:none;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
`;
export const Back = styled(Link)`
font-size: 1.2em;
color:white;
text-decoration:none;
background: ${({theme})=> theme.colors.button};
padding: 8px;
border-radius: 5px;
:hover{
    color:${({theme})=> theme.colors.secondary};
}
`;
export const H1 = styled.h1`
font-size: 3.5em;
margin: 30px 0 ;
`;
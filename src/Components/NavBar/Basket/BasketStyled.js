import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Image = styled.img`
width:100%;
object-fit:scale-down;
`;
export const Button = styled(Link)`
position: relative;
background: ${({theme})=>theme.colors.button};
border: none;
display: flex;
    justify-content:center;
    align-items: center;
   width: 55px;
   height: 50px;
   margin: 0 50px;
   padding: 2px;
   border-radius: 5px;
   box-shadow: 0 15px 20px -15px ${({theme})=>theme.colors.button};
`;
export const Number= styled.p`
position:absolute;
top:100%;
left:100%;
background: pink;
width:30px;
height:30px;
border-radius: 50%;
display: flex;
justify-content:center;
align-items: center;
color:black;
font-weight: bold;
font-style: italic;
transform: translate(-70% , -70%);
`
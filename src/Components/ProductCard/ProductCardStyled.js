import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(7,1fr);
    grid-row-gap: 10px;
    background-color:white;
    text-align:center;
    color:black;
`;

 export const Button = styled(Link)`
 text-decoration:none;
    width: 200px;
    height: 350px;
    margin:0 20px 20px 20px;
    padding:0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
   outline:none;
   cursor: pointer;
   transition: transform .2s ease-in-out 0.05s;
    :hover {
        transform: scale(1.05);
        border: 1px solid  ${({color})=>color==="dlaNiej"
 ?
`#ffdae0`
:
color==="dlaNiego"
?
({theme})=>theme.colors.sideMenuOne
:
color==="wszystkieProdukty"?
({theme})=>theme.colors.sideMenuTwo
:
({theme})=>theme.colors.primaryChanged
 };
        border-radius: 5px;
        z-index: 2;
    }

 `;


export const Image = styled.div`
background: url(${props=>props.background}) no-repeat  center center ;
background-size:contain;
width:100%;
height:100%;
grid-row: 1/4;
`;
export const Title = styled.h3`
grid-row: 4/6;
display: flex;
justify-content: center;
align-items: center;
`;
export const Type = styled.p`
grid-row: 6/7;
display: flex;
justify-content: center;
align-items: center;
`;
export const Description = styled.p`
display: none;
`;
export const Price = styled.p`
grid-row: 7/8;
display: flex;
justify-content: center;
align-items: center;
`;



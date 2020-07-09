import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Item=styled.div`
min-width:100%;
height:100%;
transform:translateX(${({x})=>x}%);
transition:transform .4s ease-in-out;


display:grid;
grid-template-rows: 40px repeat( 2, 35px) 1fr 50px;
grid-template-columns:30% 1fr 250px 50px;
text-align:start;
background:${({theme , men})=> men===true ? theme.gradients.purple : theme.gradients.pink};
align-items:center;
grid-template-areas:
"img name name empty"
"img brand brand empty"
"img type type empty"
"img description description empty"
"img link link empty";

`;
export const Img=styled.img`
width:100%;
height:100%;
object-fit:contain;
grid-area:img;
background:white;
`;
export const Name=styled.h2`grid-area:name;
    font-size: 1.8em;
    width:100%;
    text-align:center;
    font-weight:normal;
    color:  black;
    padding: 5px 0 0 0;
`;
export const StyledLink=styled(Link)`
position:relative;
grid-area:link;
color:white;
text-decoration:none;
background: ${({theme})=>theme.colors.button};
width:160px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
z-index:1;
justify-self:flex-end;
align-self:flex-start;
margin: 0 60px;
@media (hover: hover) and (pointer: fine){
    ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transition: transform .3s ease-in-out ;
        transform: translateX(-110%);}
:hover{
    color:black;
    ::before{transform: translateX(0);}
    }
}
  &.active{
        background: ${({theme})=> theme.colors.button};
        color: #f2f2f2;
        animation: navitem__active .5s ease-in-out  both;
        @media (hover: hover) and (pointer: fine){
            :hover{
                color:black;
            }
        }
    }
`;
export const Brand=styled.p`
grid-area:brand;
width:100%;
height:100%;
display:flex;
align-items:center;
padding:0px 15px;
font-size:1.2em;

`;
export const Type=styled(Brand)`
grid-area:type;
`;
export const Description=styled(Brand)`grid-area:description;
font-style:italic;
`;
export const Price = styled(Brand)`grid-area:price;
justify-content: flex-start;
font-size:1.5em;
padding: 0 50px;
font-weight:bold;
color:${({theme})=> theme.colors.button};
`
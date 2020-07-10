import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Item=styled.div`
position: relative;
min-width:100%;
height:100%;
display:grid;
grid-template-columns:100%;
grid-template-rows: 1fr 60px 20px 20px 60px;
grid-template-areas:
"img"
"name"
"brand"
"type"
"btn";
transform:translateX(${({x})=> x}%);
transition:transform .5s ease-in-out;
background:${({theme})=>theme.gradients.pinkButton};

@media (min-width: 519.98px){
    padding-right:39px;
    grid-template-columns:40% 1fr;
    grid-column-gap: 5px;
grid-template-rows:  60px 30px 30px 1fr 60px;
grid-template-areas:
"img name"
"img brand"
"img type"
"img description"
"img btn"
;
}
`;
export const Img=styled.img`
grid-area: img;
width:100%;
height:100%;
object-fit:contain;
background:white;
`;
export const StyledLink=styled(Link)`
grid-area: btn;
width:150px;
height:40px;
outline:none;
position:relative;
display: flex;
justify-content:center;
align-items:center;
text-decoration: none;
font-size: 1.05em;
color:white;
overflow:hidden;
z-index:1;
background:${({theme})=>theme.colors.button};
align-self:center;
justify-self:center;
@media (hover: hover) and (pointer: fine) {

 ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transition: transform .3s ease-in-out ;
        transform: translateX(-110%);
    }
    :hover{
        
      color: black;
        ::before{
            transform: translateX(0);
        }
    }
    }
`;
export const Name=styled.h2`grid-area:name;
grid-area: name;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
font-weight:normal;
text-align:center;
`;
export const Brand=styled.p`
grid-area: brand;
width:100%;
height:100%;
text-align:center;
font-style:italic;
display:flex;
justify-content:center;
align-items:center;
`;
export const Type=styled(Brand)`
grid-area: type;
width:100%;
height:100%;
`;
export const Description=styled(Brand)`
grid-area: description;
width:100%;
height:100%;

@media (max-width:519.98px){
    display:none;
}
`;
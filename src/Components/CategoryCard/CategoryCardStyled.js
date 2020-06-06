import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
color: black;
text-decoration: none;
width: 250px;
height: 300px;
margin: 0 50px 80px 50px ;
border: 1px solid ${({type})=> type==="dlaNiej" ? `pink` : ({theme})=>theme.colors.button };
transition: transform .2s ease-in ;
background:white;
:hover{
    transform:translateY(-15px);
}
`;
export const Img=styled.img`
object-fit: scale-down;
`;
export const H2=styled.h3`
font-weight: normal;
font-style: italic;
padding: 5px;
position: relative;
overflow: hidden;
::before{
content:' ';
position:absolute;
${({type})=> type==="dlaNiej" ?({theme})=>theme.gradients.pink : ({theme})=>theme.gradients.purple };
width:80%;
height:100%;
z-index:-1;
opacity:0.5;
transform: translateX(-130%);
transition: transform .3s ease-in-out ;
}
${Wrapper}:hover & {
    ::before{
        transform: translateX(-5px);
    }
}
`;
import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Wrapper = styled.div`
min-height:calc(100% - 100px);
width:100%;
display:grid;
grid-template-areas:
"sideMenu content";
grid-template-columns: 250px 1fr;
grid-template-rows: 100%;
background: ${({theme})=>theme.colors.background};
`;
export const ContentWrapper=styled.div`
grid-area:content;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
padding:20px;
`;
export const TypeWrapper=styled.div`
grid-area:content;
width:100%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:nowrap;
padding:50px;
`;
export const ForHim=styled(Link)`
width:30%;
height:90%;
display: flex;
justify-content:center;
align-items:center;
color: ${({theme})=> theme.colors.button};
font-size: 2em;
text-decoration: none;
background-image: url("https://www.baldingbeards.com/wp-content/uploads/2018/02/best-skin-care-products-1024x683.jpg");
background-size: contain;
background-repeat: repeat;
transition: transform .2s linear;
box-shadow: 0px 20px 20px -20px black;
border: 1px solid black;
:hover{
    transform:scale(1.05);
}
`;
export const ForHer=styled(Link)`
width:30%;
height:90%;
display: flex;
justify-content:center;
align-items:center;
color: ${({theme})=> theme.colors.button};
font-size: 2em;
text-decoration: none;
background-image: url("https://i.notino.com/images/gallery/blog_all/cz-rest/women_cz_714x350_top.jpg");
background-size: contain;
transition: transform .2s linear;
border: 1px solid black;
box-shadow: 0px 20px 20px -20px black;
:hover{
    transform:scale(1.05);
}

`;
export const ForAll = styled(ForHer)`
background-image:url("https://scontent-frt3-1.xx.fbcdn.net/v/t1.15752-9/101661286_657049501893457_2446305911719854080_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=iDeQ3PPy7Y4AX_GRHTh&_nc_ht=scontent-frt3-1.xx&oh=86deeb7b549ad8de13283969b85090b0&oe=5EFD108A");
background-size: cover;
background-repeat:repeat;
`;
export const H2= styled.h2`
background: #000000a8;
color: white;
width:100%;
height:30%;
display:flex;
justify-content:center;
align-items:center;
text-align:center ;
${ForHim}:hover &{
    color:  ${({theme})=> theme.colors.button};
}
${ForHer}:hover &{
    color:  ${({theme})=> theme.colors.primary};
}
${ForAll}:hover &{
    color:  ${({theme})=> theme.colors.secondary};
}
`;
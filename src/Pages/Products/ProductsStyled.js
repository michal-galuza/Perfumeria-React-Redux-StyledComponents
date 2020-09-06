import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Wrapper = styled.div`
min-height:calc(100vh - 115px);
margin-top: 115px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
@media (min-width: 1300px) and (min-height:500px){
display: grid;
grid-template-areas: 
"sideMenu content";
grid-template-columns: 300px 1fr;
grid-template-rows: 100%;
padding: 50px 20px 0px 40px;
}
@media (max-width: 400px){
    min-height:calc(100vh - 85px);
margin-top: 85px; 
}
`;
export const ContentWrapper=styled.div`
grid-area:content;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
padding: 50px 20px;
@media (max-width: 700px){
    padding: 10px ;
}
`;
export const TypeWrapper=styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
flex-wrap:wrap;
flex-direction:column;
padding: 0 5px;
width:100%;
height:100%;
@media (min-width:1000px){
    justify-content:space-between;
    align-items:center;
    flex-wrap:nowrap;
    flex-direction:row;
}
`;
export const ForHim=styled(Link)`
width:100%;
height:450px;
margin: 0 30px;
display: flex;
justify-content:center;
align-items:center;
color: ${({theme})=> theme.colors.button};
font-size: 2em;
text-decoration: none;
background-image: url("https://www.baldingbeards.com/wp-content/uploads/2018/02/best-skin-care-products-1024x683.jpg") ;
background-size: contain;
background-repeat: repeat-y;
transition: transform .2s linear;
box-shadow: 0px 20px 20px -20px black;
border: 1px solid black;
@media (hover: hover) and (pointer: fine) {
:hover{
    transform:scale(1.05);
}
}
@media (max-width:1400.98px){
    height:450px;
    margin: 0 10px;
}
@media (max-width:999.98px){
    height:400px;
    width: 80%;
    margin: 30px 0;
}
@media (max-width: 700px){
    width:100%;
    height:300px;
    margin: 20px 0;
}
@media (max-width: 700px){
    margin: 20px 0;
}
`;
export const ForHer=styled(ForHim)`
background-image: url("https://i.notino.com/images/gallery/blog_all/cz-rest/women_cz_714x350_top.jpg");
background-size: contain;
`;
export const ForAll = styled(ForHim)`
background-image:url("https://i.iplsc.com/dodatki-chemiczne-stosowane-latami-i-w-polaczeniu-z-innymi-k/0007VWGSIKBWMFA3-C122-F4.jpg");
background-size: cover;
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

import styled from 'styled-components';

export const Wrapper = styled.div`
display:grid;
grid-template-areas:
"mapText infoText"
"map info";
grid-template-columns: 1fr 1fr;
grid-template-rows: 200px 1fr;
min-height:calc(100vh - 80px);
margin-top:80px;
position: relative;
background:  ${({theme})=>theme.colors.secondary};
::before{
content: ' ';
position:absolute;
top:50%;
left: 50%;
transform:translate(-50% , -50%);
width:5px;
background:  ${({theme})=>theme.gradients.pinkButton};
height: 80%;
}
@media (max-width: 1000px){
    grid-template-areas:
"infoText"
"info"
"mapText"
"map";
grid-template-columns: 100%;
grid-template-rows: 80px 1fr 80px 1fr;
grid-row-gap: 10px;
padding: 20px 5px;
text-align:center; 
word-wrap: break-word;
::before{
    display:none;

}
}
@media (max-width: 400px){
    margin-top:50px;
}
`;
export const Map=styled.iframe`
grid-area:map;
width: 90%;
height:400px;
border:10px solid  ${({theme})=>theme.colors.primary};
align-self:flex-start;
justify-self:center;
`;
export const InfoWrapper=styled.div`
grid-area:info;
width:100%;
height:100%;
display:grid;
grid-template-columns:400px;
grid-template-rows: 100px repeat(4 ,  30px) 60px 60px;
justify-content:center;
align-content:flex-start;
grid-row-gap:10px;
text-align:center;
font-size:1.2em;
`;
export const H2=styled.h2`
grid-area:mapText;
align-self:center;
justify-self:center;
font-weight:normal;
font-size: 2em;
`;
export const InfoText=styled(H2)`
grid-area:infoText;

`;
export const P = styled.p`
font-weight:bold;
display:flex;
flex-direction:column;
justify-content:space-between;
text-align:center;
width:100%;
`;
export const Logo = styled.h2`
    font-family: 'Marck Script', cursive;
    font-size: 3em;
    width: 100%;
    text-decoration: none;
    color: ${({theme})=> theme.colors.button};
    font-weight:normal;
`;
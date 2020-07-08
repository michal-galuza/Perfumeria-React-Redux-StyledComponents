import styled from 'styled-components';
export const Item=styled.div`
border:1px solid ${({theme})=>theme.colors.primary};
min-width:50%;
height:100%;
transform:translateX(${({x})=>x}%);
transition:transform .3s ease-in-out;
display:grid;
grid-template-rows: 20px 20px 20xp 1fr 20px;
grid-template-columns:30% 1fr;
text-align:start;
padding: 5px;
background:white;
align-items:center;
`;
export const Img=styled.img`
width:100%;
height:90%;
object-fit:scale-down;
grid-column: 1/2;
grid-row: 1/6;
`;
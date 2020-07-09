import styled from 'styled-components';


export const Wrapper=styled.div`
position:relative;
width:70vw;
height:250px;
display:flex;
overflow:hidden;
background:white;
border-radius:15px;
box-shadow: 0 5px 45px 5px ${({theme})=> theme.colors.button};
`;
export const Btn=styled.button`
position:absolute;
top:0;
left:${({right})=>right? `100%` : `0`};
transform:translateX(${({right})=>right? `-100%` : `0`});
z-index:10;
width:50px;
height:100%;
background:transparent;
border:none;
outline:none;
font-size:25px;
font-weight:bold;
color:white;
:hover{
    background:rgba(0,0,0,0.1550595238095238);
}
`;
export const P=styled.p`
width:50px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
border-radius: 50%;
 background:rgba(0,0,0,0.1550595238095238);
 ${Btn}:hover &{
    background:transparent;
 }
`;
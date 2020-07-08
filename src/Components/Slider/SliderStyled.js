import styled from 'styled-components';


export const Wrapper=styled.div`
position:relative;
margin: 150px auto;
width:90vw;
height:250px;
display:flex;
justify-content:center;
overflow:hidden;
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
    background:rgba(0,0,0,0.5550595238095238);
}
`;
export const P=styled.p`

 background:rgba(0,0,0,0.5550595238095238);
 ${Btn}:hover &{
    background:transparent;
 }
`;
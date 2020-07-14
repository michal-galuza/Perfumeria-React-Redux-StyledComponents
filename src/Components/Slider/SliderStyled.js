import styled from 'styled-components';


export const Wrapper=styled.div`
position:relative;
display:flex;
overflow:hidden;
background:white;
width: 100%;
height: 400px;
margin-bottom: 20px;
border-top:1px solid black;
border-bottom:1px solid black;
@media (min-width: 799.98px){
    height:300px;
}
@media(min-width: 1255.98px){
    width:1150px;
    border:1px solid white;
}
`;
export const Btn=styled.button`
position:absolute;
top:50%;
border:none;
left:${({right})=>right? `100%`: `0`};
transform:translate(${({right})=>right?`-100%` : `0`} , -50% );
height: 60px;
width:40px;
background: rgba(0,0,0,0.2234068627450981);
outline:none;
text-align:center;
`;
export const P=styled.p`
color:white;
font-size:3em;
font-weight:bold;
`;
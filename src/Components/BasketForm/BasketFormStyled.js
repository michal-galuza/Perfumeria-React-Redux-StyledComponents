import styled from 'styled-components';
import {Link} from 'react-router-dom';
 
export const Form = styled.form`
display:flex;
justify-content:flex-start;
align-items:flex-end;
align-self:flex-start;
justify-self:flex-end;
flex-direction:column;
grid-area: form;
@media (max-width: 1400px){
    justify-content:center;
align-items:center;
align-self:center;
justify-self:center;
margin: 20px 0;
}
`;
export const Input = styled.input`
border:none;
border-radius: 5px;
background: white;
margin: 15px 0;
outline: none;
height: 40px;
width: 250px;
text-align:center ;
background:white;
border:1px solid grey;
:focus{
    :invalid {
    border: 2px solid ${({theme})=>theme.colors.primary};
}
}

:valid{
    border: 2px solid green;
}

::placeholder{
    color:black;
    text-align:center;

}
@media (max-width: 1319.98px){
width:300px;
}
@media(max-width: 400px){
    width:270px;
}
`;


export const Logo=styled.h1`
    font-family: 'Marck Script', cursive;
    font-size: 3em;
    width: 250px;
    text-align:center;
    text-decoration: none;
    font-weight:normal;
    margin-bottom:10px;
    color: ${({theme})=> theme.colors.button};
    
`;
export const H2=styled.h2`
width: 250px;
text-align:center;
font-weight:normal;
font-style:italic;
`;
export const Fielset=styled.div`
width: 250px;
height: 65px;
border:none;
display:grid;
grid-template-rows: 1fr 1fr;
grid-template-columns:100%;
`;
export const Label=styled.label`
width:100%;
height:100%;
margin:0;
padding:3px 10px;
display:flex;
justify-content:space-between;
cursor:pointer;
`;
export const Radio=styled.input`
outline:none;
margin-top:4px;
cursor:pointer;
`;
export const Btn=styled.button`
width: 150px;
height:40px;
background: ${({disabled , theme})=>disabled? `grey` : theme.colors.button};
border-radius: 5px;
color:white;
font-size: 1.1em;
font-weight: bold;
border:none;
outline:none;
display:flex;
justify-content:center ;
align-items:center ;
text-decoration: none;
align-self: center;
cursor:pointer;
:hover{
    background: ${({disabled , theme})=>disabled? `grey` : theme.colors.primary};
    cursor: ${({disabled})=>disabled? `` : `pointer`};
    color:black;
};

`;
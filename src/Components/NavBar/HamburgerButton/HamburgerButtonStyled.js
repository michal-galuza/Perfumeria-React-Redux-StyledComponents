import styled from 'styled-components';

export const Button= styled.button`
width:40px;
height:40px;
border: 1px solid black;
background:transparent;
transform: rotate(90deg);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
@media (max-width: 400px){
    width:30px;
height:30px;
};
`;
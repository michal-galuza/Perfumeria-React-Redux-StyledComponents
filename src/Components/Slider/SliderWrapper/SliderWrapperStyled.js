import styled from  'styled-components';


export const Wrapper= styled.div`
width: 100%;
height: 350px;
margin: 40px 0 0 0;
display: grid;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;
grid-template-columns:  40px 80% 40px ;
grid-template-rows: 300px   30px;
grid-template-areas:"buttonLeft slider buttonRight"
"null dots empty";
z-index: 10;
background:white;
`;


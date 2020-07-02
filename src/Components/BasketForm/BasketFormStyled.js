import styled from 'styled-components';


export const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin: 10px auto;
text-align:center;
`;
export const Input = styled.input`
border:none;
border-radius: 5px;
background: white;
margin: 5px;
outline: none;
height: 40px;
width: 200px;
text-align:center ;
:invalid {
    border: 2px solid ${({theme})=>theme.colors.primary};
}
:valid{
    border: 2px solid green;
}

::placeholder{
    color:black;
    text-align:center;

}
`;
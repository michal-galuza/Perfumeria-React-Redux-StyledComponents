import styled from 'styled-components';
import Input from '../../Components/Input/Input';
export const Wrapper = styled.div`
width:100%;
height:calc(100% - 100px);
background:${({theme})=>theme.colors.background};
display: flex;
justify-content:center;
align-items:center;
`;
export const WrapperAdres=styled.form`
width:50%;
height:60%;
padding:25px 40px;
display: flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
`;
export const WrapperProducts=styled.div`
width:50%;
height:100%;
padding:15px;
`;


export const InputStyled=styled(Input)`
height:40px;
width:200px;
border: 1px solid black;
border-radius: 5px;
text-align:center;
::placeholder{
    text-align:center;
}
:valid{
    border: 2px solid green;  
}
`;
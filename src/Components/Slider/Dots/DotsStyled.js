import styled from  'styled-components';

export const Wrapper = styled.div`
z-index: 10;
width: 80px;
height: 30px;
border: 2px solid ${({theme})=>theme.colors.secondary};
border-top: none;
border-radius: 0 0 10px 10px;
display: flex;
align-items: center;
padding: 0 7px;
justify-content: space-between;
grid-area: dots;
`;
export const Dot=styled.button`
background: ${({theme})=>theme.colors.primary};
outline: none;
border: none;
width: 15px;
height: 15px;
border-radius: 50%;
`;

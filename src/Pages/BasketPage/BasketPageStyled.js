import styled from 'styled-components';
export const Wrapper = styled.div`
width:100%;
height:calc(100% - 115px);
background:${({theme})=>theme.colors.background};
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
flex-direction:column;
`;

import styled from  'styled-components';
export const Dot=styled.div`
outline: none;
border: none;
width: 15px;
height: 15px;
border-radius: 50%;
background:${({theme})=>theme.colors.primary};
`;

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
${Dot}:nth-child(${(props)=>props.position===0? 2:props.position===100?1:3}) {
    background:${({theme})=>theme.colors.button};
}
`;

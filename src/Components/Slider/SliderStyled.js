import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 900px;
    height: 400px;
    border: 3px solid blue ;
    border-radius: 10px;
    background: transparent;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 10px;
`;
export const Item = styled.div`
 width: 300px;
 height: 300px;
 background: green;
 z-index: 5;
 position: relative;
 transform: top 1s linear ;
top: ${({number})=> number===1 ? `20px` :`0px`};

`;




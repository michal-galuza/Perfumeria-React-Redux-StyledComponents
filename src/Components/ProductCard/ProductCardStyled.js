import styled from 'styled-components'

export const Wrapper = styled.div`
   
    width: 200px;
    height: 400px;
    display: grid;
    grid-template-rows: repeat(7,1fr);
    grid-row-gap: 10px;
   
`;

 export const Button = styled.button`
    margin: 25px;
    width: 200px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
   
    :hover{
        transform: scale(1.05);
        transition: transform .2s ease-in-out 0.05s;
        border: 2px solid  ${({theme})=>theme.colors.secondary};
        border-radius: 5px;
        z-index: 2;
    }

 `;


export const Image = styled.div`
background-image: url(${props=>props.background});
background-repeat: no-repeat;
background-size: cover ;
grid-row: 1/4;
`;
export const Title = styled.h3`
grid-row: 4/6;
display: flex;
justify-content: center;
align-items: center;
`;
export const Type = styled.p`
grid-row: 6/7;
display: flex;
justify-content: center;
align-items: center;
`;
export const Description = styled.p`
display: none;
`;
export const Price = styled.p`
grid-row: 7/8;
display: flex;
justify-content: center;
align-items: center;
`;



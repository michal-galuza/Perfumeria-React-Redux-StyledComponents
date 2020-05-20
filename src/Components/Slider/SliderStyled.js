import styled from 'styled-components';

export const Wrapper=styled.div`
width: 100%;
height: 100%;
background: transparent;
grid-area: slider;
border: 2px solid ${({theme})=>theme.colors.secondary};
border-left: none;
border-right: none;
align-items:center;
justify-items: center;
overflow:hidden ;
position: relative;
`;

export const SliderItemsWrapper=styled.div`
position: absolute;
display:flex;
flex-wrap: nowrap;
align-items:center;
justify-content: center;
height: 100%;
background: transparent;
transform: translateX(${({sliderPosition})=>sliderPosition}%);
transition: transform 1s linear .1s;
`;

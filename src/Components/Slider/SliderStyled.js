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
`;

export const SliderItemsWrapper=styled.div`
height: 100%;
overflow-x: scroll;
background: transparent;
transform: translateX(${(props)=>props.sliderPosition}%);
transition: transform 1s linear .1s;
::-webkit-scrollbar{
    display: none;
};
`;

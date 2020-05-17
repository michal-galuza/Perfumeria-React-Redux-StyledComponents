import styled from  'styled-components';

export const ButtonLeft= styled.button`
z-index: 10;
background: transparent;
outline: none;
border: none;
border: 2px solid ${({theme})=>theme.colors.secondary};
color:${({theme})=>theme.colors.secondary};
font-size: 40px;
width: 100%;
height: 100%;
grid-area: buttonLeft;
border-radius: 8px 0 0 8px;
border-right: none;
box-shadow: 20px 0px 20px -15px ${({theme})=>theme.colors.primary};
:hover{
    transform: scale(1.05) translateX(10%);
    transition: transform .8s easy-in-out .05s ;
    background: ${({theme})=>theme.colors.primary};
    border: 2px solid ${({theme})=>theme.colors.secondary};
}
`;
export const ButtonRight= styled.button`
z-index: 10;
background: transparent;
outline: none;
border: none;
box-shadow: -20px 0px 20px -15px ${({theme})=>theme.colors.primary};
border: 2px solid ${({theme})=>theme.colors.secondary};
border-left: none;
color:${({theme})=>theme.colors.secondary};
font-size: 40px;
width: 100%;
height: 100%;
grid-area: buttonRight;
border-radius: 0 8px 8px 0;
:hover{
    transform: scale(1.05) translateX(-10%);
    transition: transform .8s easy-in-out .05s ;
    background: ${({theme})=>theme.colors.primary};
    border: 2px solid ${({theme})=>theme.colors.secondary};
}
`;
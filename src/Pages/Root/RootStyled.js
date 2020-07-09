import styled from 'styled-components';

export const Wrapper=styled.div`
background:${({theme})=>theme.gradients.pink};
margin-top:60px;
padding:30px 50px 0 50px;
width:100%;
height:calc(100vh - 60px );
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
`;
export const H1=styled.h1`
font-family: 'Marck Script', cursive;
    font-size: 4em;
    width:100%;
    text-align:center;
    text-decoration: none;
    font-weight:normal;
    color: white;
`;
export const WrapperSecond=styled(Wrapper)`
margin-top:0px;
margin:0px;
height:100vh;
background:${({theme})=>theme.gradients.purple};
`;
export const ProductsWrapper=styled.div`
width: 100%;
display:flex;
justify-content: space-around;
align-items: center;
flex-direction:row;
flex-wrap:nowrap;
`;
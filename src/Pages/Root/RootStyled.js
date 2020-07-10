import styled from 'styled-components';

export const Wrapper=styled.div`
background:${({theme})=>theme.colors.primaryChanged};
margin-top:60px;
padding:30px 50px 0 50px;
width:100%;
min-height:calc(100vh - 60px );
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
@media (max-width: 1255.98px){
    padding: 20px 0;
}
@media (max-width: 800px){
    padding: 10px 0;
}
`;
export const H1=styled.h1`
font-family: 'Marck Script', cursive;
    font-size: 4em;
    width:100%;
    text-align:center;
    text-decoration: none;
    font-weight:normal;
    color: ${({theme})=>theme.colors.button};

    @media (max-width: 1255.98px){
    padding: 20px 10px;
}
`;
export const WrapperSecond=styled(Wrapper)`
margin-top:0px;
margin:0px;
`;
export const ProductsWrapper=styled.div`
width: 100%;
display:flex;
justify-content: space-around;
align-items: center;
flex-direction:row;
flex-wrap:nowrap;
@media(max-width:650px){
   flex-direction:column; 
}
`;
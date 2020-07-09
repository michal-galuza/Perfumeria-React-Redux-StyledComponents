import styled from 'styled-components';

export const Wrapper = styled.div`
position:relative;
width:100%;
margin-top:80px;
background:${({theme})=>theme.gradients.navBar};
display:grid;
grid-template-rows: 150px 1fr ;
grid-template-columns:350px 1fr ;
grid-template-areas:
"form title"
"form product"
;
align-content:flex-start;
justify-content:center;
padding: 20px 0;
min-height:calc(100vh - 100px);
@media(max-width: 1320px){
display:flex;
flex-direction:column;
justify-content:center;
}
@media (max-width: 400px){
    margin-top:50px;
    padding: 5px 0;
};
`;
export const TitleWrapper=styled.div`
width:500px;
padding:5px 10px;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:0 auto;
grid-area:title;
@media (max-width: 599.98px){
    width:100%;
    text-align:center;
}
`;
export const Title=styled.h1`
font-size: 2.3em;
font-weight:normal;
@media (max-width: 700px){
    font-size: 1.5em;
};

`;
export const ProductsWrapper=styled.div`
width:100%;
height:100%;
grid-area: product;
position:relative;
`;


export const Sum=styled.h2`
font-style:italic;
font-weight:normal;
width:500px;
height:80px;
display:flex;
justify-content:center;
align-items:center;
align-self:center;
margin:0 auto;
@media (max-width: 1050px){
    width:100%;
}
@media (max-width: 599.98px){
    font-size: 1.2em;
    height:40px;
}
`;

export const Number=styled.p`
font-size: 1.5em;
color:black;
padding: 10px;
`;



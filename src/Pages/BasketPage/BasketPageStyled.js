import styled from 'styled-components';
export const Wrapper = styled.div`
width:100%;
margin-top:80px;
background:${({theme})=>theme.gradients.navBar};
display: flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
padding: 20px 0;
@media (max-width: 400px){
    margin-top:50px;
    padding: 5px 0;
}
`;
export const TitleWrapper=styled.div`
width:100%;
padding:5px 10px;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:nowrap;
@media (max-width: 599.98px){

    text-align:center;
}
`;
export const Title=styled.h1`
font-size: 2.5em;
font-weight:normal;
@media (max-width: 1000px){
    font-size: 2em;
};

`;
export const ProductsWrapper=styled.div`
width:100%;
`;
export const Btn=styled.button`
width: 250px;
height: 35px;
background: ${({theme})=>theme.colors.button};
border-radius:   5px;
color:white;
font-size: 1.05em;
font-weight: bold;
border:none;
outline:none;
margin:10px auto;
@media (max-width: 330px){
    width: 200px;
}
`;
export const BtnWrapper = styled.div`
width: 100%;
display:flex;
justify-content:space-between;
align-items: center;
flex-wrap:nowrap;
padding: 10px 0;
margin: 10px auto;
@media (min-width: 1000px){
    width:1000px;
}
@media (max-width: 620px){
    flex-direction:column;
}
`;
export const Sum=styled.h2`
font-style:italic;
font-weight:normal;
width:1000px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
background:white;
border-bottom:1px solid black;
align-self:center;
margin:0 auto;
@media (max-width: 1050px){
    width:100%;
}
@media (max-width: 599.98px){
    font-size: 1.3em;
    height:40px;
}
`;
export const DeliverTekst=styled(Sum)`
border:none;
`;
export const Number=styled.p`
font-size: 1.5em;
color:black;
padding: 10px;
`;
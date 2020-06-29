import styled from 'styled-components';
export const Wrapper = styled.div`
width:100%;
margin-top:115px;
background:${({theme})=>theme.colors.background};
display: flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
@media (max-width: 400px){
    margin-top:50px;
}
`;
export const TitleWrapper=styled.div`
width:100%;
padding:5px 10px;
display: flex;
justify-content:flex-start;
align-items:center;
flex-wrap:nowrap;
`;
export const ProductsWrapper=styled.div`
width:100%;
`;
export const Btn=styled.button`
width: 250px;
height: 30px;
background: ${({theme})=>theme.colors.button};
border-radius:   5px;
color:white;
font-size: 1.05em;
font-weight: bold;
border:none;
outline:none;
margin:5px auto;
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
@media (max-width: 620px){
    flex-direction:column;
}
`;
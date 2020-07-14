import styled from 'styled-components';


export const Wrapper=styled.div`
margin-top:80px;
width:100%;
min-height: calc(100vh - 80px);
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
background:${({theme})=>theme.colors.primaryChanged};
@media (max-width:400px){
    margin-top:50px;
}
`;
export const WrapperContent=styled.div`
padding:20px;
width:100%;
min-height: calc(100vh - 80px);
display:flex;
justify-content:center;
align-items:flex-start;
flex-wrap:wrap;
`;
export const H1=styled.h1`
width:100%;
text-align:center;
color:${({theme})=>theme.colors.button};
font-size:2.5em;
font-weight:normal;
`;
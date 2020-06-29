import styled from 'styled-components';

export const Wrapper = styled.div`
width:95%;
margin: 0 auto;
background: ${({theme})=>theme.gradients.pink};
display:flex;
justify-content:space-between;
align-items:flex-start;
flex-direction:column;
padding: 10px 0;
border-radius:5px;
`;
export const Label=styled.label`
width:100%;
margin: 2px;
padding: 2px 10px;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
flex-wrap:nowrap;
position:relative;
font-style:italic;
`;
export const Input=styled.select`
    width:70px;
    font-size: 1.05em;
    margin-left:10px;
    border-radius:10px;
    outline:none;
    text-align:center;
    border: 2px solid ${({theme})=>theme.colors.button};
`;
export const Btn=styled.button`
width: 100px;
height: 30px;
background: ${({theme})=>theme.colors.button};
border-radius:   5px;
color:white;
font-size: 1.05em;
font-weight: bold;
border:none;
outline:none;
margin:5px auto;
`;
export const Img=styled.img`
margin:3px auto;
object-fit:scale-down;
object-position:center;
border: 1px solid ${({theme})=>theme.colors.primary};
border-left:none;
border-right:none;
width:500px;
@media (max-width: 800px){
    width:400px;
}
@media (max-width:450px){
    width:90%;
};

`
import styled from 'styled-components';
export const Wrapper = styled.div`
width:95%;
background: ${({theme})=>theme.gradients.pinkButton};
display:flex;
margin:20px auto;
justify-content:space-between;
align-items:flex-start;
flex-direction:column;
padding: 10px 0;
border-radius:10px;
box-shadow: 0 3px 10px -5px black;
@media(min-width: 1034.98px){
    width: 1000px;
}
@media (min-width: 999.98px){
    display:grid;
    grid-template-rows: 1fr  80px;
    grid-template-columns: 250px repeat(4 , 1fr) 100px 100px  ;
    grid-template-areas:
    "img  name  brand  type price  amount  sum "
    "img  btn  btn  btn btn  btn  btn  ";
    justify-items:center;
    align-items:flex-start;
    grid-column-gap:5px;
    height: 200px;
}
@media (min-width: 699.98px) and (max-width: 999.98px){
    padding: 10px;
    display:grid;
    grid-template-rows: repeat(7 , 1fr);
    grid-template-columns: 250px 1fr ;
    grid-template-areas:
    "img  name"
    "img  brand"
    "img  type"
    "img  price"
    "img  amount"
    "img  sum"
    "btn  btn"
}
`;
export const Label=styled.label`
width:100%;
margin: 2px;
padding: 2px 20px;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
flex-wrap:nowrap;
position:relative;
font-style:italic;
@media (min-width: 999.98px){
    flex-direction:column;
    margin:5px;
    padding:0;
    text-align:center;
    height:100%;
}
@media (max-width: 450px){
    text-align:end;
}
`;
export const Input=styled.select`
    width:70px;
    font-size: 1.05em;
    margin-left:10px;
    border-radius:10px;
    outline:none;
    text-align:center;
    border: 2px solid ${({theme})=>theme.colors.button};
    outline:none;
`;
export const Btn=styled.button`
position:relative;
grid-area:btn;
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

@media(min-width: 699.98px){
    width: 150px;
    align-self:flex-end;
justify-self:center;
}
@media (min-width: 999.98px){
    width:250px;
}

`;
export const Img=styled.img`
object-position:center;
grid-area:img;
border: 1px solid ${({theme})=>theme.colors.primary};
border-left:none;
border-right:none;
width:250px;
align-self:center;
justify-self:center;
@media( min-width:999.98px){
  object-fit:contain;
  border:none;
}
@media (max-width:449.98px){
    height: 200px;
};

`;

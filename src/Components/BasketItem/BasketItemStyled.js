import styled from 'styled-components';
export const Wrapper = styled.div`
width:95%;
background: ${({theme})=>theme.gradients.pinkButton};
display:flex;
margin:20px auto;
justify-content:space-between;
align-items:flex-start;
flex-direction:column;
border-radius:10px;
box-shadow: 0 3px 10px -5px black;
font-size: 1em;
padding-top:0;
    padding-bottom: 10px;

@media (min-width: 449.98px) and (max-width:549.88px ){
    width: 435px;
}

@media (min-width: 549.98px){
    padding: 0 5px 0 0 ;
    display:grid;
    grid-template-rows: repeat(6 , 1fr) 45px;
    grid-template-columns: 200px 1fr ;
    grid-template-areas:
    "img  name"
    "img  brand"
    "img  type"
    "img  price"
    "img  amount"
    "img  sum"
    "img  btn"
}
@media (min-width: 699.98px){
    grid-template-columns: 300px 1fr ;
}
@media (min-width: 849.98px){
    display:grid;
    grid-template-rows: 1fr  60px;
    grid-template-columns: 200px repeat(4 , 1fr) 100px 100px  ;
    grid-template-areas:
    "img  name  brand  type price  amount  sum "
    "img  btn  btn  btn btn  btn  btn  ";
    justify-items:center;
    align-items:flex-start;
    grid-column-gap:5px;
    height: 200px;
}
@media(min-width: 965.98px){
    width: 950px;
    height: 170px;
}
`;
export const Label=styled.label`
width:100%;
height:100%;
margin: 2px;
padding: 0px 20px;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
flex-wrap:nowrap;
position:relative;
font-style:italic;
text-align:end;
align-self:center;
@media(min-width: 965.98px){
   margin: 0 5px;
}
@media (min-width: 849.98px){
    flex-direction:column;
    margin:7px 4px;
    padding:10px 0;
    text-align:center;
    height:100%;
    width:100%;
}
`;
export const H3=styled.h3`
font-size:1em;

 width:100%;
    margin-left:10px;
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
margin:0 auto;
align-self:center;
box-shadow: 0 7px 10px -5px grey;
@media(min-width: 549.98px){
    width: 150px;
}
@media (min-width: 849.98px){
    width:250px;
}
:hover{
    background:pink;
   
}
`;
export const Img=styled.img`
object-position:center;
grid-area:img;
height: 100%;
width:100%;
border-bottom:none;
object-fit: scale-down;
align-self:center;
justify-self:center;
background:white;

border-radius:10px 0 0 10px ;
@media( min-width:849.98px){
  object-fit:scale-down;
  border:none;
};
@media(max-width: 549.98px){
    height:150px;
    margin-bottom: 10px;
    border-radius:10px 10px 0 0 ;
    border: 2px solid ${({theme})=>theme.colors.secondary};
    border-bottom:none;
}


`;

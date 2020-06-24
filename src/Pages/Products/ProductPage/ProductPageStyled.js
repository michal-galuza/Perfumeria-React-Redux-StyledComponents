import styled from 'styled-components';

export const Wrapper = styled.form`
width:100%;
height: calc(100% - 80px);
margin-top:80px;
background: ${({theme})=>theme.colors.background};
display:grid;
grid-template-columns: 400px  1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas: "sideMenu img content";
@media (max-width: 1300px){
    min-height: calc(100vh - 115px);
    grid-template-columns: 1fr;
    margin-top:115px;
    grid-template-rows:calc(100vh - 115px) 1fr;
grid-template-areas: 
" img "
"content";
}

@media(max-width: 400px){
    margin-top:85px;
    grid-template-rows:calc(100vh - 100px) 1fr;
}
`;
export const ModalAdd= styled.div`
padding: 40vh 0;
position: absolute;
top:0;
left:0;
transform: translateX(${({isOpen})=>isOpen? `0` : `-100%` } );
width: 100vw;
height:100vh;
background:${({theme})=>theme.gradients.pink};
border:1px solid black;
z-index:999;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
`;
export const WrapperImg=styled.div`
grid-area: img;
width:100%;
height:100%;
display: flex;
justify-content:center;
align-items:center;
padding:60px;
background: ${({type})=>type==="dlaNiej"
 ?
 ({theme})=>theme.gradients.pink
:
type==="dlaNiego"
?
({theme})=>theme.colors.sideMenuOne
:
type==="wszystkieProdukty"?
({theme})=>theme.colors.sideMenuTwo
:
({theme})=>theme.colors.primaryChanged
 };
@media (max-width: 1300px){
padding:40px;
border-top:none;
}
@media (max-width: 500px){
padding:10px;
}
`;
export const Img=styled.img`
width:100%;
height:100%;
object-fit:contain;
object-position:center;
transition: transform .3s linear .1s;
:hover{
transform: scale(1.05);
}
@media(min-width: 1300px){
    width:70%;
height:70%; 
}
`;
export const WrapperContent=styled(WrapperImg)`
grid-area: content;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
background:${({theme})=>theme.colors.background};
height:100%;
padding: 0 0 0 50px;
@media (max-width: 1080px){
    padding-bottom: 60px;
}
`;
export const Name=styled.h1`
width:80%;
border-bottom: 1px solid lightgrey;
display:flex;
align-items:flex-end;
font-size:2em;
font-weight: normal;
text-align: start;
padding:0px 10px;
`;
export const Brand=styled.p`
width:80%;
border-bottom: 1px solid lightgrey;
display:flex;
align-items:flex-end;
font-size:1.2em;
text-align: start;
padding:15px 10px;

`;
export const Type=styled(Brand)`
font-style:italic;
`;
export const Description = styled(Brand)`
flex-wrap:wrap;
font-style:italic;
`;
export const Price = styled(Brand)`
align-items:flex-start;
margin: 10px 0;
font-weight: bold;
font-size:1.2em;
`;
export const BtnWrapper=styled.div`
width:80%;
padding:5px 10px;
font-size:1.1em;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
@media (min-width: 1444px){
    flex-wrap: nowrap;
}

@media (max-width: 360px){
    width:90%;
    justify-content:flex-start;
}
`;
export const Label= styled.label`
display: flex;
    justify-content: center;
    align-items: center;  
`;
export const Input = styled.input`
width:100px;
    font-size: 1.05em;
    padding:2px;
    margin-left:10px;
    border-radius:10px;
    outline:none;
    text-align:center;
    border: 1px solid ${({theme})=>theme.colors.button};
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
::placeholder{
    text-align:center;
    font-size: .8em;
}
:focus{
    border:2px solid ${({theme})=>theme.colors.button}; 
}
`;
export const Btn=styled.button`
outline:none;
position:relative;
    display: flex;
    font-weight:bold;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-decoration: none;
    width:250px;
    height: 40px;
    font-size: 1.05em;
    border-radius: 50px;
    color:black;
    border:2px solid ${({theme})=>theme.colors.button};
    overflow:hidden;
    z-index:1;
    @media (hover: hover) and (pointer: fine) {
 
 ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transition: transform .3s ease-in-out ;
        transform: translateX(-110%);
    }
    :hover{
        color:white;
        font-weight:bold;
        border:3px solid ${({theme})=>theme.colors.button};
        ::before{
            transform: translateX(0);
        }
    }
    }
    @media (max-width: 1444px){
        background: ${({theme})=>theme.colors.button};
        color:white;
        width:200px;
        
    }
    @media (max-width: 1080px){
        background: ${({theme})=>theme.colors.button};
        color:white;
       
    }
    @media (max-width: 627.98px){
        margin-top:20px;
    }
  
`;

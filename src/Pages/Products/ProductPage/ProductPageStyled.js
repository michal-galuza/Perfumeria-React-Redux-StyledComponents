import styled from 'styled-components';


export const Wrapper = styled.div`
width:100%;
height:calc( 100% - 100px);
display: flex;
justify-content:space-between;
align-items:center;
background: white;
overflow:hidden;
`;

export const WrapperImg=styled.div`
width:100%;
height:100%;
padding:60px;
display: flex;
justify-content:center;
align-items:center;
border: 1px solid black;
background: ${({type})=>type==="dlaNiej"
 ?
`#ffdae0`
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
`;
export const Img=styled.img`
padding:10px;
height:90%;
object-fit:scale-down;
object-position:center;
position: relative;
transition: transform .3s linear .1s;
box-shadow: 0 30px 25px -30px black;
:hover{
    transform: scale(1.05);
}
`;
export const WrapperContent=styled(WrapperImg)`
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
background:${({theme})=>theme.colors.background};
`;
export const Name=styled.h1`
width:80%;
height: 130px;
border-bottom: 1px solid lightgrey;
display:flex;
align-items:flex-end;
font-size:3em;
font-weight: normal;
text-align: start;
padding:0px 10px;
`;
export const Brand=styled.p`
width:80%;
height: 50px;
border-bottom: 1px solid lightgrey;
display:flex;
align-items:flex-end;
font-size:1.2em;
font-weight: normal;
text-align: start;
padding:5px 10px;
`;
export const Type=styled(Brand)`
font-style:italic;
`;
export const Description = styled(Type)`
height: 180px;
flex-wrap:wrap;
`;
export const Price = styled(Brand)`
`;
export const BtnWrapper=styled.div`
width:80%;
height: 60px;
padding:5px 10px;
font-size:1.2em;
display:flex;
align-items:center;
justify-content:space-between;
`;
export const Label= styled.label`
display: flex;
    justify-content: center;
    align-items: center;
    height:35px;
    font-size: 1.05em;
  
`;
export const Input = styled.input`
width:140px;
height:30px;
    font-size: 1.05em;
    margin-left:10px;
    border-radius:10px;
    border:1px solid lightgrey;
    outline:none;
    text-align:center;
::placeholder{
    text-align:center;
    font-size: .8em;
}
`;
export const Btn=styled.button`
outline:none;
position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-decoration: none;
    width:300px;
    height:35px;
    font-size: 1.05em;
    border-radius: 50px;
    border: 1px solid lightgrey;
    overflow:hidden;
    z-index:1;
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
        ::before{
            transform: translateX(0);
        }
    }
`;

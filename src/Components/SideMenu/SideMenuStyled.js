import styled from 'styled-components';
import {Link} from 'react-router-dom';
//zmiany kolorów według płci 
export const Wrapper = styled.div`
width:90%;
height:90%;
background: #ffdae0;
padding:20px 0px;
justify-self: flex-end;
align-self:flex-end;
`;

export const Li = styled.li`
overflow:hidden;
background: transparent;
width:100%;
padding:10px;
`;
export const Ul = styled.ul`
width:100%;
list-style: none;
background:transparent;

`;
export const LinkSide=styled(Link)`
font-weight: ${(props)=> props.core ? 'bold': 'normal'};
font-style: ${(props)=> props.core ? 'normal': 'italic'};
width:100%;
overflow:hidden;
position: relative;
text-decoration:none;
color:black;
z-index:3;
::before{
content:' ';
position:absolute;
background:pink;
width:calc(100% + 10px);
height:calc(100% + 10px);
z-index:-1;
transform: translateX(-130%);
transition: transform .3s ease-in-out ;
}
:hover  {
    ::before{
        transform: translateX(-5px);
    }
}

`;
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const LogoStyled = styled(NavLink)`
    font-family: 'Marck Script', cursive;
    font-size: 4em;
    width: 290px;
    text-decoration: none;
    color: ${({theme})=> theme.colors.button};
    :hover{
        color:pink;
    }
    @media (max-width: 400px){
        font-size: 3em;
    }
`;
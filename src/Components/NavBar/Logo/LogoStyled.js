import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const LogoStyled = styled(NavLink)`
    font-family: 'Marck Script', cursive;
    font-size: 4em;
    width: 30%;
    text-decoration: none;
    color: ${({theme})=> theme.colors.button};
    :hover{
        color:pink;
    }
`;
import React from 'react';
import {Button} from './HamburgerButtonStyled';
const HamburgerButton = ({fn , className}) => {
    return ( <Button className={className} onClick={fn}>|||</Button> );
}
 
export default HamburgerButton;
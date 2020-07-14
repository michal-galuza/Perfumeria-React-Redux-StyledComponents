import React from 'react';
import {Img , NumberStyled , Wrapper} from './BasketIconStyled';
import basketIcon from '../../Data/Icons/basketIcon.png';
import { useHistory } from "react-router-dom";
const BasketIcon = ({match}) => {
    
    let {location}=useHistory();
  
    return ( 
       
        <Wrapper isBasket={location.pathname==="/koszyk"? true:false} to="/koszyk">
    <Img src={basketIcon}/> 
    <NumberStyled>{JSON.parse(sessionStorage.getItem("items")).length}</NumberStyled>
    </Wrapper>
  
    );
}
 
export default BasketIcon;
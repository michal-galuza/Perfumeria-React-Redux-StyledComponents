import React from 'react';
import {Image , Button , Number} from './BasketStyled';
import { connect } from 'react-redux';
import basketIcon from '../../../Data/Icons/basketIcon.png';
const Basket=({data , fn})=>(
  
<Button onClick={fn} to="/koszyk">
<Image  src={basketIcon}/>
<Number>{JSON.parse(sessionStorage.getItem("items")).length}</Number>
</Button>
);
const mapStateToProps=state=>({
    data: state.basket
  })
export default connect(mapStateToProps) (Basket);
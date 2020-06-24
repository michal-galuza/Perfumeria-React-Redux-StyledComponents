import React from 'react';
import {Image , Button , Number} from './BasketStyled';
import { connect } from 'react-redux';
const Basket=({data , fn})=>(
<Button onClick={fn} to="/koszyk">
<Image  src="https://www.materialui.co/materialIcons/action/shopping_basket_white_192x192.png"/>
<Number>{data.length}</Number>
</Button>
);
const mapStateToProps=state=>({
    data: state.basket
  })
export default connect(mapStateToProps) (Basket);
import React from 'react';
import {Image , Button , Number} from './BasketStyled';

const Basket=({fn})=>(
<Button onClick={fn} to="/koszyk">
<Image  src="https://www.materialui.co/materialIcons/action/shopping_basket_white_192x192.png"/>
<Number>10</Number>
</Button>
);
export default Basket;
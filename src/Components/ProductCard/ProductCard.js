import React from 'react';
import { Wrapper , Image , Name
, Type , Brand, Price} from './ProductCardStyled';

const ProductCard =({items  , to , match})=>(
   
    <Wrapper color={match}  to={to}>
        <Image height="100%" src={items.image}></Image>
        <Name>{items.name}</Name>
        <Brand>{items.brand}</Brand>
        <Type>{items.type}</Type>
        
        <Price>Cena:   {items.price}zł</Price>
    </Wrapper>

);
export default ProductCard;


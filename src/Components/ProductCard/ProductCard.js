import React from 'react';
import {Button , Wrapper , Image , Title
, Type , Description, Price} from './ProductCardStyled';

const ProductCard =({items  , to , match})=>(
    <Button color={match}  to={to}>
    <Wrapper>
        <Image background={items.image}></Image>
        <Title>{items.name}</Title>
        <Type>Typ:</Type>
        <Description>{items.description}</Description>
        <Price>Cena   {items.price}zł</Price>
    </Wrapper>
    </Button>
);
export default ProductCard;
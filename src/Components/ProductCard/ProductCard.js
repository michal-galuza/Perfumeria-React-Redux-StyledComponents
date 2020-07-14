import React from 'react';
import { Wrapper , Image , Name
, Type , Brand, Price ,  P} from './ProductCardStyled';

const ProductCard =({items  , to , match })=>{
  const {image , name , brand , type , price , sale}=items;
  console.log(sale)
return(
       <Wrapper color={match}  to={to}>
        <Image height="100%" src={image}></Image>
        <Name>{name}</Name>
        <Brand>{brand}</Brand>
        <Type>{type}</Type>
    
      <Price>Cena:{sale!==undefined? <P>{Number(price).toFixed(2)}</P> : Number(price).toFixed(2)} {sale!==undefined? Number(price-(price/100*sale)).toFixed(2) : ''} zł</Price>
    </Wrapper>

)
}
export default ProductCard;


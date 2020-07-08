import React from 'react';
import {Item , Img}  from './SliderItemStyled';

const SliderItem = ({x , data}) => {
    return ( 
    <Item x={x}>
    <Img src={data.image}/>
    <h2>{data.name}</h2>
    <p>{data.brand}</p>
    <p>{data.type}</p>
    <p>{data.description}</p>
    <p>{data.price} zł</p>
    </Item> );
}
 
export default SliderItem;
import React from 'react';
import {Item , Img , StyledLink , Description ,Type
, Brand , Name}  from './SliderItemStyled';
const SliderItem = ({x , data , index , men}) => {
    return ( 
    <Item men={men} x={x}>
    <Img src={data.image} alt={data.name + " " +data.brand}/>
    <Name>{data.name}</Name>
    <Brand>{data.brand}</Brand>
    <Type>{data.type}</Type>
    <Description>{data.description}</Description>
    <StyledLink to={`/produkty/${men?"dlaNiego":"dlaNiej"}/Zapachy/${index}`}>Sprawdź teraz</StyledLink>
    </Item> );
}
 
export default SliderItem;
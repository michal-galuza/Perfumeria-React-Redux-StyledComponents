import React from 'react';
import {Wrapper , Img , Title , Type , Description , Price} 
from './SliderItemStyled';

const SliderItem = () => {
return(
<Wrapper>
<Img src="https://skleppieknydom.pl/28156-tm_home_default/beztluszczowa-baza-pod-makijaz-matujaca-make-up-base-ingrid.jpg"/>
<Title>Produkt 1</Title>
<Type>perfum</Type>
<Description>lore ipsumlore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum  </Description>
<Price>220zł</Price>
</Wrapper>
);
}

export default SliderItem;
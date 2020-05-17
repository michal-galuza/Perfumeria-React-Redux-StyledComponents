import React from 'react';
import {Wrapper } from './SliderWrapperStyled';
import SliderButton from '../SliderButtons/SliderButton';
import Slider from '../Slider';
import Dots from '../Dots/Dots';

const SliderWrapper = () => {
return(

    <Wrapper>
    <SliderButton left/>
    <SliderButton />
    <Slider/>
    <Dots/>
    </Wrapper>

);
}

export default SliderWrapper;
import React from 'react';
import {Wrapper , SliderItemsWrapper} from './SliderStyled';
import SliderItem from './SliderItem/SliderItem';
import { connect } from 'react-redux';
const Slider = ({sliderPosition}) => {
return (
<Wrapper>
<SliderItemsWrapper sliderPosition={sliderPosition}>
<SliderItem />
<SliderItem />
<SliderItem />
</SliderItemsWrapper>
</Wrapper>
);
}
const mapStateToProps=(state)=>({sliderPosition: state.slider.sliderPosition})
export default connect(mapStateToProps,{}) (Slider);
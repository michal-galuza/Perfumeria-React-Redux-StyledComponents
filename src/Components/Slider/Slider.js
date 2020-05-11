import React from 'react';
import {Wrapper , Item} from './SliderStyled';
import SliderButton from '../Button/SliderButton/SliderButton';
import { connect } from 'react-redux';
const  Slider= ({number}) => (
    <Wrapper>
    <SliderButton/>
        <Item number={number}/>

        



    </Wrapper>
);
const mapStateToProps = state=>({number: state.slider.slider});
export default connect(mapStateToProps , {})(Slider);



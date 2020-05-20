import React from 'react';
import {Wrapper , Dot} from './DotsStyled';
import { connect } from 'react-redux';

const Dots = ({position}) => {
    return ( <Wrapper position={position}>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
    </Wrapper> );
}
const mapStateToProps=state=>({position: state.slider.sliderPosition});

export default connect(mapStateToProps, {}) (Dots);
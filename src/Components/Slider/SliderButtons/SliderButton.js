import React from 'react';
import {ButtonLeft , ButtonRight} from './SliderButtonStyled';
import { connect } from 'react-redux';
import actions from '../../../Data/Store/sliders/duck/actions';
const SliderButton = ({left , increment , decrement }) => {
    return ( left? <ButtonLeft onClick={increment}>&lt;</ButtonLeft> : <ButtonRight onClick={decrement}>&gt;</ButtonRight> );
}
const mapDispatchToProps={
        increment: actions.increment ,
        decrement: actions.decrement
}

export default connect(undefined , mapDispatchToProps) (SliderButton);
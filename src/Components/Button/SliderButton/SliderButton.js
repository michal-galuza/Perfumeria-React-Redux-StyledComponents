import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../Data/Store/sliders/duck/actions';
 const SliderButton=({increment , decrement})=>{
   
   return  <>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
};


const mapDispatchToProps = {
    increment:actions.increment,
    decrement: actions.decrement
}
export default connect(null , mapDispatchToProps) (SliderButton);

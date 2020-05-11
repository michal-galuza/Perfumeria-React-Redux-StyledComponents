import types from './types';
import {eyeCreamForHim ,
    scentsForHim,
    faceCreamForHim,
    beardCareForHim } from './productsForHimData';

    const forHimState={
  eyeCreamForHim,
    scentsForHim,
    faceCreamForHim,
    beardCareForHim
    };

const reducerForHim=(state=forHimState , action)=>{
    switch(action.type){
        case types.ADD_TO_BASKET:
            return{
                ...state
            }
            default: return state
    }
   
};


export default reducerForHim;
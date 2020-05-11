
import types from './types';
const counter={
    slider: 1,
}

const reducerCounter =(state=counter , action)=>{
   switch(action.type){
       case types.DECREMENT_COUNTER:
           return{
            slider: state.slider-1
           }
           case types.INCREMENT_COUNTER:
               return{
                 slider: state.slider+1
               }
               default:
                   return{
                       ...state
                   }
   }
};

export default reducerCounter;

import types from './types';




const reducerCounter =(state={
    sliderPosition: 0,
    slajderPositon:0,} ,
     action)=>{
   switch(action.type){
       case types.DECREMENT_COUNTER:  
    
           return  {sliderPosition: state.sliderPosition===-100? 100: state.sliderPosition-100}
         
           

           case types.INCREMENT_COUNTER: //przesuwanie w prawo
               return {sliderPosition: state.sliderPosition===100? -100: state.sliderPosition+100}

               default:
                   return { ...state}
        
   
}
}

export default reducerCounter;
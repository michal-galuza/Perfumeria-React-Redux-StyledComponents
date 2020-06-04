import types from './types';
import {zapachy ,
    krem_pod_oczy,
    krem_do_twarzy,
    pielęgnacja_brody } from './productsForHimData';

    

const reducerForHim=(state={krem_pod_oczy, 
    zapachy,
    krem_do_twarzy,
    pielęgnacja_brody} , action)=>{
        
    switch(action.type){
        case types.ADD_TO_BASKET:
            return{
                ...state
            }
            default: return state
    }
   
};


export default reducerForHim;



import types from './types';
import {zapachy_dla_niego ,
    krem_pod_oczy_dla_niego,
    krem_do_twarzy_dla_niego,
    pielęgnacja_brody_dla_niego } from './productsForHimData';

    

const reducerForHim=(state={krem_pod_oczy_dla_niego, 
    zapachy_dla_niego,
    krem_do_twarzy_dla_niego,
    pielęgnacja_brody_dla_niego} , action)=>{
        
    switch(action.type){
        case types.ADD_TO_BASKET:
            return{
                ...state
            }
            default: return state
    }
   
};


export default reducerForHim;



//.find() i nie js sam szuka odpowiednich koncówek ale wtedy będzie dużo jebania z gównem 
//
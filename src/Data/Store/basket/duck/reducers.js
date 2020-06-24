import types from './types';
import { bindActionCreators } from 'redux';
const initalState=[];
const basketReducer=(state=initalState ,action )=>{
  
    switch(action.type){
        case types.ADD_ITEM:
             return [...state , 
                {...action.item}]
        case types.DELETE_ITEM:
         
            return state.filter(element => element.name !== action.name);
            default:
                return(state)
    }
}


export default basketReducer;
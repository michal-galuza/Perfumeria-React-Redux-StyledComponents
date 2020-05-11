import {scentsForHer,
    faceCreamForHer,
    eyeCreamForHer,
    faceSerumForHer,
    lipstickForHer,
    mascaraForHer,
    foundationMakeUpForHer} from './productsForHer';

const forHerState={
    scentsForHer,
    faceCreamForHer,
    eyeCreamForHer,
    faceSerumForHer,
    lipstickForHer,
    mascaraForHer,
    foundationMakeUpForHer
}

const reducerForHer=(state=forHerState , action)=>{
    switch(action.type){
        
            default: return state
    }
   
};
export default reducerForHer;
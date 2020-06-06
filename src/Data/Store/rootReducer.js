import {combineReducers} from 'redux';
import reducerForHim from './productForHim/duck';
import reducerForHer from './productForHer/duck';
import reducerCounter from './sliders/duck/reducers';
import reducerCategoryImg from './categoryImg/reducer';
const rootReducer = combineReducers({
    dlaNiego:reducerForHim,
    dlaNiej:reducerForHer,
    slider: reducerCounter,
    categoryImg: reducerCategoryImg,
});

export default rootReducer;
import {combineReducers} from 'redux';
import reducerForHim from './productForHim/duck';
import reducerForHer from './productForHer/duck';
import reducerCounter from './sliders/duck/reducers';
import reducerCategoryImg from './categoryImg/reducer';
import basket from './basket/duck/reducers';
const rootReducer = combineReducers({
    dlaNiego:reducerForHim,
    dlaNiej:reducerForHer,
    slider: reducerCounter,
    categoryImg: reducerCategoryImg,
    basket: basket.basketReducer,
    basketNumber: basket.numberReducer
});

export default rootReducer;
import {combineReducers} from 'redux';
import reducerForHim from './productForHim/duck';
import reducerForHer from './productForHer/duck';
import reducerCategoryImg from './categoryImg/reducer';
import basket from './basket/duck/reducers';
const rootReducer = combineReducers({
    dlaNiego:reducerForHim,
    dlaNiej:reducerForHer,
    categoryImg: reducerCategoryImg,
    basket: basket,
});

export default rootReducer;
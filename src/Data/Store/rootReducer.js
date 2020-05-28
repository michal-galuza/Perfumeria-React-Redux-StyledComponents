import {combineReducers} from 'redux';
import reducerForHim from './productForHim/duck';
import reducerForHer from './productForHer/duck';
import reducerCounter from './sliders/duck/reducers';
const rootReducer = combineReducers({
    dlaNiego:reducerForHim,
    dlaNiej:reducerForHer,
    slider: reducerCounter,
})

export default rootReducer;
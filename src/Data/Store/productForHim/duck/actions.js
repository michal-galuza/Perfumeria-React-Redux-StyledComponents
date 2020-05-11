import types from './types';

const add = item =>(
    {type: types.ADD_TO_BASKET, item}
)


export default {add};
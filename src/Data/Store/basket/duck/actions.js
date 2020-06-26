import types from './types';

const addItem=(data)=>{
return(

    {type:types.ADD_ITEM ,
       item:{
        name: data.name,
        image:data.image,
        brand:data.brand,
        kind:data.type,
        price:data.price,
        amount:parseInt(data.amount)
       }
    }
)}
const deleteItem=(data)=>(
    {type:types.DELETE_ITEM ,
        name: data.name
    }
);
const updateNumber=number=>(
    {type:types.UPDATE_NUMBER ,
     number:number
    }
            )
export default {addItem , deleteItem , updateNumber};
import types from './types';
const initalState=[];
const basketReducer=(state=initalState ,action )=>{

switch(action.type){
    case types.ADD_ITEM:
        function sortFn(tab ){

       const  productsList=JSON.parse(sessionStorage.getItem("items")).concat(tab);
       sessionStorage.clear();
            productsList.sort()
            if(productsList.length>=2){
                    for(let i=0; i<productsList.length ; i++){
                        for(let j=0; j<productsList.length; j++){
                            if(productsList[i].name===productsList[j].name && i!==j){
                                if(productsList[i].amount+productsList[j].amount >15){
                                    productsList[i].amount=15
                                }else{
                                    productsList[i].amount+=productsList[j].amount
                                }
                                productsList.splice(j , 1)
                            }
                        }
                    }
                }
                sessionStorage.setItem("items" , JSON.stringify(productsList))

            return productsList
            }
             return sortFn(action.item )
        case types.DELETE_ITEM:
           
            return JSON.parse(sessionStorage.getItem("items")).filter(element => element.name !== action.name);
            
            default:
                return(state)
    }
};
const numberReducer=(state=0 , action)=>{
    switch(action.type){
        case types.UPDATE_NUMBER:
            return action.number
        default:
            return state
    }
}


export default {basketReducer , numberReducer};
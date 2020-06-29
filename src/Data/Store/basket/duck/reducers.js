import types from './types';
const initalState=[];
const basketReducer=(state=initalState ,action )=>{

switch(action.type){
    case types.ADD_ITEM:
        function sortFn(tab ){
            const storage = sessionStorage;
            let productsList =[];
            if(storage.length>0){
        productsList=JSON.parse(storage.getItem("items")).concat(tab);
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
                storage.setItem("items" , JSON.stringify(productsList));
            }
            
            return productsList
            }
             return sortFn(action.item )
        case types.DELETE_ITEM:
            const storage = sessionStorage;
            const productsList =JSON.parse(storage.getItem("items")).filter(element => element.name !== action.name);
            storage.setItem("items" , JSON.stringify(productsList));
            return productsList;

            case types.UPDATE_NUMBER:
                const storageSecond = JSON.parse(sessionStorage.getItem("items"));
                for(let i=0 ; i<storageSecond.length ; i++){
                    if(storageSecond[i].name===action.name){
                       storageSecond[i].amount=parseInt( action.number)
                    }
                }
                sessionStorage.setItem("items" , JSON.stringify(storageSecond));
                return storageSecond


            default:
                return(state)
    }
};




export default basketReducer ;
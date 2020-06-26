import React, {useState} from 'react';
import {Wrapper} from './BasketItemStyled';
import actions from '../../Data/Store/basket/duck/actions';
import {connect} from  'react-redux';
const BasketItem = ({data , store , click}) => {
  const [count , setCount]=useState(data.price * data.amount);
  const option=[];
  for(let i=1 ; i<16 ; i++){
    option[i-1]=i;
  }
  const change=e=>{
    setCount(data.price * e.target.value);
  }
    return ( 
        <Wrapper>
        <img alt={data.name} width="200px" src={data.image}/>
        <h2>{data.name}</h2>
        <h3>{data.brand}</h3>
        <p>{data.kind}</p>
        <p>{data.price}</p>
       <select onChange={change} >
                {option.map(item=> (item===data.amount ?  
                <option selected key={item} value={item}>{item}</option> : 
                  <option  key={item} value={item}>{item}</option>
                ))}
       </select>
        <p>{count}</p>
        <button onClick={()=>click(data)}> Usuń</button>
      </Wrapper>
     );
}
const mapDispatchToProps=dispatch=>{
  return{
    click: data=>dispatch(actions.deleteItem(data))
  }
}
export default connect(null , mapDispatchToProps)(BasketItem);
import React, {useState} from 'react';
import {Wrapper , Label , Input , Btn , Img}  from './BasketItemStyled';
import actions from '../../Data/Store/basket/duck/actions';
import {connect} from  'react-redux';
const BasketItem = ({data , click , update}) => {
  const [count , setCount]=useState(data.price * data.amount);
  const option=[];
  for(let i=1 ; i<16 ; i++){
    option[i-1]=i;
  }
  const change=e=>{
    update( data , e.target.value)
    setCount(data.price * e.target.value);
  }
    return (
        <Wrapper>
        <Label>Nazwa:  <h3>{data.name}</h3></Label>

        <Label>Marka:   <h3>{data.brand}</h3></Label>
       <Img alt={data.name} width="90%" src={data.image}/>
      
      
      <Label>Rodzaj: <p>{data.kind}</p></Label>
      <Label>Cena za sztuke:  <p>{data.price} zł</p></Label>
      <Label>Ilość: <Input onChange={change} >
                {option.map(item=> (item===data.amount ?
                <option selected key={item} value={item}>{item}</option> :
                  <option  key={item} value={item}>{item}</option>
                ))}
       </Input>
       </Label>
       <Label>Razem:  <p>{count} zł</p></Label>
        <Btn onClick={()=>click(data)}> Usuń</Btn>
      </Wrapper>
     );
}
const mapDispatchToProps=dispatch=>{
  return{
    click: data=>dispatch(actions.deleteItem(data)),
    update: (data , e)=>dispatch(actions.updateNumber(data , e))
  }
}

export default connect(null , mapDispatchToProps)(BasketItem);
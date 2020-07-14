import React, {useState} from 'react';
import {Wrapper , Label , Input , Btn , Img , H3}  from './BasketItemStyled';
import actions from '../../Data/Store/basket/duck/actions';
import {connect} from  'react-redux';
const BasketItem = ({data , click , update , className}) => {
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
        <Wrapper className={className}>
        <Img alt={data.name} width="100%" height="100%" src={data.image}/>
        <Label>Nazwa:  <H3>{data.name}</H3></Label>
        <Label>Marka:   <H3>{data.brand}</H3></Label>
      <Label>Rodzaj: <p>{data.kind}</p></Label>
      <Label>Cena za sztuke:  <p>{data.price} zł</p></Label>
      <Label>Ilość: <Input onChange={change} >
                {option.map(item=> (item===data.amount ?
                <option selected key={item} value={item}>{item}</option> :
                  <option  key={item} value={item}>{item}</option>
                ))}
       </Input>
       </Label>
       <Label>Razem:  <p>{Number(count).toFixed(2)} zł</p></Label>
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
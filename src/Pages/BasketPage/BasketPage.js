import React, {  useState, useEffect }  from 'react';
import {Wrapper } from './BasketPageStyled';
import BasketItem from '../../Components/BasketItem/BasketItem';
import { connect } from 'react-redux';
import actions from '../../Data/Store/basket/duck/actions';
const BasketPage = ({data , update}) => {

//useEffect(()=>data=sessionStorage);

    const submit =e=>{ e.preventDefault(); }
    return (
    <Wrapper onSubmit={submit}>
   <h1>Twój koszyk</h1>
    <p> ({data.length} produktów)  </p>
    {data.map((item , index)=>{
      
      return(
        <BasketItem data={item} key={index}/>
        )})}

      <h1>Całkowity koszy: </h1>
      <button>Przesyłka</button>
      <button>Odbiór osobisty</button>
    </Wrapper> );
}
const mapStateToProps=state=>({
  data: state.basket
})
const dispatchProps=dispatch=>{
  return{ update: number=>dispatch(actions.updateNumber(number))}
}


export default connect(mapStateToProps ,dispatchProps) (BasketPage);
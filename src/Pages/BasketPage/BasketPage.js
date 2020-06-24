import React  , {useState , useEffect}from 'react';
import {Wrapper } from './BasketPageStyled';
import BasketItem from '../../Components/BasketItem/BasketItem';
import { connect } from 'react-redux';
const BasketPage = ({data}) => {
 const myStorage= window.localStorage;
 
  useEffect(()=>console.log(data.sort()))
    const submit =e=>{ e.preventDefault(); }
    return ( 
    <Wrapper onSubmit={submit}>
   <h1>Twój koszyk</h1>
    <p> ({data.length} produktów)  </p>
    {data.map((item , index)=>{
     
    
      
      return(
        <BasketItem store={myStorage} data={item} key={index}/>
        )})}
    
      <h1>Całkowity koszy: </h1>
      <button>Przesyłka</button>
      <button>Odbiór osobisty</button>
    </Wrapper> );
}
const mapStateToProps=state=>({
  data: state.basket
})
export default connect(mapStateToProps) (BasketPage);
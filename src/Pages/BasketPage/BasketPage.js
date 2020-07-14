import React from 'react';
import {Wrapper  , TitleWrapper , ProductsWrapper ,
    Sum , Title, Number } from './BasketPageStyled';
import BasketItem from '../../Components/BasketItem/BasketItem';
import BasketForm from '../../Components/BasketForm/BasketForm';
import { connect } from 'react-redux';
const BasketPage = ({data}) => {
  const storage = JSON.parse(sessionStorage.getItem("items"));
  const number=storage.length;

  function sumFn(data){
    let count=0;
    data.map(item=>(count+=(item.price*item.amount)))
    return count} 
    return (
    <Wrapper >
    <TitleWrapper>
   <Title>Koszyk</Title>
   
    <Number> 
    {number===undefined || number===0 ? "0 produktów":number===1? "  1 produkt":number<5?`  ${number} produkty`:`  ${number} produktów`}
    </Number>
    <br/>
    <Sum>Całkowity koszt: {sumFn(storage).toFixed(2)} zł </Sum>
      </TitleWrapper>
      <ProductsWrapper>
    {storage.map((item , index)=>(<BasketItem  data={item} key={index}/>))}
    </ProductsWrapper>
       <BasketForm number={number}/>
    </Wrapper> );
}

const mapStateToProps=state=>({
  data: state.basket
})

export default connect(mapStateToProps ,{}) (BasketPage);
import React ,{useState} from 'react';
import {Wrapper  , TitleWrapper , ProductsWrapper ,
   Btn , BtnWrapper , Sum , Title, DeliverTekst , Number , Deliver} from './BasketPageStyled';
import BasketItem from '../../Components/BasketItem/BasketItem';
import { connect } from 'react-redux';
import BasketForm from '../../Components/BasketForm/BasketForm';
const BasketPage = ({data}) => {
  const storage = JSON.parse(sessionStorage.getItem("items"));
  const number=storage.length;
  const [delivery , setDelivery]=useState(true);
  function sumFn(data){
    let count=0;
    data.map(item=>(count+=(item.price*item.amount)))
    return count} 
    const submit =e=>{ e.preventDefault(); }
    return (
    <Wrapper onSubmit={submit}>
    <TitleWrapper>
   <Title>Twój koszyk</Title>
   
    <Number> 
    {number===undefined? "  0":number===1? "  1 produkt":number<5?`  ${number} produkty`:`  ${number} produktów`}
    </Number>
      </TitleWrapper>
      <ProductsWrapper>
      <Sum>Całkowity koszt: {sumFn(storage)} zł </Sum>
    {storage.map((item , index)=>(<BasketItem  data={item} key={index}/>))}
    </ProductsWrapper>
    {number>4? <Sum>Całkowity koszt: {sumFn(storage)} zł </Sum> : " " }  
      <DeliverTekst>Wybierz sposób dostawy</DeliverTekst>
     <BtnWrapper>
   
      <Btn onClick={()=>setDelivery(true)}>Przesyłka</Btn>
      <Btn onClick={()=>setDelivery(false)}>Odbiór osobisty</Btn>
      </BtnWrapper>
      {delivery===true?<BasketForm/>:<BasketForm personalPickup={true}/> }
  
      
      
    </Wrapper> );
}

const mapStateToProps=state=>({
  data: state.basket
})

export default connect(mapStateToProps ,{}) (BasketPage);
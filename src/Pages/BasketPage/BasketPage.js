import React  from 'react';
import {Wrapper  , TitleWrapper , ProductsWrapper , Btn , BtnWrapper} from './BasketPageStyled';
import BasketItem from '../../Components/BasketItem/BasketItem';
import { connect } from 'react-redux';
const BasketPage = ({data}) => {
  const storage = JSON.parse(sessionStorage.getItem("items"));
  const number=storage.length;
  function sumFn(data){
    let count=0;
    data.map(item=>(count+=(item.price*item.amount)))
    return count} 
    const submit =e=>{ e.preventDefault(); }
    return (
    <Wrapper onSubmit={submit}>
    <TitleWrapper>
   <h1>Twój koszyk</h1>
    <p>({number===undefined? "0 produktów":number===1?"1 produkt":number<5?`${number} produkty`:`${number} produktów`})</p>
      </TitleWrapper>
      <ProductsWrapper>
    {storage.map((item , index)=>(<BasketItem  data={item} key={index}/>))}
    </ProductsWrapper>
      <h1>Całkowity koszt: {sumFn(storage)} zł </h1>
     <BtnWrapper> <Btn>Przesyłka</Btn>
      <Btn>Odbiór osobisty</Btn>
      </BtnWrapper>
    </Wrapper> );
}

const mapStateToProps=state=>({
  data: state.basket
})

export default connect(mapStateToProps ,{}) (BasketPage);
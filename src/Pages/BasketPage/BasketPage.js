import React  , {useState}from 'react';
import {Wrapper , WrapperAdres , WrapperProducts , InputStyled} from './BasketPageStyled';
import BasketItem from '../../Components/BasketItem/BasketItem';
const BasketPage = () => {
    const submit =e=>{ e.preventDefault(); }

    return ( 
    <Wrapper>
    <WrapperAdres >
    <h2>Wprowadź dane do przesyłki</h2>
    <InputStyled  minLength="3" type="text" id="name" 
    placeholder="Imię" required title="Wpisz imię"
    />
    <InputStyled minLength="3" type="text" id="surname" 
    placeholder="Nazwisko" required   title="Wpisz nazwisko"
    />
    <InputStyled minLength="3" type="text" id="postCode"  placeholder="Kod pocztowy"
  pattern="[0-9]{2}\-[0-9]{3}" title="Wpisz poprawnie kod pocztowy np. 22-321" required/>
    <InputStyled minLength="3" type="text" id="city"
     placeholder="Miasto" required  title="Wpisz miasto"/>
    <InputStyled minLength="3" type="text" id="street"
     placeholder="Ulica" required title="Wpisz ulicę"/>
    <InputStyled minLength="3" type="text" id="houseNumber" 
    placeholder="Nr mieszkania/domu" required title="Wpisz numer mieszkania lub domu"/>
    </WrapperAdres>
    <WrapperProducts>
    <BasketItem/>
    <h2>Całkowity koszt </h2>
    
        <button>Zamawiam</button>
     
        </WrapperProducts>
    </Wrapper> );
}
 
export default BasketPage;
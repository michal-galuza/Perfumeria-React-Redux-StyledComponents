import React from 'react';
import {Wrapper , WrapperAdres , WrapperProducts , InputStyled} from './BasketPageStyled';
const BasketPage = () => {
    const submit =e=>{ e.preventDefault(); }
    
    return ( 
    <Wrapper>
    <WrapperAdres >
    <InputStyled  minLength="3" type="text" id="name" placeholder="Imię" required/>
    <InputStyled minLength="3" type="text" id="surname" placeholder="Nazwisko" required/>
    <InputStyled minLength="3" type="text" id="postCode"  placeholder="Kod pocztowy"
  pattern="\d{2}-\d{3}" title="Wpisz poprawnie kod xx-xxx"/>
    <InputStyled minLength="3" type="text" id="city" placeholder="Miasto" required/>
    <InputStyled minLength="3" type="text" id="street" placeholder="Ulica" required/>
    <InputStyled minLength="3" type="text" id="houseNumber" placeholder="Nr mieszkania/domu" required/>
    <button type="submit">Zatwierdź dane do wysyłki</button>
    </WrapperAdres>
    <WrapperProducts>
    <h2>Całkowity koszt </h2>
        <button>Zamawiam</button>
        <div>
            <img />
            <p>Nazwa</p>
            <p>Producent</p>
            <p>Ilość</p>
            <p>Cena</p>
        </div>
        </WrapperProducts>
    </Wrapper> );
}
 
export default BasketPage;
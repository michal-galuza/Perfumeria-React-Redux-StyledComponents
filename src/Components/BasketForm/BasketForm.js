import React from 'react';
import {Input , Form} from './BasketFormStyled';
import{ Btn} from '../../Pages/BasketPage/BasketPageStyled';
const BasketForm = ({personalPickup}) => {
    return ( 
        <Form >
    <h2> {personalPickup? "Dane do odbioru osobistego" : "Dane do przesyłki"}</h2>
    <Input  minLength="3" type="text" id="name" 
    placeholder="Imię" required title="Wpisz imię"
    />
    <Input minLength="3" type="text" id="surname" 
    placeholder="Nazwisko" required   title="Wpisz nazwisko"
    />
    {personalPickup? '' :<> <Input minLength="3" type="text" id="postCode"  placeholder="Kod pocztowy"
  pattern="[0-9]{2}\-[0-9]{3}" title="Wpisz poprawnie kod pocztowy np. 22-321" required/>
    <Input minLength="3" type="text" id="city"
     placeholder="Miasto" required  title="Wpisz miasto"/>
    <Input minLength="3" type="text" id="street"
     placeholder="Ulica" required title="Wpisz ulicę"/>
    <Input minLength="3" type="text" id="houseNumber" 
    placeholder="Nr mieszkania/domu" required title="Wpisz numer mieszkania lub domu"/></>}
    
    <Input minLength="9" type="text" id="number" 
    placeholder="Nr telefonu" required title="Wpisz numer telefonu"/>
    <Input minLength="5" type="text" id="email" 
    placeholder="E-mail" required title="Wpisz e-mail"/>
    <Btn>Zatwierdź</Btn>
    </Form>

     );
}
 
export default BasketForm;
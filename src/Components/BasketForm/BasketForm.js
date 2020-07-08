import React,{useState} from 'react';
import {Input , Form , Logo , Fielset , Label , Radio , H2 , Btn} from './BasketFormStyled';
import {useHistory} from 'react-router-dom';
const BasketForm = ({number }) => {
  const [personal, setPersonal]=useState(false);
  let history=useHistory();
  const submitFn=e=>{
    e.preventDefault();
    history.push('/')
  }
    return ( 
        <Form onSubmit={submitFn}>
        <Logo>Katarzynix</Logo>
   <Fielset>
   <Label for="personal">Odbiór osobisty
   <Radio checked={personal===true? true:false} onClick={()=>setPersonal(true)}  name="delivery" id="personal" type="radio"/>
   </Label>  
    <Label for="delivery">Przesyłka
    <Radio checked={personal===false? true:false} onClick={()=>setPersonal(false)}  name="delivery" id="delivery" type="radio"/>
    </Label>
    </Fielset>     
     
    <H2> {personal? "Dane do odbioru osobistego" : "Dane do przesyłki"}</H2>
    <Input  minLength="3" type="text" id="name" 
    placeholder="Imię" required title="Wpisz imię"
    />
    <Input minLength="3" type="text" id="surname" 
    placeholder="Nazwisko" required   title="Wpisz nazwisko"
    />
    {personal? '' :<> <Input minLength="3" type="text" id="postCode"  placeholder="Kod pocztowy"
  pattern="[0-9]{2}\-[0-9]{3}" title="Wpisz poprawnie kod pocztowy np. 22-321" required/>
    <Input minLength="3" type="text" id="city"
     placeholder="Miasto" required  title="Wpisz miasto"/>
    <Input minLength="3" type="text" id="street"
     placeholder="Ulica" required title="Wpisz ulicę"/>
    <Input minLength="3" type="text" id="houseNumber" 
    placeholder="Nr mieszkania/domu" required title="Wpisz numer mieszkania lub domu"/></>}
    
    <Input minLength="9" type="number " id="number" 
    pattern="[0-9]{3}[0-9]{3}[0-9]{3}" inputMode="numeric"
    placeholder="Nr telefonu" required title="Wpisz numer telefonu 999999999"/>
    <Input minLength="5" type="text" id="email" 
    placeholder="E-mail" required title="Wpisz e-mail"/>
    <Btn  disabled={number===0? true : false} type="submit">Zamawiam</Btn>
    </Form>

     );
}
 
export default BasketForm;
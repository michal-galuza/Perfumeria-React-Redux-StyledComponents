import React from 'react'
import {Wrapper , Map , InfoWrapper , H2 , InfoText , P, Logo} from './AboutUsStyled';
import theme from '../../Styled/theme';

const AboutUs =()=>{
 return(<Wrapper>
 <H2>Lokalizacja naszego sklepu</H2>
 <Map 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.2767525228802!2d20.901672429267425!3d52.20510282061291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471934ce33204903%3A0xd7c9be7374e4faa8!2sJagny%2013%2C%2002-401%20Warszawa!5e0!3m2!1spl!2spl!4v1595513858528!5m2!1spl!2spl" 
 width="600" height="400" frameborder="0"  allowfullscreen="true" aria-hidden="false" tabindex="0"></Map>
     <InfoText>Informacje o nasze firmie </InfoText>
     <InfoWrapper>
     <Logo>Katarzynix</Logo>
     <p> Nazwa firmy: Katarzynix Sp.z o.o</p>
     <p> Adres:   Jagny 13</p>
     <p> Warszawa 02-495</p>
     <p> Polska</p>
        <P>Kontakt email: 
        <span> obsługa-klienta@katarzynix.pl </span>
        </P>
        <P>Telefon obsługi klienta: <br/>
        <a href="tel:+48999999999">+48 999 999 999</a>
        </P>
     </InfoWrapper>
 </Wrapper>)
    }


export default AboutUs;
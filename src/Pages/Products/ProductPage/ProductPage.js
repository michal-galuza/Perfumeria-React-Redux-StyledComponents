import React from 'react';
import { connect } from 'react-redux';
import {Wrapper , WrapperContent, Btn , Label, WrapperImg , Img , Name , Input,  Brand , Type , Description, BtnWrapper , Price} from './ProductPageStyled';
import ErrorPage from '../../ErrorPage/ErrorPage';
const ProductPage = ({data , match}) => {
    return (
        data===undefined ?
       <ErrorPage/>
        :
        <Wrapper>
        <WrapperImg type={match.params.type}>
        <Img height="100%" src={data.image}/>
        </WrapperImg>
        <WrapperContent>
        <Name> {data.name}</Name>
            <Brand>Producent: {data.brand}</Brand>
            
            <Type> Typ: {data.type}</Type>
            <Description><p>Opis:</p> {data.description}</Description>
            <Price>Cena: {data.price}zł</Price>
            <BtnWrapper>
         <Label htmlFor="number">Ilość sztuk:   <Input placeholder="max 15"max="15" maxLength="2" type="number" name="number"/></Label> 
            <Btn>Dodaj do koszyka</Btn>
            </BtnWrapper>
            </WrapperContent>
            
        </Wrapper>
        );
}
 const mapStateToProps=(state , ownProps)=>{
     const {type , category , index}=ownProps.match.params;

 return(
     {data : state[type][category.toLowerCase()][index]}
 )
 }
export default connect(mapStateToProps ,{}) (ProductPage);
import React ,{useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Wrapper , WrapperContent, Btn , Label,
     WrapperImg , Img , Name , Input,  Brand ,
      Type , Description, BtnWrapper , Price,ModalAdd
}from './ProductPageStyled';
import ErrorPage from '../../ErrorPage/ErrorPage';
import SideMenu from '../../../Components/SideMenu/SideMenu';
import actions from '../../../Data/Store/basket/duck/actions';
const ProductPage = ({data , match , click}) => {
    const [amount=1 , setCounter]=useState();
    const [isOpen , setOpen]=useState(false);
    data={...data , amount:amount };
    const submitFn=e=>{
        e.preventDefault();
        setOpen(isOpen ? false : true)
    }
    console.log(window.localStorage);
    return (
        data===undefined ?
       <ErrorPage/>
        :
        <Wrapper onSubmit={submitFn}>
        <SideMenu isProduct="true" match={match}/>
        <ModalAdd isOpen={isOpen}>
            <h2>Przedmiot dodany do koszyka</h2>
            <p>czy chcesz przjeść do koszyka?</p>
            <Btn as={Link} to="/koszyk">Przejdz do koszyka </Btn>
            <Btn as={Link} to={`/produkty/${match.params.type}/${match.params.category}`}>Kontynuuj zakupy </Btn>
        </ModalAdd>
        <WrapperImg type={match.params.type}>
        <Img height="100%" src={data.image}/>
        </WrapperImg>
        <WrapperContent>
        <Name > {data.name}</Name>
            <Brand>Producent: {data.brand}</Brand>
            
            <Type> Typ: {data.type}</Type>
            <Description>Opis:<br/> {data.description}</Description>
            <Price>Cena: {data.price}zł</Price>
            <BtnWrapper>
         <Label htmlFor="number">Ilość sztuk:<Input value={amount} 
         onChange={e => setCounter(e.target.value)} 
         placeholder="max 15" max="15" maxLength="2"
          type="number" name="number"
              title="Wprowadz ilość sztuk. Max 15"
          /></Label> 
            <Btn onClick={()=>click(data)}>Dodaj do koszyka</Btn>
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
 const mapDispatchToProps = (dispatch) => {
    return {
      click: movie => dispatch(actions.addItem(movie))
    }
  }
export default connect(mapStateToProps ,mapDispatchToProps) (ProductPage);
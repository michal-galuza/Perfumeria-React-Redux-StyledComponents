import React ,{useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Wrapper , WrapperContent, Btn , Label,
     WrapperImg , Img , Name , Input,  Brand ,P,
      Type , Description, BtnWrapper , Price,ModalAdd , ModalWrapper
}from './ProductPageStyled';
import ErrorPage from '../ErrorPage/ErrorPage';
import SideMenu from '../../Components/SideMenu/SideMenu';
import actions from '../../Data/Store/basket/duck/actions';
const ProductPage = ({data , match , click}) => {
    const [amount=1 , setCounter]=useState();
    const [isOpen , setOpen]=useState(false);
    let {image , name , brand , type , price , sale,description}=data;
    data={...data , amount:amount };
    const submitFn=e=>{
        e.preventDefault();
        setOpen(isOpen ? false : true)
   
    }

    return (
        data===undefined ?
       <ErrorPage/>
        :
        <Wrapper onSubmit={submitFn}>
        <SideMenu isProduct match={match}/>
        <ModalAdd isOpen={isOpen}>
        <ModalWrapper>
            <h2>Przedmiot dodany do koszyka</h2>
            <p>czy chcesz przjeść do koszyka?</p>
            <Btn as={Link} to="/koszyk">Przejdz do koszyka </Btn>
            <Btn as={Link} to={`/produkty/${match.params.type}/${match.params.category}`}>Kontynuuj zakupy </Btn>
            </ModalWrapper>
        </ModalAdd>
        <WrapperImg type={match.params.type}>
        <Img height="100%" src={image}/>
        </WrapperImg>
        <WrapperContent>
        <Name > {name}</Name>
            <Brand>Producent: {brand}</Brand>
            
            <Type> Typ: {type}</Type>
            <Description>Opis:<br/> {description}</Description>
            <Price>Cena:{sale!==undefined? <P>{Number(price).toFixed(2)}</P> : Number(price).toFixed(2)} {sale!==undefined? Number(price-(price/100*sale)).toFixed(2) : ''} zł</Price>
            <BtnWrapper>
         <Label htmlFor="number">Ilość sztuk:<Input value={amount} 
         onChange={e => setCounter(e.target.value)} 
         placeholder="max 15" max="15" maxLength="2"
          type="number" name="number"
          pattern="{1,15}"
          min="1"
              title="Wprowadz ilość sztuk. Max 15"
          /></Label> 
            <Btn onClick={()=>{ 
                 sale!==undefined?  data.price=Number(price-(price/100*sale)).toFixed(2): price=price;
                 console.log(data)
                return(click(data))
                }}>Dodaj do koszyka</Btn>
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
      click: data => dispatch(actions.addItem(data))
    }
  }
export default connect(mapStateToProps ,mapDispatchToProps) (ProductPage);
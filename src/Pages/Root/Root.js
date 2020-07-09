import React from 'react';
import Slider from '../../Components/Slider/Slider';
import {Wrapper , H1 , WrapperSecond , ProductsWrapper} from './RootStyled';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {connect} from 'react-redux';
 const Root = ({className , data})=>{

 
 return(
     <>
     <Wrapper className={className}>
     <H1>Polecane produkty damskie</H1>
     <Slider/>
     <ProductsWrapper>
     <ProductCard to={`/produkty/dlaNiej/kremy_do_twarzy/0`} items={data[0]}/>
     <ProductCard  to={`/produkty/dlaNiej/kremy_do_twarzy/3`} items={data[3]}/>
     <ProductCard  to={`/produkty/dlaNiej/kremy_do_twarzy/5`} items={data[5]}/>
     </ProductsWrapper>
    
     </Wrapper>
     <WrapperSecond>
     <H1>Polecane produkty męskie</H1>
    <Slider men={true}/>
    <ProductsWrapper>
     <ProductCard to={`/produkty/dlaNiej/kremy_do_twarzy/0`} items={data[0]}/>
     <ProductCard  to={`/produkty/dlaNiej/kremy_do_twarzy/3`} items={data[3]}/>
     <ProductCard  to={`/produkty/dlaNiej/kremy_do_twarzy/5`} items={data[5]}/>
     </ProductsWrapper>
     </WrapperSecond>
     </>
 )
 };

const mapStateToProps=state=>(
    {data: state.dlaNiej.kremy_do_twarzy }
)
export default connect (mapStateToProps , {})(Root);
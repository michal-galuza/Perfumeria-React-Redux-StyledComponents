import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { connect } from 'react-redux';
import {Wrapper } from './ProductsWrapperStyled';

const ProductsWrapper = ({scents , creams}) =>
<Wrapper>

    {scents.map(scents=><ProductCard items={scents}/>)}
    
    {creams.map(creams=><ProductCard items={creams}/>)}
</Wrapper>
const mapStateToProps = state=>({
    scents: state.forHim.scentsForHim ,
    creams: state.forHim.eyeCreamForHim
})
export default connect(mapStateToProps, {})(ProductsWrapper);
